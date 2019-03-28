import React, { Component } from 'react';
import ChatApp from './chatapp.jsx';
import './App.css';

import { default as Chatkit } from '@pusher/chatkit-client';

const tokenProvider = new Chatkit.TokenProvider({
  url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/0d111987-7cc9-43a5-944a-628ce39f9dff/token"
});

const chatManager = new Chatkit.ChatManager({
  instanceLocator: "v1:us1:0d111987-7cc9-43a5-944a-628ce39f9dff",
  userId: "tjstevens92",
  tokenProvider: tokenProvider
});

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        currentView: 'ChatMessage'
      }
      this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
      this.setState({
          currentView: view
      })
  }

  render() {
        let view ='';
        if (this.state.currentView === "ChatMessage") {
            view = <ChatMessage  changeView={this.changeView}/>
        }
        return (
            <div className="App">
                {view}
            </div>
        );
    }    
}
export default App;
