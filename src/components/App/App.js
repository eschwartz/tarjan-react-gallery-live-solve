import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Equivalent to:
// import Bootstrap from 'react-bootstrap';
// const Container = Bootstrap.Container;

class App extends Component {

  state = {
    gallery: []
  };

  componentDidMount = () => {
    this.getGallery();
  }

  getGallery = () => {
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

    // this.setState({
    //   gallery: this.state.gallery.map(item => {
    //     return {
    //       ...item,
    //       likes: item.id === itemId ? item.likes + 1 : item.likes
    //     };
    //   })
    // })
    
    axios({
      method: 'PUT',
      url: `/gallery/like/${itemId}`
    }).then(response => {
      console.log('PUT complete', response)

      this.getGallery();
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
        <Container>
          <GalleryList 
            gallery={this.state.gallery}
            onLike={this.onLike}
          />
        </Container>
      </div>
    );
  }
}

export default App;
