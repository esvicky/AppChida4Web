import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';

export const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px`, weight: `600px` }} />,
    mapElement: <div style={{ height: `100%`, weight: `100%` }} />,
  }), withScriptjs, withGoogleMap)((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 19.351535, lng: -99.1582022 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 19.351, lng: -99.158 }} onClick={props.onMarkerClick} />}
    </GoogleMap>
);