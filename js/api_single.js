var lat = [""]
var lng = [""]
    $.ajaxSetup({
        headers: {
            'Authorization': 'bearer G(LsNMYQxwthtlPATlMG9zWWTmzqnzcNuK6fQeo86o0KzNSdoF2kMFReYcJ2KwTCpq8QfxXKL00BqUe7Jt4TJtW=====2',
            'Accept-Language': 'th'
        }
    });
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    type = urlParams.get('type');
    id = urlParams.get('id');
    //defaultvalue
    if (type && id) {} else {
        type = "ATTRACTION"
        id = "P03012187"
    }
    $.getJSON("https://tatapi.tourismthailand.org/tatapi/v5/" + type + "/" + id, function(json) {
        console.log(json)
        //name
        document.getElementById("place_name").innerHTML = JSON.stringify(json.result.place_name).slice(1, -1)
        //image
        try{
            document.getElementById("img").style = "background-image: url(" + JSON.stringify(json.result.web_picture_urls[0]).slice(1, -1) + ")"
        }catch{}
        //address
        document.getElementById("district-province").innerHTML = "เมือง " + JSON.stringify(json.result.location.district).slice(1, -1) + " จังหวัด " + JSON.stringify(json.result.location.province).slice(1, -1)
        //detail
        if(json.result.place_information.detail){
            document.getElementById("overview").innerHTML = JSON.stringify(json.result.place_information.introduction).slice(1, -1)
            document.getElementById("detail").innerHTML = JSON.stringify(json.result.place_information.detail).slice(1, -1)
        }else{
            document.getElementById("overviewheader").style.display = "none";
        }
        //LatitudeLongitude
        latlong = JSON.stringify(json.result.latitude) + ',' + JSON.stringify(json.result.longitude)
        //weekday
        if (json.result.opening_hours.weekday_text.day1) {
            document.getElementById("day1").innerHTML = JSON.stringify(json.result.opening_hours.weekday_text.day1);
            document.getElementById("day2").innerHTML = JSON.stringify(json.result.opening_hours.weekday_text.day2);
            document.getElementById("day3").innerHTML = JSON.stringify(json.result.opening_hours.weekday_text.day3);
            document.getElementById("day4").innerHTML = JSON.stringify(json.result.opening_hours.weekday_text.day4);
            document.getElementById("day5").innerHTML = JSON.stringify(json.result.opening_hours.weekday_text.day5);
            document.getElementById("day6").innerHTML = JSON.stringify(json.result.opening_hours.weekday_text.day6);
            document.getElementById("day7").innerHTML = JSON.stringify(json.result.opening_hours.weekday_text.day7);
        } else {
            document.getElementById("open").style.display = "none";
        }
        //map
        map(latlong);
    });