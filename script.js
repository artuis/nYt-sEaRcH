$("button").on("click", function(){
    var searchTerm = "";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=4l0Ec8gomaYMioZj7bdA8qfKKfXP2903";
    var elecURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=9r3MXQbAGw7Gqkg0byjJOg0jbmk18g5d";
    $.ajax({
        url: elecURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
})

// var request = function({
//     $.ajax({
//     url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=4l0Ec8gomaYMioZj7bdA8qfKKfXP2903",
//     method: "GET"
// }).then(function(response){
//     console.log(response);
// })
// })

// request();