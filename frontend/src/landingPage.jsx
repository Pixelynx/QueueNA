import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import "./styles/landingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="landing_container">
          <title>Queue&A</title>

          <h1>Welcome to Queue&A</h1>

          <h2>
            An app for developers to help other developers troubleshoot and
            problem solve.
          </h2>

          <p>Enter Username:</p>

          <form className="username" onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              name="username"
              value={this.props.newUser}
              onChange={this.props.handleChange}
            />
            <button type="submit">Submit</button>
          </form>

          <p>Please select which channel you'd like to enter:</p>
          <Link to={"/channel"} className="channel-btn">
            Javascript
          </Link>
        </div>
      </>
    );
  }
}

export default LandingPage;
