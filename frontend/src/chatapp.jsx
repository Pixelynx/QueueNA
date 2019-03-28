import React, { Component } from 'react';
import ChatMessage from './chatmessage.jsx';

class ChatApp extends Component {

  render() {
          let view ='';
          if (this.state.currentView === "ChatMessage") {
              view = <ChatMessage  changeView={this.changeView}/>
          } else if (this.state.currentView === "chatApp") {
              view = <ChatApp currentId={this.state.currentId} />
          }
          return (
              <div className="App">
                  {view}
              </div>
          );
      }
}

export default ChatApp;
