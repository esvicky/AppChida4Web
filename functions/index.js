const accountSid = 'YouraccountSid';
const authToken = 'YourauthToken';
const twilioPhone = 'YoourtwilioPhone';
const sendGridKey = 'yoourSendGridKey';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');


const twilio = require('twilio')(accountSid, authToken);
const cors = require('cors')({origin: true});
sgMail.setApiKey(sendGridKey);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


admin.initializeApp(functions.config().firebase);

exports.foaf = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', "*")
  res.set('Access-Control-Allow-Methods', 'GET, POST')
  const nodes = [];
  const links = [];
  const users = [];

  nodes.push({"id" : "users", "group" : 0});
  nodes.push({"id" : "police", "group" : 0});
  nodes.push({"id" : "Policia CDMX", "group" : 1});
  nodes.push({"id" : "keepmesafe.noreply@gmail.com", "group" : 1});
  nodes.push({"id" : "5510073148", "group" : 1});
  links.push({"source": "users", "target": "police", "value": 1});
  links.push({"source": "police", "target": "Policia CDMX", "value": 2});
  links.push({"source": "police", "target": "keepmesafe.noreply@gmail.com", "value": 2});
  links.push({"source": "police", "target": "5510073148", "value": 2});
/*
  nodes.push({"id": "user1", "group":2})
  nodes.push({"id": "user1-profile1", "group":3})
  nodes.push({"id":"user1-profile1-name-Brendon/Mraa/Vilchiis", "group":4})
  nodes.push({"id":"user1-profile1-phone-5570588284", "group":4})
  nodes.push({"id":"user1-profile1-email-bren0401.bm@gmail.com", "group":4})
  links.push({"source": "users", "target": "user1", "value": 2});
  links.push({"source": "user1", "target": "user1-profile1", "value": 3});
  links.push({"source": "user1-profile1", "target": "user1-profile1-name-Brendon/Mraa/Vilchiis", "value": 4});
  links.push({"source": "user1-profile1", "target": "user1-profile1-phone-5570588284", "value": 4});
  links.push({"source": "user1-profile1", "target": "user1-profile1-email-bren0401.bm@gmail.com", "value": 4});
  

  res.status(200).json({
    "nodes": nodes,
    "links": links
  });*/


  admin.database().ref('users').once('value')
    .then(snap => {
      snap.forEach(element => {
        const user = element.val();
        users.push(user);
      })
      return users;
    }).then(users => {
        //Object.keys(users).map(key => {
          //i contador user
          var i = 1;
          for(let {profile, members, emergency} of users){
            let user = `user${i}`
            nodes.push({"id" : user, "group" : 2})
            links.push({"source": "users", "target": user, "value": 2});
            //Profile
            let profileNode = `${user}-profile${i}`
            nodes.push({"id" : profileNode, "group" : 3})
            links.push({"source": user, "target": profileNode, "value": 3});
            let {name, phone,  email} = profile;
            let userName = `${profileNode}-name-${name}`;
            let userPhone = `${profileNode}-phone-${phone}`;
            let userEmail = `${profileNode}-email-${email}`;
            nodes.push({"id" : userName , "group" : 4});
            nodes.push({"id" : userPhone , "group" : 4});
            nodes.push({"id" : userEmail , "group" : 4});
            links.push({"source": profileNode, "target": userName, "value": 4});
            links.push({"source": profileNode, "target": userPhone, "value": 4});
            links.push({"source": profileNode, "target": userEmail, "value": 4});

            //Members
            let memberNode = `${user}-membersNode${i}`
            nodes.push({"id" : memberNode, "group" : 3})
            links.push({"source": user, "target": memberNode, "value": 3});
            var m = 1;
            Object.keys(members).map(key => {
              let {name, phone, email, done} = members[key]
              //Creo nodo MemberID
              let memberId = `${memberNode}-member${m}`
              nodes.push({"id" : memberId, "group" : 4})
              links.push({"source": memberNode, "target": memberId, "value": 4});

              let memberName = `${memberId}-name-${name}`;
              let memberPhone = `${memberId}-phone-${phone}`;
              let memberEmail = `${memberId}-email-${email}`;
              
              nodes.push({"id" : memberName , "group" : 5});
              nodes.push({"id" : memberPhone , "group" : 5});
              nodes.push({"id" : memberEmail , "group" : 5});

              links.push({"source": memberId, "target": memberName, "value": 5});
              links.push({"source": memberId, "target": memberPhone, "value": 5});
              links.push({"source": memberId, "target": memberEmail, "value": 5});
              m++;
            });

            //Emergency
            let emergencyNode = `${user}-emergency${i}`
            nodes.push({"id" : emergencyNode, "group" : 3})
            links.push({"source": user, "target": emergencyNode, "value": 3});
              //Status
              let {status, events} = emergency;
              let statusNode = `${emergencyNode}-status`;
              nodes.push({"id" : statusNode , "group" : 4});
              links.push({"source": emergencyNode, "target": statusNode, "value": 4});
              //Verify if exists events
              if(events != null){
                //Events
                let eventsNode = `${emergencyNode}-events`
                nodes.push({"id" : eventsNode, "group" : 4})
                links.push({"source": emergencyNode, "target": eventsNode, "value": 4});
                var e = 1;
                Object.keys(events).map(key => {
                  let {tracking} = events[key];

                  let eventId = `${eventsNode}-event${e}`
                  nodes.push({"id" : eventId, "group" : 5})
                  links.push({"source": eventsNode, "target": eventId, "value": 5});

                  let trackingNode = `${eventId}-tracking${e}`
                  nodes.push({"id" : trackingNode, "group" : 6})
                  links.push({"source": eventId, "target": trackingNode, "value": 6});
                  
                  var t = 1;
                  Object.keys(tracking).map(key => {
                    let {lat, long} = tracking[key];
                    let latitude = `${trackingNode}-latitude${t}-${lat}`;
                    let longitude = `${trackingNode}-longitude${t}-${long}`;

                    nodes.push({"id" : latitude , "group" : 7});
                    nodes.push({"id" : longitude , "group" : 7});  
                    
                    links.push({"source": trackingNode, "target": latitude, "value": 7});
                    links.push({"source": trackingNode, "target": longitude, "value": 7});
                    t++;                    
                  });  
                  e++;        
                });
              }
            i++;
          }
        //});
        console.log(JSON.stringify(nodes));
        console.log(JSON.stringify(links));
        res.status(200).json({
          "nodes": nodes,
          "links": links
        });
    }).catch(e => console.log(e));
})

