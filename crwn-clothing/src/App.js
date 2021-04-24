import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/Homepage/homepage.component.jsx";
import ShopPage from "./pages/ShopPage/shopPage.component.jsx";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1> HATS Page</h1>
    </div>
  );
};

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

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/topics" component={TopicList} />
        <Route path="/topics/:topicId" component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
