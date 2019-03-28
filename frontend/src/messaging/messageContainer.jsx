import React, { Component } from "react";
import Messages from "./messages.jsx";
import SendMessage from "./sendMessage.jsx";
import Channels from "./channels.jsx";
// import { ChatManager, TokenProvider } from "@pusher/chatkit-server";
import Chatkit from "@pusher/chatkit-client";

import "../styles/chatbox.css";

const testToken =
  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/0d111987-7cc9-43a5-944a-628ce39f9dff/token";
const instanceLocator = "v1:us1:0d111987-7cc9-43a5-944a-628ce39f9dff";

class MessageContainer extends Component {
  state = {
    messages: [],
    roomId: "31189269"
  };

  // Maybe we can connect [props] the currentUser to the username form on the landing page

  componentDidMount = () => {
  
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
  };

  sendMessage = text => {
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    });
  };

  render() {


    console.log(this.state.messages);
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

export default MessageContainer;
