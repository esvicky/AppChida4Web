const accountSid = 'AC189fad9eef9a38b7c137caa7a4b9273b';
const authToken = 'a5cc77d84f5b391b152f79c24a07a082';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

const twilio = require('twilio')(accountSid, authToken);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp(functions.config().firebase);

exports.alert = functions.database
    .ref('/users/{userId}/emergency/status')
    .onWrite(event => {
        const status = event.data.val();
        console.log(status);
        if(status === true){
          //Obtengo el UserId
          const userId = event.params.userId;
          console.log(`UserId:  ${userId}`);
          //Obtengo el objeto de members
          const userRef = admin.database().ref(`/users/${userId}/members`);
          userRef.once("value", function(members) {
            console.log(members.val());
            console.log(JSON.stringify(members.val()));
          });
          console.log(userRef.phone);
          //Obtengo el objeto de eventosx
          const eventRef = event.data.adminRef.root.child(`/users/${userId}/emergency/events/`);
          eventRef.once("value", function(snapshot) {
            console.log(snapshot.val());
            console.log(JSON.stringify(snapshot.val()));
            
          });

        }
});

/*
          const twilioPhone = '+19526796269';
            twilio.messages
            .create({
              to: phone,
              from: twilioPhone,
              body: `Estoy en peligro, encuentrame en: https://datausers-432fe.firebaseapp.com/${userId}/${eventId}`,
            })
            .then((message) => console.log(message.sid, 'success'))
            .catch(e => console.log(e));
          */