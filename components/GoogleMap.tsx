import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

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
      <aside
        aria-label="Map showing pets available with interactive pins"
        className="map-container"
      >
        <GoogleMapReact
          center={{ lat: 59.95, lng: 30.33 }}
          zoom={11}
        ></GoogleMapReact>
        <style jsx>
          {`
            aside {
              width: 60%;
              height: calc(100vh - 63px);
              padding: 0;
              margin: 0;
              position: sticky;
              right: 0;
              top: 63px;
            }

            @media (max-width: 1140px) {
              aside {
                display: none;
              }
            }
          `}
        </style>
      </aside>
    );
  }
}

export default SimpleMap;
