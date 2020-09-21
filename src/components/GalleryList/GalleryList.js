import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    return (
      <div>
        {this.props.gallery.map(item => 
          <GalleryItem item={item} key={item.id} />
        )}
      </div>
    );
  }
}

export default GalleryList;