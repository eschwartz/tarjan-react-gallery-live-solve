import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    return (
      <div>
        {this.props.gallery.map(item => 
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

export default GalleryList;