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
    //obtener userid 
    //var userId = 'ngPOsNf328Q5qJPRizIf2MuWINn2';
    //var eventId = '1509294660732';
    
    //'users/ngPOsNf328Q5qJPRizIf2MuWINn2/emergency/events/1509294660732/tracking'
    //${this.props.match.params.userId}
    this.ref= this.base.syncState(`users/${this.props.userId}/emergency/events/${this.props.eventId}/tracking`,
      {
        context: this,
        state: "events",
      });    
  }

  addNewMarker(){
    try{
      //const user = await this.getUser();
      console.log(this.state.events);
      return this.state.events
      //const events = user.emergency.events
      //this.setState({events: events});
    }catch(e){
      console.log(e);
    }
  }

  render() {
    
    return <MapComponent events={this.state.events}/> ;
  }
}

export default Maps;

/*
  state = {
    isMarkerShown: false,
  }

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

  




*/