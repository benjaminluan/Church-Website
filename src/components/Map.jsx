import React from "react";
import GoogleMapReact from "google-map-react";
const Map = ({}) => {
  const location = {
    center: {
      lat: 33.93680808430411,
      lng: -84.15704838678316,
    },
    zoom: 10,
  };
  //   address: "4545 Timmers Way, Norcross, GA 30093",
  return (
    <div className="map" style={{ height: "500px", width: "500px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDo7AlYMkUuBskxdPOqHieq4lFaundXins" }}
        defaultCenter={location.center}
        defaultZoom={10}
      />
    </div>
  );
};

export default Map;
