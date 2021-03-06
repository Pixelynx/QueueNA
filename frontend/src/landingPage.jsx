import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ChatkitServer from "@pusher/chatkit-server";

import "./styles/landingPage.css";

class LandingPage extends Component {
  state = {
    // rooms: [
    //   {id: '31189269', name: 'javascript'},
    //   {id: '31189404', name: 'swift'},
    //   {id: '31189405', name: 'java'}
    // ],
    rooms: [],
    chatkitServer: ""
  };

  componentDidMount = () => {
    const chatkitServer = new ChatkitServer({
      instanceLocator: "v1:us1:0d111987-7cc9-43a5-944a-628ce39f9dff",
      key:
        "a48470b6-48ae-41cb-8a79-2f51d22a0fe5:9NCpwiAJ1y8ecgzM2iQFUgJinrNC1+dcX8qWSwBPbqw="
    });

    this.setState({
      chatkitServer: this.state.chatkitServer
    });
  };

  getRoom = () => {
    this.state.chatkitServer
      .getUserJoinableRooms({
        userId: "user1"
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div className="landing_container">
          <title>Queue&A</title>

          <nav>
            <ul>
              <li>
                <a id="notifyDemoButton2" class="btn btn-lg" href="/">
                  Home
                </a>
              </li>
              <li>
                <a id="notifyDemoButton3" class="btn btn-lg" href="/about/">
                  About
                </a>
              </li>
            </ul>
          </nav>
          <h1>Welcome to Queue&A</h1>

          <div class="small-text">Realtime and Interactive</div>

          <h2>
            It's time to make it happen. Ask Your Q & help other developers
            troubleshoot and problem-solve.
          </h2>

          <div className="usernameParent">
            <div className="username">
               <form className="usernameFormDiv" onSubmit={this.props.handleSubmit}>
               {/* <span class="focus-border"></span> */}
                <input
                  className="effect"
                  type="text"
                  name="username"
                  placeholder="Enter a username here"
                  value={this.props.newUser}
                  onChange={this.props.handleChange}
                />

                <div className="btnParent">
                  <button className="btn-6d" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>

          <p>Please select a channel to enter:</p>

          <div className="channelButton">
            <ul>

              <li>
                <Link to={"/channel/javascript"} className="channel-btn">
                  Javascript
                </Link>
              </li>
              <li>
                <Link to={"/channel/swift"} className="channel-btn">
                  Swift
                </Link>
              </li>
              <li>
                <Link to={"/channel/java"} className="channel-btn">
                  Java
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
