import React, { Component } from 'react';
import { Route, Link } from 'react';

import './styles/landingPage.css';

class LandingPage extends Component {
  render() {
    return(
      <>
      <div class="landing_container">
      <title>Queue&A</title>

          <h1>Welcome to Queue&A</h1>

          <h2>An app for developers to help other developers troubleshoot and problem solve.</h2>

        <p>Enter Username:</p>

        <form className="username">
          <input type="text" name='username' />
        </form>

        <p>Please select which channel you'd like to enter:</p>


        <a class="channel-btn" href="/channel">Javascript</a>
        <a class="channel-btn" href="/channel">Swift</a>

        </div>

        </>
          )
  }
}

export default LandingPage;
