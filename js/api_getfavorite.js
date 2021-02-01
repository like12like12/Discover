var name = ""
function displayfavorite() {
    try{
        // var json_str = getCookie('mycookie');
        // id = JSON.parse(json_str);
        $.ajaxSetup({
            headers: {
                'Authorization': 'bearer G(LsNMYQxwthtlPATlMG9zWWTmzqnzcNuK6fQeo86o0KzNSdoF2kMFReYcJ2KwTCpq8QfxXKL00BqUe7Jt4TJtW=====2',
                'Accept-Language': 'th'
            }
        })
        for (let i = 0; i < id.length; i++) {
                api = "https://tatapi.tourismthailand.org/tatapi/v5/" + id[i]
                $.getJSON(api, function(json) {
                    console.log(json)
                    $(".pic").eq(i).attr('style', "/img/noimage.png");
                    $(".result").eq(i).show();
                    console.log(JSON.stringify(json.result.place_name).slice(1, -1))
                    name = (JSON.stringify(json.result.place_name).slice(1, -1))
                    $(".name").eq(i).text((JSON.stringify(json.result.place_name).slice(1, -1)));
                    $(".destination").eq(i).text((JSON.stringify(json.result.destination).slice(1, -1)));
                    try{
                        $(".pic").eq(i).attr('src', JSON.stringify(json.result.web_picture_urls[0]).slice(1, -1));
                    }catch{
                        $(".pic").eq(i).attr('src', "/img/noimage.png");
                    }                    
                })
        }
    }catch{}
}
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