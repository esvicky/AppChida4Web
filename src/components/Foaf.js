import React, { Component , PropTypes } from 'react';
import firebase from 'firebase';
import rebase from 're-base';
import * as d3 from 'd3'

class Foaf extends Component {

	componentWillMount(){
    firebase.initializeApp({
			apiKey: "AIzaSyAjcTEES1yLGNyW1keIoWvSPesIpqHofbA",
			authDomain: "datausers-432fe.firebaseapp.com",
			databaseURL: "https://datausers-432fe.firebaseio.com",
			projectId: "datausers-432fe",
		});

		this.ref= this.base.syncState(`users`,
			{
				context: this,
				state: "users",
			});
		this.refPolice =  this.base.syncState(`police`,
			{
				context: this,
				state: "police",
			});

	}

	constructor(){
		super();
		this.base = rebase.createClass(firebase.database());
		this.addNode = this.addNode.bind(this);
		this.state = {
			users: {},
			police: {}
		}
	}

	addNode(){
		try{
			console.log(this.state.users);
			console.log(this.state.police);
		}catch(e){
			console.log(e);
		}
	}

	render(){
		return
	}
}

export default Foaf;