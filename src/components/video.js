import React, { Component } from 'react';
import YouTube from 'react-youtube';

class VideoComponent extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0
      }
    };

    return (
      <YouTube
        videoId="XGczbmK-c44"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default VideoComponent;
