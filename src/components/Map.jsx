import React from "react";
import GoogleMapReact from "google-map-react";
import './Information.css'
const Map = ({}) => {
  const location = {
    center: {
      lat: 33.93680808430411,
      lng: -84.15704838678316,
    },
    zoom: 5,
  };

  return (
    <div className="map" >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDo7AlYMkUuBskxdPOqHieq4lFaundXins" }}
        defaultCenter={location.center}
        defaultZoom={13}
      />
    </div>
  );
};

export default Map;
