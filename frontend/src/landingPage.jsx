import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import "./styles/landingPage.css";

class LandingPage extends Component {
  render() {
    return (
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
               <form className="usernameFormDiv" onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              name="username"
              value={this.props.newUser}
              onChange={this.props.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
            </div>
          </div>
          
          <p>Please select a channel to enter:</p>

         <Link to={"/channel"} className="channel-btn">
            Javascript
          </Link>

        </div>
      </>
    )
  }
}

export default LandingPage;
