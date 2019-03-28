import React, { Component } from 'react';
import { Route, Link } from 'react';

import './styles/landingPage.css';

class LandingPage extends Component {
  state = {
    selectedChannel: ''
  }


  // intended to grab value of selection to use as params in link -- probably need async function
  handleChannelSelect = (e) => {
    this.setState({ selectedChannel: e.target.value })
  }

  render() {
    console.log(this.state)
    return(
      <>
        <div className="landing_container">
          <title>Queue&A</title>
          <nav>
            <ul>
              <li><a id="notifyDemoButton2" class="btn btn-lg" href="/">Home</a></li>
              <li><a id="notifyDemoButton3" class="btn btn-lg" href="/about/">About</a></li>
            </ul>
          </nav>
          <h1>Welcome to Queue&A</h1>
          <div class="small-text">Realtime and Interactive</div>

          <h2>It's time to make it happen. Ask Your Q & help other developers troubleshoot and problem-solve.</h2>
          
          <div className="usernameParent">
            <div className="username">
              <form>
                <input className="effect" type="text" placeholder="Enter Username" />
                <span class="focus-border"></span>
              </form>
            </div>
          </div>
          
          <p>Please select a channel to enter:</p>

          <div className="channelButton">
            <ul>
              <li><a className="channel-btn" href="/channel">Javascript</a></li>
              <li><a className="channel-btn" href="/channel">Swift</a></li>
            </ul>
          </div>

        </div>
      </>
    )
  }
}

export default LandingPage;
