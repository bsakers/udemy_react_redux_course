//This is our App component
//Then purpose of this component is to fetch information from the Spotify API based
//on the user's search, and to pass props down to the Gallery and Profile components.

import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';

//Here we define our App class, which has state.
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  //This is our search function, which based on the user's query, fetches both
  //the artist information and along with the artist tracks, and sets them to state.
  search(){
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    let FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1' ;
    const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
    var myOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer BQB4Rpg6PiLi9NYsbCiKmpyo4fKgO-lBzU_5l6eQ1hBY6sPHtXTeOh5rzd0Tm33qTryKWlCqy-m7HPT6D4wuJ9gQnTIfPAEiUzSQ9RBheEXXBx5H-RBJxoNLldsmqFC726YL97zqwqQ9M2rRyFNT0-RNTpBGt-_7TA&refresh_token=AQBu69kdCIl80r7fynD31RpbimAUNDRz9Xzi3LlYmvEDkFo8mPCHCo-oIVQVhc6yj-gkWllH5RepqG07ISjATJWAmsfCtAO-ANj4esFEQF1z5gwJwLr6npVyMfi5I46lGhQ'
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

  //Here we render the search field and button, which updates the user query state.
  //We also pass the newly fetched artist and track information to their respective
  //components as props.
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
