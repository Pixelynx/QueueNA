import React, { Component } from 'react';

import '../styles/chatbox.css';

class Channels extends Component {
  state = {
    currentChannel: '',
    channelList: ['javascript', 'swift', 'java']
  }

  renderChannels = () => {
    if(this.state.channelList.length > 0) {
      let mapChannels = this.state.channelList.map(channel => {
        return <li className='channel-item'>{channel}</li>
      })
      return mapChannels
    }
  }

  render() {


    return(
      <>
        <div className='channel-search-container'>
          <h1 className='channel-head'>Channels</h1>
          <ul className='channel-list'>{this.renderChannels()}</ul>
          <div className='home-btn'>Back Home</div>
        </div>
      </>
    )
  }
}

export default Channels;
