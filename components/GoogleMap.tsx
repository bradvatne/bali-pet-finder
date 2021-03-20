import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ width: '50vw', height: '100vh', padding: 0, margin: 0 }}>
        <GoogleMapReact
          center={{ lat: 59.95, lng: 30.33 }}
          zoom={11}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
