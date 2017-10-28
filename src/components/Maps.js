import React, { Component } from 'react';
//import firebase from 'firebase';
//import rebase from 're-base';
import { MapComponent } from '../helpers/MapComponent'

class Maps extends Component {
  state = {
    isMarkerShown: false,
  }
/*
  constructor(){
    super();
    this.base = rebase.createClass(firebase.database());
    this.addNewMarker = this.addNewMarker.bind(this);

    this.state = {
        isMarkerShown: false,
    }
  }

  componentWillMount() {
    this.refLocation= this.base.syncState(`/users/{userId}/emergency/events/{eventId}/tracking/{trackId}`,
        {
            lat: this,
            long: ,
        });
  }*/

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default Maps;