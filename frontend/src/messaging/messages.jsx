import React, { Component } from 'react';
import '../App.css'

class Messages extends Component {
    render() {
        return (
            <ul className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                      <li key={message.id} className="message">
                        <div className='username'>{message.senderId}</div>
                        <div className='text-body'>{message.text}</div>
                      </li>
                    )
                })}
            </ul>
        )
    }
}

export default Messages
