const accountSid = 'AC189fad9eef9a38b7c137caa7a4b9273b';
const authToken = 'a5cc77d84f5b391b152f79c24a07a082';
const twilioPhone = '+19526796269';
const sendGridKey = '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';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

const twilio = require('twilio')(accountSid, authToken);
sgMail.setApiKey(sendGridKey);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


admin.initializeApp(functions.config().firebase);

exports.alert = functions.database
  .ref('/users/{userId}/emergency/status')
  .onWrite( event => {
    const status = event.data.val();
    console.log(status);
    if(status){
      //Obtengo el UserId
      const userId = event.params.userId;
      console.log(`UserId:  ${userId}`);
      
      //Obtengo el objeto de events, members, users
      const eventRef = event.data.adminRef.root.child(`/users/${userId}/emergency/events/`);
      const memberRef = event.data.adminRef.root.child(`/users/${userId}/members/`);
      const userRef = event.data.adminRef.root.child(`/users/${userId}/profile/name`);
      const events = eventRef.once("value");
      const members = memberRef.once("value");
      const userInf = userRef.once("value");

      //Creo una promise para acceder a los objetos
      Promise.all([events, members, userInf]).then(([eventsResult, membersResult, userResult]) => {
        //EventID
        const eve = JSON.parse(JSON.stringify(eventsResult));
        const eventId = Object.keys(eve).pop();
        console.log(`This eventId ${eventId}`);
        //Member object
        const mem = JSON.parse(JSON.stringify(membersResult));
        const member = Object.keys(mem).map(key => {
          return {
            phone: mem[key].phone, 
            name: mem[key].name.split('/')[0],
            mail: mem[key].email
          }});
        console.log(`Member data: ${JSON.stringify(member)}`);
        //User Profile
        const us = JSON.parse(JSON.stringify(userResult));
        const user = `${us.split('/')[0].toUpperCase()} ${us.split('/')[1].toUpperCase()}`;
        console.log(`This is Us: ${user}`);
        
        for(let {name, phone, mail} of member){
          const body = `KEEP ME SAFE detectó una emergencia para ${user}. Ubícalo en: https://datausers-432fe.firebaseapp.com/${userId}/${eventId}` 

          twilio.messages
          .create({
            to: `+52${phone}`,
            from: twilioPhone,
            body: body,
          })
          .then((message) => console.log(message.sid, 'success'))
          .catch(e => console.log(e));

          const msg = {
            to: mail,
            from: 'noreply@keepmesafe.com',
            subject: 'Emergencia Keep Me Safe',
            text: body,
            html: body,
          };
          sgMail.send(msg);
        }

      });
    }
  }
);