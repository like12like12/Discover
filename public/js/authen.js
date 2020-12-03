    var config = {
        apiKey: "AIzaSyBjG9lEIkNT-TioHPnie58KAkjuz2vGrGM",
        authDomain: "discover-8bf53.firebaseapp.com",
        databaseURL: "https://discover-8bf53.firebaseio.com/",
        storageBucket: "discover-8bf53.appspot.com"
    };
    firebase.initializeApp(config);
    $("#signup").click(function(){
        var name = $("#name").val().trim();;
        var email = $("#email").val().trim();;
        var password = $("#pass2").val().trim();;
        //regis
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            //update name
            var user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: name,
            }).then(function() {
                console.log("Sign up Successful")
                //login
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    console.log("Sign in Successful")
                    //user detail
                    var user = firebase.auth().currentUser;
                    if (user != null) {
                        user.providerData.forEach(function (profile) {
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
          alert(errorCode)
          var errorMessage = error.message;
          alert(errorMessage)
        });
            }).catch(function(error) {
              console.log(error)
            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;ผ
            console.log(errorCode+errorMessage)
        });
    });
    $("#signin").click(function(){
        var email = $("#emaillogin").val().trim();;
        var password = $("#passlogin").val().trim();;
        //sign in
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            //user detail
            var user = firebase.auth().currentUser;
            if (user != null) {
                user.providerData.forEach(function (profile) {
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
          console.log(errorCode+errorMessage)
        });
    });
    $("#navsignout").click(function(){
        firebase.auth().signOut().then(function() {
            console.log("Sign out Succesful")
          }).catch(function(error) {
            console.log(error)
          });
    });
    // firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //         $("#navsignin").css("display","none");
    //         $("#navsignout").css("display","");
    //     }else{
    //         $("#navsignout").css("display","none");
    //         $("#navsignin").css("display","");
    //     }
    //   });
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var user = firebase.auth().currentUser;
            console.log(user.displayName)
            $("#navsignin").hide()
            $("#navprofile").show()
            $("#navprofile").html("Hi "+ user.displayName)
            //  $("#navprofile").addClass("dorne-signin-btn")
            $("#navsignout").show()
            var uid = user.uid;
        } else {
            $("#navsignin").show()
            $("#navprofile").hide()
            $("#navsignout").hide()
        }
    });