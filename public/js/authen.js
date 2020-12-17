    var firebaseConfig = {
        apiKey: "AIzaSyBjG9lEIkNT-TioHPnie58KAkjuz2vGrGM",
        authDomain: "discover-8bf53.firebaseapp.com",
        databaseURL: "https://discover-8bf53.firebaseio.com/",
        storageBucket: "discover-8bf53.appspot.com",
        projectId: "discover-8bf53",
    };
    firebase.initializeApp(firebaseConfig);
    var user = firebase.auth().currentUser;
    
    // signup btn
    $("#signup").click(function() {
        var name = $("#name").val().trim();;
        var email = $("#email").val().trim();;
        var password = $("#pass2").val().trim();;
        //register
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                //update name
                var user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName: name,
                }).then(function() {
                    console.log("Sign up Successful")
                        //signin
                    firebase.auth().signInWithEmailAndPassword(email, password)
                        .then((user) => {
                            console.log("Sign in Successful")
                                //user detail
                            var user = firebase.auth().currentUser;
                            if (!user) {
                                user.providerData.forEach(function(profile) {
                                    console.log("Sign-in provider: " + profile.providerId);
                                    console.log("  Provider-specific UID: " + profile.uid);
                                    console.log("  Name: " + profile.displayName);
                                    console.log("  Email: " + profile.email);
                                    console.log("  Photo URL: " + profile.photoURL);
                                });
                            }
                        })
                        .catch((error) => {
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            console.log(errorCode + errorMessage)
                        });
                }).catch(function(error) {
                    console.log(error)
                });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode + errorMessage)
            });
    });
    // signin btn
    $("#signin").click(function() {
        var email = $("#emaillogin").val().trim();;
        var password = $("#passlogin").val().trim();;
        //sign in
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                //user detail
                var user = firebase.auth().currentUser;
                if (!user) {
                    user.providerData.forEach(function(profile) {
                        console.log("Sign-in provider: " + profile.providerId);
                        console.log("  Provider-specific UID: " + profile.uid);
                        console.log("  Name: " + profile.displayName);
                        console.log("  Email: " + profile.email);
                        console.log("  Photo URL: " + profile.photoURL);
                    });
                }
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode + errorMessage)
            });
    });
    // signout btn
    $("#navsignout").click(function() {
        firebase.auth().signOut().then(function() {
            console.log("Sign out Succesful")
        }).catch(function(error) {
            console.log(error)
        });
    });
    // send message btn
    $("#send").click(function() {
        const db = firebase.firestore();
        var name = $("#name").val().trim();;
        var email = $("#email").val().trim();;
        var subject = $("#subject").val().trim();;
        var message = $("#message").val().trim();;
        user = localStorage.getItem("currentuser")
            if (user) {
                //message to db with name
                db.collection("contact").doc(user.displayName).set({
                        name: name,
                        email: email,
                        subject: subject,
                        message: message
                    })
                    .then(function() {
                        console.log("Sended Message with User: " + user);
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    });
            } else {
                //messege to db with gen id
                db.collection("contact").add({
                        name: name,
                        email: email,
                        subject: subject,
                        message: message
                    })
                    .then(function(docRef) {
                        console.log("Sended Message with ID: " + docRef.id);
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    });
            }

    });
    //check signed in/out
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            localStorage.setItem('currentuser', user.displayName)
            console.log("logged as " + user.displayName)
            $("#navsignin").hide()
            $("#navprofile").show()
            $("#navprofile").html("Hi " + user.displayName)
            $("#navsignout").show()
        } else {
            localStorage.removeItem('currentuser')
            $("#navsignin").show()
            $("#navprofile").hide()
            $("#navsignout").hide()
        }
    });