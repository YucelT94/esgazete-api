var request = require('request');
var cheerio = require('cheerio');
var url = 'http://www.esgazete.com/';

request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var parsedResults = [];
        $('span.hs-o-bgc').each(function (i, element) {
            var a = $(this).parent().parent().parent();
            var title = $(this).text();
            var url = a.attr('href');
            var picUrl = a.children().attr('src');
            var metadata = {
                title: title,
                url: url,
                picUrl: picUrl
            };
            parsedResults.push(metadata);
        })
            .get() // get basic JSONArray
            .sort(function (a, b) { // sort by code
                return a.code - b.code;
            });

        console.log(parsedResults);
    }
});
