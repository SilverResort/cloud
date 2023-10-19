import React from 'react';
import GoogleMapReact from 'google-map-react';


export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 36.84371166654738,
      lng: 10.169421226596302
    },
    zoom: 20
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
      </GoogleMapReact>
    </div>
  );
}