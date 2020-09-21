import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>

        <h3>My Photo Gallery</h3>
        {this.state.gallery.map(item => 
          <img 
            key={item.id} 
            src={item.path} 
            alt={item.description} 
          />
        )}
      </div>
    );
  }
}

export default App;
