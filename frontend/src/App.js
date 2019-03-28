import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import MessageContainer from "./messaging/messageContainer.jsx";
import LandingPage from "./landingPage.jsx";
import { About } from "./about.jsx";

import Chatkit from "@pusher/chatkit-server";

import "./App.css";

class App extends Component {
  state = {
    newUser: "",
    isNewUserCreated: false,
    chatkit: ""
  };

  componentDidMount() {
    const chatkit = new Chatkit({
      instanceLocator: "v1:us1:0d111987-7cc9-43a5-944a-628ce39f9dff",
      key:
        "a48470b6-48ae-41cb-8a79-2f51d22a0fe5:9NCpwiAJ1y8ecgzM2iQFUgJinrNC1+dcX8qWSwBPbqw="
    });

    this.setState({
      chatkit: chatkit
    });
  }

  handleNewUser = () => {
    this.state.chatkit
      .createUser({
        id: this.state.newUser,
        name: this.state.newUser
      })
      .then(res => {
        console.log("User created successfully");
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    this.setState({ newUser: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isNewUserCreated: true });
    this.handleNewUser();
  };

  render() {
    debugger;
    console.log(this.state);
    return (
      <>
<<<<<<< HEAD
        <Route exact path='/' component={ LandingPage }/>
        <Route path='/channel' component={ MessageContainer } />
        <Route path='/about' component={ About }/>
=======
        <Route
          exact
          path="/"
          render={() => (
            <LandingPage
              handleChange={this.handleChange}
              newUser={this.state.newUser}
              handleSubmit={this.handleSubmit}
            />
          )}
        />
        <Route
          path="/channel/"
          render={() => (
            <MessageContainer
              username={
                this.state.isNewUserCreated ? this.state.newUser : "Anonymous"
              }
            />
          )}
        />
        <Route path="/about" component={About} />
>>>>>>> ff224f0761da2985834c2ed16d3a309c2185a5d1
      </>
    );
  }
}

export default App;
