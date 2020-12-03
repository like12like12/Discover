var db = firebase.firestore();
var docRef = db.collection("favorite").doc("qwer");
    docRef.get().then(function(doc) {
        if (doc.exists) {
            // console.log("Document data:", doc.data());
            try{
                arr = JSON.parse(doc.data().fav)
                $.ajaxSetup({
                    headers: {
                        'Authorization': 'bearer G(LsNMYQxwthtlPATlMG9zWWTmzqnzcNuK6fQeo86o0KzNSdoF2kMFReYcJ2KwTCpq8QfxXKL00BqUe7Jt4TJtW=====2',
                        'Accept-Language': 'th'
                    }
                })
                for (let i = 0; i < arr.length; i++) {
                        api = "https://tatapi.tourismthailand.org/tatapi/v5/" + arr[i]
                        $.getJSON(api, function(json) {
                            console.log(json.result.place_name)
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
            }catch{console.log("error")}
        } else {
            console.log("No such document!");
        }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

function fav(place_id) {
    alert("Faving")
    console.log("Saved " + place_id)
    arr.push(place_id)
    var json_str = JSON.stringify(arr);
    console.log(arr)
    // setCookie("mycookie", json_str, 30);
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            db.collection("favorite").doc(user.displayName).set({
                fav: json_str
            })
            .then(function() {
                console.log("faved: "+json_str);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        } else {
            console.log("signed out")
        }
      });
}

// function readcookie() {
//     try {
//         var json_str = getCookie('mycookie');
//         arr = JSON.parse(json_str);
//         console.log("Saved in Cookie "+ arr)
//     } catch {
//         arr = []
//         // console.log("No Cookie Saved")
//     }
// }
// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires=" + d.toGMTString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }
// function getCookie(cname) {
//     var name = cname + "=";
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

