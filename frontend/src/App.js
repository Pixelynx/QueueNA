import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MessageContainer from './messaging/messageContainer.jsx';
import LandingPage from './landingPage.jsx';

class App extends Component {
  render() {
    return(
      <>
        <Route exact path='/' component={ LandingPage }/>
        <Route path='/channel' component={ MessageContainer } />
        <Route path='/about' />
      </>
    )
  }
}

export default App
