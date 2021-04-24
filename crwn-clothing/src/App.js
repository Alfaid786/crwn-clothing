import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/homepage.component.jsx";

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
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
      <Route exact path="/topics" component={TopicList} />
      <Route path="/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;
