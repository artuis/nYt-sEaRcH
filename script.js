alert("Linked javascript");
window.onload = function() {
    if (window.jQuery) {
        console.log("jQuery detected")
    } else {
        console.log("jQuery not detected")
    }
}

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=Pz3HAJABt1Ww2MmLDMAOVbVaLCfLHPek";
console.log("election query")
console.log(queryURL);