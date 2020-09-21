import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    gallery: []
  };

  componentDidMount = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      console.log('response', response);
      console.log('response.data', response.data);

      this.setState({
        gallery: response.data
      });
    }).catch(err => {
      console.error(err);
    });
  }

  onLike = (itemId) => {
    console.log('onLike in App.js. ID to like:', itemId);
    
    axios({
      method: 'PUT',
      url: `/gallery/like/${itemId}`
    }).then(response => {
      console.log('PUT complete', response)

      // TODO: call GET again, and refresh the gallery
    }).catch(err => {
      console.error('PUT Failed', err);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>

        <h3>My Photo Gallery</h3>
        <GalleryList 
          gallery={this.state.gallery}
          onLike={this.onLike}
        />
      </div>
    );
  }
}

export default App;
