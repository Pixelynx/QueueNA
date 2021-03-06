import React, { Component } from 'react';
import '../App.css';

class SendMessage extends Component {
        state = {
            message: ''
        }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="chat-input">
                <input
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

export default SendMessage
