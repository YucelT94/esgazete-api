var express = require('express');
var fs = require('fs');

var main_controller = {};
var controllersPath = process.cwd() + '/app/controllers';
fs.readdirSync(controllersPath).forEach(function (file) {
    if (file.match(/\.js$/)) {
        main_controller[file.split('.')[0].toLowerCase()] =
            require(controllersPath + '/' + file);
    }
});

var esgazete_controllers = {};
var esgazete_controllersPath = process.cwd() + '/app/controllers/esgazete';
fs.readdirSync(esgazete_controllersPath).forEach(function (file) {
    if (file.match(/\.js$/)) {
        uludag_controllers[file.split('.')[0].toLowerCase()] =
            require(esgazete_controllersPath + '/' + file);
    }
});

module.exports = function (app) {
    var router = express.Router();
    router.route('/').get(main_controller.main.index);

    router.route('/esgazete/general').get(esgazete_controllers.general.general);

    app.use(router);
};
