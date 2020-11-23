$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization': 'bearer G(LsNMYQxwthtlPATlMG9zWWTmzqnzcNuK6fQeo86o0KzNSdoF2kMFReYcJ2KwTCpq8QfxXKL00BqUe7Jt4TJtW=====2',
            'Accept-Language': 'th'
        }
    });
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const keyword = urlParams.get('keyword');
    const destinations = urlParams.get('destinations');
    const catagories = urlParams.get('catagories');
    document.getElementById('keyword').value = keyword;
    document.getElementById('destinations').value = destinations;
    document.getElementById('catagories').value = catagories;
    const api = "https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=" + keyword + "&categories=" + catagories + "&provinceName=";
    const decodeurl = decodeURIComponent(api);


    $.getJSON(decodeurl, function(json) {
        console.log(json)
        document.getElementById("01").innerHTML = JSON.stringify(json.result[0].place_name).slice(1, -1)
            //document.getElementById("11").href = JSON.stringify(json.result[0].place_id).slice(1, -1)
        document.getElementById("02").innerHTML = JSON.stringify(json.result[0].destination).slice(1, -1)
        document.getElementById("03").src = JSON.stringify(json.result[0].thumbnail_url).slice(1, -1)

        document.getElementById("11").innerHTML = JSON.stringify(json.result[1].place_name).slice(1, -1)
            //document.getElementById("11").href = JSON.stringify(json.result[1].place_id).slice(1, -1)
        document.getElementById("12").innerHTML = JSON.stringify(json.result[1].destination).slice(1, -1)
        document.getElementById("13").src = JSON.stringify(json.result[1].thumbnail_url).slice(1, -1)

        document.getElementById("21").innerHTML = JSON.stringify(json.result[2].place_name).slice(1, -1)
            //document.getElementById("11").href = JSON.stringify(json.result[2].place_id).slice(1, -1)
        document.getElementById("22").innerHTML = JSON.stringify(json.result[2].destination).slice(1, -1)
        document.getElementById("23").src = JSON.stringify(json.result[2].thumbnail_url).slice(1, -1)

        document.getElementById("31").innerHTML = JSON.stringify(json.result[3].place_name).slice(1, -1)
            //document.getElementById("11").href = JSON.stringify(json.result[3].place_id).slice(1, -1)
        document.getElementById("32").innerHTML = JSON.stringify(json.result[3].destination).slice(1, -1)
        document.getElementById("33").src = JSON.stringify(json.result[3].thumbnail_url).slice(1, -1)

        document.getElementById("41").innerHTML = JSON.stringify(json.result[4].place_name).slice(1, -1)
            //document.getElementById("11").href = JSON.stringify(json.result[4].place_id).slice(1, -1)
        document.getElementById("42").innerHTML = JSON.stringify(json.result[4].destination).slice(1, -1)
        document.getElementById("43").src = JSON.stringify(json.result[4].thumbnail_url).slice(1, -1)


    });
});