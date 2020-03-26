import React, { Component } from 'react';
import { Map, Marker } from 'react-amap';

class AMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: { longitude: 121, latitude: 32 }
    }
  }

  setLocation(lat, lon) {
    this.setState({
      position: {
        longitude: lon,
        latitude: lat
      }
    })
  }

  render() {
    //Map.center(this.state.position);
    return (
      <div style={{ width: '100%', height: '100%', position: 'fixed' }}>
          <Map amapkey={"f969d73361ac79af3ca61ac140a75719"} center={this.state.position} zoom={12}>
              <Marker />
          </Map>
      </div>
  );

  }
  
}

export default AMap;
