import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/Homepage/homepage.component.jsx";
import ShopPage from "./pages/ShopPage/shopPage.component.jsx";
import SignInAndSignOut from "./pages/sign-in-sign-out/sign-in-sign-out.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const TopicList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topic List Page</h1>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topic Detail: {props.match.params.topicId}</h1>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/topics" component={TopicList} />
          <Route path="/topics/:topicId" component={TopicDetail} />
          <Route path="/signin" component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}
export default App;
