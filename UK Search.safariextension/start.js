var href = document.location.href;
var google_regex = /www\.google\.com\/search/;
var yahoo_regex = /search\.yahoo\.com\/search/;
if (href.match(google_regex)) {
    var url = document.location.href.replace(google_regex, "www.google.co.uk/search");
    // console.log(document.referrer);
    window.location = url;
} else if (href.match(yahoo_regex)) {
    var url = document.location.href.replace(yahoo_regex, "uk.search.yahoo.com/search");
    window.location = url;    
}