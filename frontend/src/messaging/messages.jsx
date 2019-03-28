import React, { Component } from 'react';
import '../App.css'

class Messages extends Component {
    render() {
        return (
            <ul className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                      <li key={message.id} className="message">
                        <div>{message.senderId}</div>
                        <div>{message.text}</div>
                      </li>
                    )
                })}
            </ul>
        )
    }
}

export default Messages