var db = firebase.firestore();
//get fav from db
firebase.auth().onAuthStateChanged((user) => {
    if(user){
        var docRef = db.collection("favorite").doc(user.displayName);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                localStorage.setItem('array', doc.data().fav)
                $(".fa-trash").show()
            } else {
                console.log("No such document!");
                $("#favtitle").text("No Favorite Place");
                arr=[]
            }
            }).catch(function(error) {
                console.log("Error getting document:", error);
                $("#favtitle").text("No Favorite Place");
            });
    }else{
        $("#favtitle").text("Plases Sign in to use this function");
    }
        // console.log(arr)
    });
function setupfavorite(){
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            var docRef = db.collection("favorite").doc(user.displayName);
            docRef.get().then(function(doc) {
                arr = JSON.parse(localStorage.getItem("array"))
                console.log(arr)
                if (arr != "") {
                    $("#favtitle").hide()
                    $.ajaxSetup({
                        headers: {
                            'Authorization': 'bearer G(LsNMYQxwthtlPATlMG9zWWTmzqnzcNuK6fQeo86o0KzNSdoF2kMFReYcJ2KwTCpq8QfxXKL00BqUe7Jt4TJtW=====2',
                            'Accept-Language': 'th'
                        }
                    })
                    //loop display
                    for (let i = 0; i < arr.length; i++) {
                            api = "https://tatapi.tourismthailand.org/tatapi/v5/" + arr[i]
                            $.getJSON(api, function(json) {
                                $(".pic").eq(i).attr('style', "/img/noimage.png");
                                $(".result").eq(i).show();
                                $(".name").eq(i).text((JSON.stringify(json.result.place_name).slice(1, -1)));
                                $(".destination").eq(i).text((JSON.stringify(json.result.destination).slice(1, -1)));
                                try{
                                    $(".pic").eq(i).attr('src', JSON.stringify(json.result.web_picture_urls[0]).slice(1, -1));
                                }catch{
                                    $(".pic").eq(i).attr('src', "/img/noimage.png");
                                }                    
                            })
                    }
                }else{
                    $("#favtitle").text("No Favorite Place");
                    $(".fa-trash").hide()
                }
            });
        }else{
            $("#favtitle").text("Plases Sign in to use this function");
        }
        });
}
function fav(arr,place_id,count) {
    if ($(".favicon").eq(count).hasClass("fa-heart-o")){
    //fav to array
    arr.push(place_id)
    var json_str = JSON.stringify(arr);
    localStorage.removeItem('array')
    localStorage.setItem('array', json_str)
    //json to db
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // add to db
                db.collection("favorite").doc(user.displayName).set({
                    fav: json_str
                })
                .then(function() {
                    //notfy
                    $.notify({
                        message: 'Favorite Added' 
                    },{
                        type: 'success',
                        delay: 1000,
                    });
                        // console.log("Added: "+json_str);
                    // chang icon
                    $(".favicon").eq(count).removeClass("fa-heart-o");
                    $(".favicon").eq(count).addClass("fa-heart");
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
            } else {
                console.log("signed out")
            }
        });
    }else{
        //remove fav from array
        arr.splice(arr.indexOf(place_id), 1);
        var json_str = JSON.stringify(arr);
        localStorage.setItem('array', json_str)
        //remove from db
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                db.collection("favorite").doc(user.displayName).set({
                    fav: json_str
                })
                .then(function() {
                    // notify
                    $.notify({
                        message: 'Favorite Removed' 
                    },{
                        type: 'warning',
                        delay: 1000,
                    });
                        // console.log("removed: "+json_str);
                    //change icon
                    $(".favicon").eq(count).removeClass("fa-heart");
                    $(".favicon").eq(count).addClass("fa-heart-o");
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
            } else {
                console.log("signed out")
            }
        });
    }
}
function delfav(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            //clear fav
            db.collection("favorite").doc(user.displayName).delete().then(function() {
                    // console.log("Document successfully deleted!");
                localStorage.clear()
                //remove display
                $(".result").hide();
                $("#favtitle").text("No Favorite Place");
                //notify
                $.notify({
                    message: 'Favorite Deleted' 
                },{
                    type: 'warning',
                    delay: 1000,
                });
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
        } else {
            console.log("signed out")
        }
});
}