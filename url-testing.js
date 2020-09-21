// search term

//number of articles to retrieve

// start year

// end year

// url ex: https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

var searchTerm = "";
var numArticles = 5;
var startYear = 2019;
var endYear = 2020;
var apiKey = "4l0Ec8gomaYMioZj7bdA8qfKKfXP2903";
function check(){

    $.ajax({
        url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${apiKey}`,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        for(var i = 0; i < numArticles; i++){
            console.log(`Article : ${i}`);
            console.log(`Title : ${response.response.docs[i].abstract}`);
            console.log(`${response.response.docs[i].byline.original}`);
            console.log(`url : ${response.response.docs[i].web_url}`);
        }
    });

}
check();