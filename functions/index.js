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
        console.log (status);
        if(status === true){
          const userId = event.params.userId;
          console.log(`UserId:  ${userId}`);
          const eventId = event.data.ref.parent.child('events').onWrite(track => {
            return track.data val();
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
        }
});
