import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { useRef, useEffect } from "react";

export default function SimpleMap({ showLogin }) {
  const map = useRef(null);
  return (
    // Important! Always set the container height explicitly
    <aside
      aria-label="Map showing pets available with interactive pins"
      className="map-container"
      ref={map}
    >
      <GoogleMapReact
        center={{ lat: 59.95, lng: 30.33 }}
        zoom={11}
      ></GoogleMapReact>
      <style jsx>
        {`
          aside {
            width: ${showLogin ? "0%" : "60%"};
            height: calc(100vh - 63px);
            padding: 0;
            margin: 0;
            position: sticky;
            right: 0;
            top: 63px;
            transform-origin: right;
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
