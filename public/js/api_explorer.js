var place_id = [""]
var latlong = ""
var lat = [""]
var lng = [""]
function setupexplorer() {
    //get fav as array
    arr = JSON.parse(localStorage.getItem("array"))
        // console.log(arr)
    //set api key
    $.ajaxSetup({
        headers: {
            'Authorization': 'bearer G(LsNMYQxwthtlPATlMG9zWWTmzqnzcNuK6fQeo86o0KzNSdoF2kMFReYcJ2KwTCpq8QfxXKL00BqUe7Jt4TJtW=====2',
            'Accept-Language': 'th'
        }
    });
    //get parameter
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const keyword = urlParams.get('keyword');
    const destination = urlParams.get('destination');
    const catagory = urlParams.get('catagory');
    //fill textbox
    document.getElementById('keyword').value = keyword;
    document.getElementById('destination').value = destination;
    document.getElementById('catagory').value = catagory;
    api = "https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=" + keyword + "&categories=" + catagory + "&provinceName=" + destination + "&numberOfResult=5";
    //check if parameter empty
    if (!keyword && !destination && !catagory) {
        document.getElementById('keyword').value = keyword;
        document.getElementById('destination').value = "Bangkok";
        document.getElementById('catagory').value = "ALL";
        api = "https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=" + "วัด" + "&categories=" + "ALL" + "&provinceName=" + "" + "&numberOfResult=5";
    }
    //decode api
    const decodeurl = decodeURIComponent(api);
    //getjson
    $.getJSON(decodeurl, function(json) {
        //result
            // console.log(json)
        //loop output
        for (let i = 0; i < json.result.length; i++) {
            $.getJSON(api, function(json) {
                $(".single-features-area").eq(i).show();
                //name
                $(".name").eq(i).text((JSON.stringify(json.result[i].place_name).slice(1, -1)));
                //destination
                $(".destination").eq(i).text((JSON.stringify(json.result[i].destination).slice(1, -1)));
                //href
                $(".url").eq(i).attr("href", "/single-listing?type=" + JSON.stringify(json.result[i].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[i].place_id).slice(1, -1));
                //picture
                if(json.result[i].thumbnail_url){
                    try{
                        $(".pic").eq(i).attr('src', JSON.stringify(json.result[i].thumbnail_url).slice(1, -1));
                    }catch{}
                }else{
                    $(".pic").eq(i).attr('src', "/img/noimage.png");
                }
                //latitude longitude
                lat[i] = JSON.stringify(json.result[i].latitude) + ','
                lng[i] = JSON.stringify(json.result[i].longitude)
                //fav id
                place_id[i] = JSON.stringify(json.result[i].category_code).slice(1, -1) + "/" + JSON.stringify(json.result[i].place_id).slice(1, -1)
                //fav icon
                favid = JSON.stringify(json.result[i].category_code).slice(1, -1) + "/" + JSON.stringify(json.result[i].place_id).slice(1, -1)
                try{
                    if (arr.includes(favid)){
                        $(".favicon").eq(i).removeClass("fa-heart-o");
                        $(".favicon").eq(i).addClass("fa-heart");
                    }
                }catch{}
        })
    }
    //default map
    latlong = JSON.stringify(json.result[0].latitude) + ',' + JSON.stringify(json.result[0].longitude)
    map(latlong)
    });
}