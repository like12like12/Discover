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
    // signup btn

    // $("#signup").click(function() {
    //     var name = $("#name").val().trim();;
    //     var email = $("#email").val().trim();;
    //     var password = $("#pass2").val().trim();;
    //     //register
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //         .then((user) => {
    //             //update name
    //             var user = firebase.auth().currentUser;
    //             user.updateProfile({
    //                 displayName: name,
    //             }).then(function() {
    //                 console.log("Sign up Successful")
    //                     //signin
    //                 firebase.auth().signInWithEmailAndPassword(email, password)
    //                     .then((user) => {
    //                         console.log("Sign in Successful")
    //                             //user detail
    //                         var user = firebase.auth().currentUser;
    //                         if (!user) {
    //                             user.providerData.forEach(function(profile) {
    //                                 console.log("Sign-in provider: " + profile.providerId);
    //                                 console.log("  Provider-specific UID: " + profile.uid);
    //                                 console.log("  Name: " + profile.displayName);
    //                                 console.log("  Email: " + profile.email);
    //                                 console.log("  Photo URL: " + profile.photoURL);
    //                             });
    //                         }
    //                     })
    //                     .catch((error) => {
    //                         var errorCode = error.code;
    //                         var errorMessage = error.message;
    //                         console.log(errorCode + errorMessage)
    //                     });
    //             }).catch(function(error) {
    //                 console.log(error)
    //             });
    //         })
    //         .catch((error) => {
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             console.log(errorCode + errorMessage)
    //         });
    // });
    // signin btn
    // $("#signin").click(function() {
    //     var email = $("#emaillogin").val().trim();;
    //     var password = $("#passlogin").val().trim();;
    //     //sign in
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //         .then((user) => {
    //             //user detail
    //             var user = firebase.auth().currentUser;
    //             if (!user) {
    //                 user.providerData.forEach(function(profile) {
    //                     console.log("Sign-in provider: " + profile.providerId);
    //                     console.log("  Provider-specific UID: " + profile.uid);
    //                     console.log("  Name: " + profile.displayName);
    //                     console.log("  Email: " + profile.email);
    //                     console.log("  Photo URL: " + profile.photoURL);
    //                 });
    //             }
    //         })
    //         .catch((error) => {
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             console.log(errorCode + errorMessage)
    //         });
    // });
    // // signout btn
    // $("#navsignout").click(function() {
    //     firebase.auth().signOut().then(function() {
    //         console.log("Sign out Succesful")
    //     }).catch(function(error) {
    //         console.log(error)
    //     });
    // });
    // send message btn
    // $("#send").click(function() {
    //     var name = $("#name").val().trim();;
    //     var email = $("#email").val().trim();;
    //     var subject = $("#subject").val().trim();;
    //     var message = $("#message").val().trim();;
    //     firebase.auth().currentUser((user) => {
    //         if (user) {
    //             //message to db with name
    //             db.collection("contact").doc(user.displayName).set({
    //                     name: name,
    //                     email: email,
    //                     subject: subject,
    //                     message: message
    //                 })
    //                 .then(function() {
    //                     console.log("Sended Message with User: " + user.displayName);
    //                 })
    //                 .catch(function(error) {
    //                     console.error("Error adding document: ", error);
    //                 });
    //         } else {
    //             //messege to db with gen id
    //             db.collection("contact").add({
    //                     name: name,
    //                     email: email,
    //                     subject: subject,
    //                     message: message
    //                 })
    //                 .then(function(docRef) {
    //                     console.log("Sended Message with ID: " + docRef.id);
    //                 })
    //                 .catch(function(error) {
    //                     console.error("Error adding document: ", error);
    //                 });
    //         }
    //     });
    // });
    //check signed in/out
    // firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //         var user = firebase.auth().currentUser;
    //         curuser = user.displayName;
    //         console.log("logged as " + user.displayName)
    //         $("#navsignin").hide()
    //         $("#navprofile").show()
    //         $("#navprofile").html("Hi " + user.displayName)
    //         $("#navsignout").show()
    //     } else {
    //         $("#navsignin").show()
    //         $("#navprofile").hide()
    //         $("#navsignout").hide()
    //     }
    // });


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

    //add
    addBtn.addEventListener('click', e => {
        e.preventDefault();
        const ID = contact.doc(doc.value).set({
                email: email.value,
                message: message.value,
                name: username.value,
                subject: subject.value,
            })
            .then(() => {
                console.log('Data has been saved successfully !')
                alert('succes');
            })
            .catch(error => {
                console.error(error)
            });
    });
    //update
    updateBtn.addEventListener('click', e => {
        e.preventDefault();
        contact.doc(doc.value).update({
            email: email.value,
            message: message.value,
            name: username.value,
            subject: subject.value,
        });

    });

    //remove
    removeBtn.addEventListener('click', e => {
        e.preventDefault();
        contact.doc(doc.value).delete();
    });
    //read
    readBtn.addEventListener('click', e => {
        e.preventDefault();

        contact.doc(doc.value).get()
            .then(user => {
                if (user.exists) {
                    console.log(user.data());

                } else {
                    console.log('User does not exist !');
                }

            })

        .catch(error => {
            console.error(error);
        });

    });

    contact.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            //doc.id = document ,doc.data() = json
            console.log(doc.id, " => ", doc.data());



        });
    });

    //console.old 
    (function(logger) {
        console.old = console.log;
        console.log = function() {
            var output = "",
                arg, i;

            for (i = 0; i < arguments.length; i++) {
                arg = arguments[i];
                output += "<span class=\"log-" + (typeof arg) + "\">";

                if (
                    typeof arg === "object" &&
                    typeof JSON === "object" &&
                    typeof JSON.stringify === "function"
                ) {
                    output += JSON.stringify(arg);
                } else {
                    output += arg;
                }

                output += "</span>&nbsp;";
            }

            logger.innerHTML += output + "<br>";
            console.old.apply(undefined, arguments);
        };
    })(log);