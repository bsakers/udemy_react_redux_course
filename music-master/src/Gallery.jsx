//This is our Gallery component
//The purpose of this component is to display the artist tracks, and make each song
//playable and pausable.

import React, { Component } from 'react';
import './App.css';

//Here we define our Gallery class, which has state.
//The state is meant to keep track of the specific song being played or paused.
class Gallery extends Component {
  constructor(props){
    super(props);
    this.state={
      playingUrl: '',
      audio: null,
      playing: false
    }
  }
  //This is the method to actually play a song, which takes adavantage of the
  //javascript Audio functionality. Note the logic here ensures that if a song
  //is already playing, that we can also pause it.
  playAudio(previewUrl) {
    let audio= new Audio(previewUrl);
    if(!this.state.playing){
      audio.play()
      this.setState({
        playing: true,
        playingUrl: previewUrl,
        audio: audio
      })
    } else {
      if (previewUrl === this.state.playingUrl){
        this.state.audio.pause();
        this.setState({
          playing: false
        })
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playingUrl: previewUrl,
          playing: true,
          audio: audio
        })
      }
    }
  }

  //Here we simply display each track's image and name by mapping over the track
  //list which was passed down through props.
  render() {
    const tracks= this.props.tracks
    return (
      <div>
        {tracks.map((track, index)=>{
          console.log('track', track);
          const trackImg = track.album.images[0].url;
          return(
            <div
              key={index}
              className="track"
              onClick={() => this.playAudio(track.preview_url)}>
              <img
                src={trackImg}
                className="track-img"
                alt="track"
              />
              <div className="track-play">
                <div className="track-play-inner">
                  {
                    this.state.playingUrl === track.preview_url & this.state.playing !== false
                      ? <span>||</span>
                      : <span>&#9654;</span>
                  }
                </div>
              </div>
              <p className="track-text">
                {track.name}
              </p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Gallery;
