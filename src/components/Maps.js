import React, { Component } from 'react';
import firebase from 'firebase';
import rebase from 're-base';
import { MapComponent } from '../helpers/MapComponent'

class Maps extends Component {

  getUser(){
    return new Promise(user => firebase.auth().onAuthStateChanged(user));
  }

  constructor(){
    super();
    this.base = rebase.createClass(firebase.database());
    this.addNewMarker = this.addNewMarker.bind(this);
    this.state = {
      events: {}
    }
  }

  componentWillMount(){
    this.ref= this.base.syncState(`users/${this.props.userId}/emergency/events/${this.props.eventId}/tracking`,
      {
        context: this,
        state: "events",
      });    
  }

  addNewMarker(){
    try{
      console.log(this.state.events);
      return this.state.events
    }catch(e){
      console.log(e);
    }
  }

  render() {
    
    return <MapComponent events={this.state.events}/> ;
  }
}

export default Maps;