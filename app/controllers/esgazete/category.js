var request = require('request');
var cheerio = require('cheerio');

exports.category = function (req, res) {
    res.json(['agenda',
        'art',
        'business',
        'economy',
        'education',
        'fun',
        'general',
        'health',
        'interview',
        'life',
        'magazin',
        'politics',
        'publicorder',
        'sport',
        'technology',
        'turkey',
        'world']
    );
};
