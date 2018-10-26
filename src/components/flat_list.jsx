import React, { Component } from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {

  constructor(props) {
    super(props);
  }

  renderList = (flats) => {
    let key = -1;
    return( 
      flats.map((flat) => {
        key += 1;
        return  <Flat 
                  flat={flat} 
                  key={key} 
                  index={key} 
                  selectFlat={this.props.selectFlat} 
                  selected={this.props.selectedFlat.name === flat.name}
                />
      })
    );
  }

  render() {
    return this.renderList(this.props.flats);
  }
}

export default FlatList;
