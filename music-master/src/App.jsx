import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search(){
    console.log(this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    let FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1' ;
    const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
    var myOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer BQD4MlDI0Xudd2xl_uQCGAr45N0e9fIQ6uHbD4p9kejt7XegWPraw9Fc7PU5eY_z-KQpBT65yi9DMeplj_x2Im49cTwOdQdLoHUfXKF6rCq4qLjte7N7d7KyqZNcAKkjNfpzkkDUrlgpuF2xNv3U5W4Sp34Iu6ZLbQ&refresh_token=AQAcqj-YOmiiXqUtqR3h9JxvOtYIcGnAQOGJZnZMSPFDXSW1UAjYzJh9XV8LDLVBZeLgxCO4J4wa0CwGFdNVlmBzYYNMklk0LMq30tqUnaKDrkKVSYaYgZx8Xc_kQ6S3v1A'
      },
      mode: 'cors',
      cache: 'default'
    };
    fetch(FETCH_URL, myOptions)
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      this.setState({ artist: artist })

      FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US`
      fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        console.log('artist top tracks', json)
        const tracks = json.tracks
        this.setState({ tracks: tracks })
      })
    })
  }

  render(){
    return(
      <div className="App">
        <div className="App-title">
          Music Master from App
        </div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              value={this.state.query}
              onChange={event => this.setState({query: event.target.value})}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={()=> this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          this.state.artist !== null ?
          <div>
            <Profile
              artist={this.state.artist}
            />
            <Gallery
              tracks={this.state.tracks}
            />
          </div>
          : <div></div>
        }
      </div>
    )
  }
}

export default App;
