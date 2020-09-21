import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import {Row} from 'react-bootstrap';

class GalleryList extends Component {
  render() {
    // let rowsOfItems = [
    //   [item, item, item],
    //   [item, item, item],
    //   [item, item]
    // ];

    // From https://stackoverflow.com/questions/8495687/split-array-into-chunks
    // or see lodash: https://lodash.com/docs/4.17.15#chunk
    const chunk = (arr, n) => arr.length ? [arr.slice(0, n), ...chunk(arr.slice(n), n)] : []

    let rowsOfItems = chunk(this.props.gallery, 3);
    console.log('rowsOfItems', rowsOfItems);


    return (
      <>
        {rowsOfItems.map(row => 
          <Row>
            {row.map(item =>
              <GalleryItem item={item} key={item.id} onLike={this.props.onLike} />
            )}
          </Row>
        )}
      </>
    );
  }
}

export default GalleryList;