import React, { Component } from 'react';

class Maps extends Component {
	 async componentWillMount () {
        const script = document.createElement("script");

        script.src = "https://maps.googleapis.com/maps/api/js?key=MIAPIKEY&callback=initMap";
        script.async = true;

        document.body.appendChild(script);
    }

	initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
	}

	render(){
		return(
			<div id="map"></div>
		);
	}
}
export default Maps;