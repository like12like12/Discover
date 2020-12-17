var firebaseConfig = {
    apiKey: "AIzaSyBjG9lEIkNT-TioHPnie58KAkjuz2vGrGM",
    authDomain: "discover-8bf53.firebaseapp.com",
    databaseURL: "https://discover-8bf53.firebaseio.com/",
    storageBucket: "discover-8bf53.appspot.com",
    projectId: "discover-8bf53",
};
var curuser = ""
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const contact = db.collection('contact');
const doc = document.getElementById('doc');
const email = document.getElementById('email');
const message = document.getElementById('message');
const username = document.getElementById('name');
const subject = document.getElementById('subject');
const addBtn = document.getElementById('send');
const updateBtn = document.getElementById('updateBtn');
const readBtn = document.getElementById('readBtn');
const removeBtn = document.getElementById('removeBtn');
const log = document.getElementById('log');
const refreshBtn = document.getElementById('refreshBtn');
const result = document.getElementById('result');

// //add
// addBtn.addEventListener('click', e => {
//     e.preventDefault();
//     const ID = contact.doc(doc.value).set({
//             email: email.value,
//             message: message.value,
//             name: username.value,
//             subject: subject.value,
//         })
//         .then(() => {
//             console.log('Data has been saved successfully !')
//             alert('Data has been saved successfully ! ');
//         })
//         .catch(error => {
//             console.error(error)
//         });
// });
// //update
// updateBtn.addEventListener('click', e => {
//     e.preventDefault();
//     contact.doc(doc.value).update({
//         email: email.value,
//         message: message.value,
//         name: username.value,
//         subject: subject.value,
//     });

// });

// //remove
// removeBtn.addEventListener('click', e => {
//     e.preventDefault();
//     contact.doc(doc.value).delete();
// });
// //read
// readBtn.addEventListener('click', e => {
//     e.preventDefault();

//     contact.doc(doc.value).get()
//         .then(user => {
//             if (user.exists) {
//                 console.log(doc.value);
//                 //console.log(user.data());
//                 console.log('email: ' + JSON.stringify(user.data().email));
//                 console.log('message: ' + JSON.stringify(user.data().message));
//                 console.log('name: ' + JSON.stringify(user.data().name));
//                 console.log('subject: ' + JSON.stringify(user.data().subject));

//                 document.getElementById("1").innerHTML = doc.value
//                 document.getElementById("2").innerHTML = JSON.stringify(user.data().name).slice(1, -1)
//                 document.getElementById("3").innerHTML = JSON.stringify(user.data().email).slice(1, -1)
//                 document.getElementById("4").innerHTML = JSON.stringify(user.data().subject).slice(1, -1)
//                 document.getElementById("5").innerHTML = JSON.stringify(user.data().message).slice(1, -1)




//             } else {
//                 console.log('Document does not exist !');
//                 alert('Document does not exist !');
//             }

//         })

//     .catch(error => {
//         console.error(error);
//     });

// });

// //refresh
// removeBtn.addEventListener('click', e => {
//     e.preventDefault();
//     delete console.log
// });


contact.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        //doc.id = document ,doc.data() = json
        console.log(doc.id, " => ", doc.data());
        //document.getElementById("log").innerHTML += doc.id + '<br>'
        document.getElementById("1").innerHTML += doc.id + '<br><br>'
        document.getElementById("2").innerHTML += JSON.stringify(doc.data().name).slice(1, -1) + '<br><br>'
        document.getElementById("3").innerHTML += JSON.stringify(doc.data().email).slice(1, -1) + '<br><br>'
        document.getElementById("4").innerHTML += JSON.stringify(doc.data().subject).slice(1, -1) + '<br><br>'
        document.getElementById("5").innerHTML += JSON.stringify(doc.data().message).slice(1, -1) + '<br><br>'




    });
});

// //console.old 
// (function(logger) {
//     console.old = console.log;
//     console.log = function() {
//         var output = "",
//             arg, i;

//         for (i = 0; i < arguments.length; i++) {
//             arg = arguments[i];
//             output += "<span class=\"log-" + (typeof arg) + "\">";

//             if (
//                 typeof arg === "object" &&
//                 typeof JSON === "object" &&
//                 typeof JSON.stringify === "function"
//             ) {
//                 output += JSON.stringify(arg);
//             } else {
//                 output += arg;
//             }

//             output += "</span>&nbsp;";
//         }

//         logger.innerHTML += output + "<br>";
//         console.old.apply(undefined, arguments);
//     };
// })(log);