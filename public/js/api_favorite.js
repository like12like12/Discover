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

