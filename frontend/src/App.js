import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MessageContainer from './messaging/messageContainer.jsx';
import LandingPage from './messaging/landingPage.jsx';

class App extends Component {
  render() {
    return(
      <>
        <MessageContainer />

        <Route exact path='/' component={ LandingPage }/>
      </>
    )
  }
}

export default App
