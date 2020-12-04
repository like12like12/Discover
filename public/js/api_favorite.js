var arr=[""]
firebase.auth().onAuthStateChanged((user) => {
    var db = firebase.firestore();
    if(user){
        var docRef = db.collection("favorite").doc(user.displayName);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                arr = JSON.parse(doc.data().fav)
                console.log("here"+arr)
            } else {
                console.log("No such document!");
                $("#favtitle").text("No Favorite Place");
                var arr=[""]
            }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
    }else{
        $("#favtitle").text("Plases Sign in to use this function");
    }
    console.log(arr)
    return arr
    });
function setupfavorite(){
firebase.auth().onAuthStateChanged((user) => {
    var db = firebase.firestore();
    if(user){
        var docRef = db.collection("favorite").doc(user.displayName);
        docRef.get().then(function(doc) {
            if (arr) {
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
            }
        });
    }else{
        $("#favtitle").text("Plases Sign in to use this function");
    }
    });
}
function fav(arr,place_id) {
    //fav to array
    arr.push(place_id)
    var json_str = JSON.stringify(arr);
    //json to db
    var db = firebase.firestore();
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            db.collection("favorite").doc(user.displayName).set({
                fav: json_str
            })
            .then(function() {
                alert("Added to Favorite")
                console.log("Added: "+json_str);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        } else {
            console.log("signed out")
        }
      });
}