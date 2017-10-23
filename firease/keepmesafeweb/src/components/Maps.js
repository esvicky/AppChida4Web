import React, { Component } from 'react';
var googleMaps = require('@google/maps').createClient({ key: 'AIzaSyCMSvZ7JeGXqQn60QvCeNoO404RwBjQpvo', Promise: Promise});

class Maps extends Component {
  constructor(){
    super();
      this.initMap = this.initMap.bind(this);
  }

	initMap() {
    //var cords = {lat: -25.363, lng: 131.044};
    googleMaps.geocode({address: '1600 Amphitheatre Parkway, Mountain View, CA'}).asPromise()
    .then((response) => {
      console.log(response.json.results);
    })
    .catch((err) => {
      console.log(err);
    });
	}

	render(){
		return(
			<div>{this.initMap}</div>
		);
	}
}
export default Maps;