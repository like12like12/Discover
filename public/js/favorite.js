function readcookie() {
    try {
        var json_str = getCookie('mycookie');
        arr = JSON.parse(json_str);
        console.log("Saved in Cookie "+ arr)
    } catch {
        arr = []
        console.log("No Cookie Saved")
    }

}

function fav(count) {
    alert("Faving")
    var json_str = JSON.stringify(arr);
    console.log("Saved " + JSON.stringify(place_id[count]).slice(1, -1))
    arr.push(JSON.stringify(place_id[count]).slice(1, -1))
    var json_str = JSON.stringify(arr);
    setCookie("mycookie", json_str, 30);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// function setup() {
//     $.ajaxSetup({
//         headers: {
//             'Authorization': 'bearer G(LsNMYQxwthtlPATlMG9zWWTmzqnzcNuK6fQeo86o0KzNSdoF2kMFReYcJ2KwTCpq8QfxXKL00BqUe7Jt4TJtW=====2',
//             'Accept-Language': 'th'
//         }
//     });
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     const keyword = urlParams.get('keyword');
//     const destination = urlParams.get('destination');
//     const catagory = urlParams.get('catagory');
//     document.getElementById('keyword').value = keyword;
//     document.getElementById('destination').value = destination;
//     document.getElementById('catagory').value = catagory;
//     api = "https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=" + keyword + "&categories=" + catagory + "&provinceName=" + destination;
//     if (keyword && destination && catagory) {} else {
//         document.getElementById('keyword').value = keyword;
//         document.getElementById('destination').value = "Bangkok";
//         document.getElementById('catagory').value = "ALL";
//         api = "https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=" + "วัด" + "&categories=" + "ALL" + "&provinceName=" + "";
//     }
//     const decodeurl = decodeURIComponent(api);

//     $.getJSON(decodeurl, function(json) {
//         console.log(json)
//         document.getElementById("01").innerHTML = JSON.stringify(json.result[0].place_name).slice(1, -1)
//         document.getElementById("02").innerHTML = JSON.stringify(json.result[0].destination).slice(1, -1)
//         document.getElementById("03").src = JSON.stringify(json.result[0].thumbnail_url).slice(1, -1)
//         document.getElementById("04").href = "single-listing?type=" + JSON.stringify(json.result[0].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[0].place_id).slice(1, -1)
//         place_id[0] = JSON.stringify(json.result[0].place_id).slice(1, -1)

//         document.getElementById("11").innerHTML = JSON.stringify(json.result[1].place_name).slice(1, -1)
//         document.getElementById("12").innerHTML = JSON.stringify(json.result[1].destination).slice(1, -1)
//         document.getElementById("13").src = JSON.stringify(json.result[1].thumbnail_url).slice(1, -1)
//         document.getElementById("14").href = "single-listing?type=" + JSON.stringify(json.result[1].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[1].place_id).slice(1, -1)
//         place_id[1] = JSON.stringify(json.result[1].place_id).slice(1, -1)

//         document.getElementById("21").innerHTML = JSON.stringify(json.result[2].place_name).slice(1, -1)
//         document.getElementById("22").innerHTML = JSON.stringify(json.result[2].destination).slice(1, -1)
//         document.getElementById("23").src = JSON.stringify(json.result[2].thumbnail_url).slice(1, -1)
//         document.getElementById("24").href = "single-listing?type=" + JSON.stringify(json.result[2].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[2].place_id).slice(1, -1)
//         place_id[2] = JSON.stringify(json.result[2].place_id).slice(1, -1)

//         document.getElementById("31").innerHTML = JSON.stringify(json.result[3].place_name).slice(1, -1)
//         document.getElementById("32").innerHTML = JSON.stringify(json.result[3].destination).slice(1, -1)
//         document.getElementById("33").src = JSON.stringify(json.result[3].thumbnail_url).slice(1, -1)
//         document.getElementById("34").href = "single-listing?type=" + JSON.stringify(json.result[3].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[3].place_id).slice(1, -1)
//         place_id[3] = JSON.stringify(json.result[3].place_id).slice(1, -1)

//         document.getElementById("41").innerHTML = JSON.stringify(json.result[4].place_name).slice(1, -1)
//         document.getElementById("42").innerHTML = JSON.stringify(json.result[4].destination).slice(1, -1)
//         document.getElementById("43").src = JSON.stringify(json.result[4].thumbnail_url).slice(1, -1)
//         document.getElementById("44").href = "single-listing?type=" + JSON.stringify(json.result[4].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[4].place_id).slice(1, -1)
//         place_id[4] = JSON.stringify(json.result[4].place_id).slice(1, -1)
//     });
// }