import React from "react";
import GoogleMaps from "simple-react-google-maps";

const GoogleMap = ({ restaurant }) => {
  return (
    <div>
      <GoogleMaps
        apiKey= {`${process.env.REACT_APP_FIREBASE_API_KEY}`}
        style={{ height: "20rem", width: "100%", marginBottom: "1rem" }}
        zoom={15}
        center={{ lat: 43.2532557, lng: 2.2690552 }}
        markers={{ lat: 43.2532557, lng: 2.2690552 }}
      />
    </div>
  );
};
export default GoogleMap;
