$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization': 'bearer G(LsNMYQxwthtlPATlMG9zWWTmzqnzcNuK6fQeo86o0KzNSdoF2kMFReYcJ2KwTCpq8QfxXKL00BqUe7Jt4TJtW=====2',
            'Accept-Language': 'th'
        }
    });

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const type = urlParams.get('type');
    const id = urlParams.get('id');
    // const Hotel = "ACCOMMODATION";
    // const attraction = "ATTRACTION";
    // const restaurant = "RESTAURANT";
    // const shop = "SHOP";
    // const other = "OTHER";




    $.getJSON("https://tatapi.tourismthailand.org/tatapi/v5/" + type + "/" + id, function(json) {
        
        console.log(json)
        document.getElementById("place_name").innerHTML = JSON.stringify(json.result.place_name).slice(1, -1)
        document.getElementById("img").style = "background-image: url("+JSON.stringify(json.result.web_picture_urls[0]).slice(1, -1)+")"
        console.log("url("+JSON.stringify(json.result.web_picture_urls[0]).slice(1, -1)+")")
        document.getElementById("district-province").innerHTML = "เมือง " + JSON.stringify(json.result.location.district).slice(1, -1) + " จังหวัด " + JSON.stringify(json.result.location.province).slice(1, -1)
        //document.getElementById("location").innerHTML = JSON.stringify(json.result.latitude)
        document.getElementById("overview").innerHTML = JSON.stringify(json.result.place_information.introduction).slice(1, -1)
        
        if (JSON.stringify(json.result.opening_hours.weekday_text.day1) === undefined){
            document.getElementById("open").style.display = "none";
        }else{
            document.getElementById("day1").innerHTML = JSON.stringify(json.result.opening_hours.weekday_text.day1)
            document.getElementById("day2").innerHTML = JSON.stringify(json.result.opening_hours.weekday_text.day2)
            document.getElementById("day3").innerHTML = JSON.stringify(json.result.opening_hours.weekday_text.day3)
            document.getElementById("day4").innerHTML = JSON.stringify(json.result.opening_hours.weekday_text.day4)
            document.getElementById("day5").innerHTML = JSON.stringify(json.result.opening_hours.weekday_text.day5)
            document.getElementById("day6").innerHTML = JSON.stringify(json.result.opening_hours.weekday_text.day6)
            document.getElementById("day7").innerHTML = JSON.stringify(json.result.opening_hours.weekday_text.day7)
        }
    });


    console.log(type);
    console.log(id);
    console.log("https://tatapi.tourismthailand.org/tatapi/v5/" + type + "/" + id);


})