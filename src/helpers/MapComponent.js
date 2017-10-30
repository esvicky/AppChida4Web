import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';

export const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAEIREWRJJ4vzubRZ-dIrJqYFanw3c-cpA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px`, weight: `600px` }} />,
    mapElement: <div style={{ height: `100%`, weight: `100%` }} />,
  }), withScriptjs, withGoogleMap)((props) => 
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 19.351535, lng: -99.1582022 }} >
      {Object.keys(props.events).map(key => <Marker key={key} position={{ lat: props.events[key].lat, lng: props.events[key].long }} />)}
    </GoogleMap>
);

//"https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
//AIzaSyA2p08r2WMW-mBISZPUlCdQXzoCt0HmxSw
//AIzaSyAEIREWRJJ4vzubRZ-dIrJqYFanw3c-cpA