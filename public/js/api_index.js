$(document).ready(function() {
    id = ["P02000185", "P02000451", "e", "r", "t"];
    $.ajaxSetup({
        headers: {
            'Authorization': 'bearer G(LsNMYQxwthtlPATlMG9zWWTmzqnzcNuK6fQeo86o0KzNSdoF2kMFReYcJ2KwTCpq8QfxXKL00BqUe7Jt4TJtW=====2',
            'Accept-Language': 'th'
        }
    })

    for (i = 0; i < 2; i++) {
        api = "https://tatapi.tourismthailand.org/tatapi/v5/" + "ACCOMMODATION" + "/" + id[i]
        $.getJSON(api, function(json) {
            console.log(json)
            console.log(JSON.stringify(json.result.place_name).slice(1, -1))
            document.getElementsByClassName("name")[i].innerHTML = JSON.stringify(json.result.place_name).slice(1, -1)
            document.getElementsByClassName("destination")[i].innerHTML = JSON.stringify(json.result.destination).slice(1, -1)
            // document.getElementsByClassName("img")[0].src = JSON.stringify(json.result.thumbnail_url).slice(1, -1)
            // document.getElementsByClassName("map")[1].href = "single-listing?type=" + "ACCOMMODATION" + "&id=" + id[i]
            // link to single document.getElementById("04").href = "single-listing?type=" + JSON.stringify(json.result[0].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[0].place_id).slice(1, -1)

            // document.getElementById("11").innerHTML = JSON.stringify(json.result[1].place_name).slice(1, -1)
            // document.getElementById("12").innerHTML = JSON.stringify(json.result[1].destination).slice(1, -1)
            // document.getElementById("13").src = JSON.stringify(json.result[1].thumbnail_url).slice(1, -1)
            // document.getElementById("14").href = "single-listing?type=" + JSON.stringify(json.result[1].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[1].place_id).slice(1, -1)

            // document.getElementById("21").innerHTML = JSON.stringify(json.result[2].place_name).slice(1, -1)
            // document.getElementById("22").innerHTML = JSON.stringify(json.result[2].destination).slice(1, -1)
            // document.getElementById("23").src = JSON.stringify(json.result[2].thumbnail_url).slice(1, -1)
            // document.getElementById("24").href = "single-listing?type=" + JSON.stringify(json.result[2].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[2].place_id).slice(1, -1)

            // document.getElementById("31").innerHTML = JSON.stringify(json.result[3].place_name).slice(1, -1)
            // document.getElementById("32").innerHTML = JSON.stringify(json.result[3].destination).slice(1, -1)
            // document.getElementById("33").src = JSON.stringify(json.result[3].thumbnail_url).slice(1, -1)
            // document.getElementById("34").href = "single-listing?type=" + JSON.stringify(json.result[3].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[3].place_id).slice(1, -1)

            // document.getElementById("41").innerHTML = JSON.stringify(json.result[4].place_name).slice(1, -1)
            // document.getElementById("42").innerHTML = JSON.stringify(json.result[4].destination).slice(1, -1)
            // document.getElementById("43").src = JSON.stringify(json.result[4].thumbnail_url).slice(1, -1)
            // document.getElementById("44").href = "single-listing?type=" + JSON.stringify(json.result[4].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[4].place_id).slice(1, -1)
        })
        
        
    }

});