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
// AppiKey = AIzaSyBzxR-VqlkKffBH5Ojtq37NHNfUhu2tuZc


exports.sanitize = functions.database
    .ref('/users/{userId}/emergency/status')
    .onWrite(event => {
        const status = event.data.val();
        console.log (status);
        if(status === true){
        	twilio.messages
			  .create({
			    to: '',
			    from: '',
			    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
			  })
			  .then((message) => console.log(message.sid));
        }
        
        return event.data.ref.set(question);
});

sanitize = s => {
    let sanitatizeText = s;
    sanitatizeText = sanitatizeText.replace(/\bstupid\b/ig, "great");
    return sanitatizeText;
}