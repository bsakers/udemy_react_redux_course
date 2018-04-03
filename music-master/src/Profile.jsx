//This is our Profile component
//The purpose of this component is to display the searched artist information,
//including the artist name, number of followers, image, and music genres

import React, { Component } from 'react';
import './App.css';

//Here we define our Profile class, which does not have state.
//We set our artist information to the information obtained from props.
class Profile extends Component {
  render() {
    let artist = {
      name: "",
      followers: {total: ""},
      images: [{url: ""}],
      genres: []
    }
    artist = this.props.artist !== null ? this.props.artist : artist


    return (
      <div>
        <img
          alt="Profile"
          className="profile-img"
          src={artist.images[0].url}
        />
        <div className="profile-info">
          <div className="profile-name">{artist.name}</div>
          <div className="profile-followers">
            {artist.followers.total} followers
          </div>
          <div className="profile-genres">
            {
              artist.genres.map((genre, index) => {
                genre = genre !== artist.genres[artist.genres.length -1]
                              ? `${genre}, `
                              : `& ${genre}`
                return(
                  <span key={index}>{genre}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
