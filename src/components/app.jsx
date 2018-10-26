import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import flats from '../data/flat.js';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }


  render() {
    return(
      <div>
        <div className="flat-list">
          <FlatList 
            flats={flats} 
            selectFlat={this.selectFlat} 
            selectedFlat={this.state.selectedFlat}
          />
        </div>
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyBI81eFuPGntn4klyy8QEG_929sGnesI8k'}}
            defaultCenter={this.center()}
            defaultZoom={12}
          >
            <Marker
              lat={this.state.selectedFlat.lat}
              lng={this.state.selectedFlat.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }

}

export default App;
