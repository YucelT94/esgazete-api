var express = require('express');
var compress = require('compression');
var morgan = require('morgan');
var router = require('./router');

module.exports = function (app) {
    app.use(compress({
        filter: function (req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        },
        level: 9
    }));
    app.use(express.static(process.cwd() + '/public'));
    app.use(morgan('dev'));
    router(app);
};