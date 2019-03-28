import React, { Component } from "react";
import Messages from "./messages.jsx";
import SendMessage from "./sendMessage.jsx";
import Channels from "./channels.jsx";
import Chatkit from "@pusher/chatkit-client";
import ChatkitServer from "@pusher/chatkit-server";
import { withRouter } from "react-router-dom";

import "../styles/chatbox.css";

const testToken =
  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/0d111987-7cc9-43a5-944a-628ce39f9dff/token";
const instanceLocator = "v1:us1:0d111987-7cc9-43a5-944a-628ce39f9dff";

class MessageContainer extends Component {
  state = {
    messages: [],
    roomId: "31189269",
    chatkitServer: ""
  };

  // Maybe we can connect [props] the currentUser to the username form on the landing page

  componentDidMount = () => {
    if (this.props.match.url === "/channel/javascript") {
      this.setState({
        roomId: "31189269"
      });
    } else if (this.props.match.url === "/channel/swift") {
      this.setState({
        roomId: "31189404"
      });
    } else if (this.props.match.url === "/channel/java") {
      this.setState({
        roomId: "31189405"
      });
    }

    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: this.props.username,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
    });

    chatManager.connect().then(currentUser => {
      this.setState({ currentUser: currentUser });
      return currentUser.subscribeToRoom({
        roomId: this.state.roomId,
        messageLimit: 100,
        hooks: {
          onMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        }
      });
    });

    const chatkitServer = new ChatkitServer({
      instanceLocator: "v1:us1:0d111987-7cc9-43a5-944a-628ce39f9dff",
      key:
        "a48470b6-48ae-41cb-8a79-2f51d22a0fe5:9NCpwiAJ1y8ecgzM2iQFUgJinrNC1+dcX8qWSwBPbqw="
    });

    this.setState({
      chatkitServer: chatkitServer
    });
  };

  getRoom = () => {
    this.state.chatkitServer
      .getRoom({
        roomId: "31189269"
      })
      .then(room => console.log("got room", room))
      .catch(err => console.error(err));
  };

  sendMessage = text => {
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    });
  };

  render() {
    return (
      <>
        <div className="chatbox-container">
          <Channels />

          <div className="message-container">
            <Messages
              roomId={this.state.roomId}
              messages={this.state.messages}
            />
            <SendMessage sendMessage={this.sendMessage} />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(MessageContainer);
