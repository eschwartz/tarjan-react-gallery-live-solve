import React, { Component } from 'react';

class GalleryItem extends Component {

  state = {
    showDescription: false
  };


  toggleDescription = () => {
    this.setState({
      showDescription: !this.state.showDescription
    });
  }

  render() {
    return (
      <div>
        {/* Image or Description */}
        <div onClick={this.toggleDescription}>
          {
            this.state.showDescription ?

              <span>{this.props.item.description}</span> :

              <img
                src={this.props.item.path} 
                alt={this.props.item.description} 
              />
          }
        </div>

        {/* Like Button */}
        <div>
          <button>Love it!</button>
        </div>

        {/* Display current likes */}
        <div>
          {
            this.props.item.likes === 0 ?
              `Nobody likes this :(` :
              `${this.props.item.likes} people love this!`
          }
        </div>
      </div>
    );
  }
}

export default GalleryItem;