
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
	'api-key': "a4114159fbe54d0da2e3f7ac021f2d64"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

});

