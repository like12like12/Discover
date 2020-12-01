var name = ""
$(document).ready(function() {
    var json_str = getCookie('mycookie');
        id = JSON.parse(json_str);
    // id = ["P02000185", "P02000125", "P02000184", "P02000182", "P02000131", "P02000121"];
    $.ajaxSetup({
        headers: {
            'Authorization': 'bearer G(LsNMYQxwthtlPATlMG9zWWTmzqnzcNuK6fQeo86o0KzNSdoF2kMFReYcJ2KwTCpq8QfxXKL00BqUe7Jt4TJtW=====2',
            'Accept-Language': 'th'
        }
    })
    
    for (let i = 0; i < id.length; i++) {
            api = "https://tatapi.tourismthailand.org/tatapi/v5/" + "ACCOMMODATION" + "/" + id[i]
            $.getJSON(api, function(json) {
                console.log(json)
                console.log(JSON.stringify(json.result.place_name).slice(1, -1))
                name = (JSON.stringify(json.result.place_name).slice(1, -1))
                $(".name").eq(i).text((JSON.stringify(json.result.place_name).slice(1, -1)));
                $(".destination").eq(i).text((JSON.stringify(json.result.destination).slice(1, -1)));
                $(".pic").eq(i).attr('src', JSON.stringify(json.result.web_picture_urls[0]).slice(1, -1));
        })
    }
});
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