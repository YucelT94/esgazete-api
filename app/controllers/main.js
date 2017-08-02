var request = require('request');
var cheerio = require('cheerio');

exports.index = function (req, res) {
    res.json({date: new Date()});
};
