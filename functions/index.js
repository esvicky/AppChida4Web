const accountSid = 'AC189fad9eef9a38b7c137caa7a4b9273b';
const authToken = 'a5cc77d84f5b391b152f79c24a07a082';

const functions = require('firebase-functions');
const twilio = require('twilio')(accountSid, authToken);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });



exports.alert = functions.database
    .ref('/users/{userId}/emergency/status')
    .onWrite(event => {
        const status = event.data.val();
        console.log (status);
        if(status === true){
          let userId = functions.database.ref('/users/{userId}');
          let eventId = functions.database.ref('/users/{userId}/emergency/events/{eventId}');
          let members = functions.database.ref('/users/{userId}/members');
          console.log(JSON.stringify(members));
          console.log(JSON.stringify(eventId));
          console.log(JSON.stringify(userId));
          twilio.messages
            .create({
              to: '+525510073148',
              from: '+19526796269',
              body: `Ve a este link: https://datausers-432fe.firebaseapp.com/${userId}/${eventId}`,
            })
            .then((message) => console.log(message.sid));
        }
});

exports.event = functions.database
    .ref('/users/{userId}/emergency/events/{eventId}')
    .onWrite(locationList => {
      const objectTrack = locationList.data.val();
      console.log(JSON.stringify(objectTrack));
});
