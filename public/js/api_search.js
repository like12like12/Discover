$(document).ready(function() {
    const queryString = window.location.search;
    const decode = decodeURIComponent(queryString);
    const urlParams = new URLSearchParams(decode);
    const keyword = urlParams.get('keyword');
    const city = urlParams.get('city');
    const type = urlParams.get('type');
    document.getElementById('keyword').value = keyword;
    document.getElementById('city').value = city;
    document.getElementById('type').value = type;
    getapi();
    console.log(queryString);
    console.log(decode);
    console.log(keyword);
    console.log(city);
    console.log(type);
    console.log("https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=" + keyword + "&location=13.6904831,100.5226014" + "&categories=" + type + "&provinceName=" + city + "&numberOfResult=100");


})

function getapi() {
    $.ajaxSetup({
        headers: {
            'Authorization': 'bearer G(LsNMYQxwthtlPATlMG9zWWTmzqnzcNuK6fQeo86o0KzNSdoF2kMFReYcJ2KwTCpq8QfxXKL00BqUe7Jt4TJtW=====2',
            'Accept-Language': 'th'
        }
    });
    $.getJSON("https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=" + keyword + "&categories=" + type + "&provinceName=" + city + "&numberOfResult=100", function(json) {
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
}

function qwer(){
        const queryString = window.location.search;
        const decode = decodeURIComponent(queryString);
        const urlParams = new URLSearchParams(decode);
        const keyword = urlParams.get('keyword');
        const city = urlParams.get('city');
        const type = urlParams.get('type');
        document.getElementById('keyword').value = keyword;
        document.getElementById('city').value = city;
        document.getElementById('type').value = type;
        getapi();
        console.log(queryString);
        console.log(decode);
        console.log(keyword);
        console.log(city);
        console.log(type);
        console.log("https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=" + keyword + "&location=13.6904831,100.5226014" + "&categories=" + type + "&provinceName=" + city + "&numberOfResult=100");
        $.ajaxSetup({
            headers: {
                'Authorization': 'bearer G(LsNMYQxwthtlPATlMG9zWWTmzqnzcNuK6fQeo86o0KzNSdoF2kMFReYcJ2KwTCpq8QfxXKL00BqUe7Jt4TJtW=====2',
                'Accept-Language': 'th'
            }
        });
        $.getJSON("https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=" + keyword + "&categories=" + type + "&provinceName=" + city + "&numberOfResult=100", function(json) {
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
}