exports.sms = functions.database
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
            mail: mem[key].email
          }});
        console.log(`Member data: ${JSON.stringify(member)}`);
        
        //User Profile
        const us = JSON.parse(JSON.stringify(userResult));
        const user = `${us.split('/')[0].toUpperCase()} ${us.split('/')[1].toUpperCase()}`;
        console.log(`This is Us: ${user}`);
        
        for(let {phone, mail} of member){
          const body = `KEEP ME SAFE detectó una emergencia para ${user}. Ubícalo en: https://datausers-432fe.firebaseapp.com/${userId}/${eventId}`;
          console.log(body);

          twilio.messages
          .create({
            to: `+52${phone}`,
            from: twilioPhone,
            body: body,
          })
          .then((message) => console.log(message.sid, 'success'))
          .catch(e => console.log(e));

        }

        setTimeout(() => {
          if(status){
            const policeNumb='5510073148';
            console.log('Two minutes later... ');
            console.log(`Status:  ${status}`);   
            console.log(`UserId:  ${userId}`);
            console.log(`Police phone:  ${policeNumb}`);
            console.log(`The last id ${eventId}`);
            console.log(`This is user name: ${user}`);

            const body = `KEEP ME SAFE detectó una emergencia para ${user}. \nUbícalo en: https://datausers-432fe.firebaseapp.com/${userId}/${eventId}`;

            twilio.messages
            .create({
              to: `+52${policeNumb}`,
              from: twilioPhone,
              body: body,
            })
            .then((message) => console.log(message.sid, 'success'))
            .catch(e => console.log(e));
          }
        }, 120000);
      });
    }
  }
);

exports.mailto = functions.database
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
            mail: mem[key].email
          }
        });
        console.log(`Member data: ${JSON.stringify(member)}`);

        //User Profile
        const us = JSON.parse(JSON.stringify(userResult));
        const user = `${us.split('/')[0].toUpperCase()} ${us.split('/')[1].toUpperCase()}`;
        console.log(`This is Us: ${user}`);
        
        for(let {phone, mail} of member){
          const body = `KEEP ME SAFE detectó una emergencia para ${user}. \nUbícalo en: https://datausers-432fe.firebaseapp.com/${userId}/${eventId}`;
          const texting = `KEEP ME SAFE detectó una emergencia para ${user}. Te hemos notificado por SMS y CORREO, por favor verifícalo.`
          console.log(body);
          console.log(texting);
          
          const msg = {
            to: mail,
            from: 'noreply@keepmesafe.com',
            subject: 'Emergencia Keep Me Safe',
            text: texting,
            html: body,
          };
          sgMail.send(msg);
          
        }

        setTimeout(() => {
          if(status){
            const email='keepmesafe.noreply@gmail.com';
            console.log('Two minutes later... ');
            console.log(`Status:  ${status}`);   
            console.log(`UserId:  ${userId}`);
            console.log(`Police mail:  ${email}`);
            console.log(`The last id ${eventId}`);
            console.log(`This is user name: ${user}`);

            const body = `KEEP ME SAFE detectó una emergencia para ${user}. \nUbícalo en: https://datausers-432fe.firebaseapp.com/${userId}/${eventId}`;
            const texting = `KEEP ME SAFE detectó una emergencia para ${user}. Te hemos notificado por SMS y CORREO, por favor verifícalo.`
            console.log(body);
            console.log(texting);

            const msg = {
              to: email,
              from: 'noreply@keepmesafe.com',
              subject: 'Emergencia Keep Me Safe',
              text: texting,
              html: body,
            };
            sgMail.send(msg);
          }
        }, 120000);
      });
    }
  }
);