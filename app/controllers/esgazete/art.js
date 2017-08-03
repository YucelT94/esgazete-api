var request = require('request');
var cheerio = require('cheerio');
var url = 'https://www.esgazete.com/kultur-sanat/';

exports.art = function (req, res, next) {
    request(url, function (err, response, body) {
        if (err) {
            return next(err);
        }
        if (response.statusCode !== 200) {
            return next(new Error('Server Error'));
        }
        $ = cheerio.load(body);

        var links = $('div.carousel-inner div.item')
            .map(function (i, e) {
                var tds = $(e).find('a');
                return {
                    title: $(tds[0]).text().replace(/\s+/g, ' ').trim(),
                    url:   $(tds[0]).attr('href'),
                    picUrl: $(tds[0]).find('img').attr('src'),
                };
            })
            .get() // get basic JSONArray
            .sort(function (a, b) { // sort by code
                return a.code - b.code;
            });

        if (req.query.skip) {
            links = links.slice(req.query.skip);
        }
        if (req.query.limit) {
            links = links.slice(0, req.query.limit);
        }

        return res.json(links);
    });
};