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
        esgazete_controllers[file.split('.')[0].toLowerCase()] =
            require(esgazete_controllersPath + '/' + file);
    }
});

module.exports = function (app) {
    var router = express.Router();
    router.route('/').get(main_controller.main.index);

    router.route('/esgazete').get(esgazete_controllers.category.category);

    router.route('/esgazete/general').get(esgazete_controllers.general.general);
    router.route('/esgazete/turkey').get(esgazete_controllers.turkey.turkey);
    router.route('/esgazete/sport').get(esgazete_controllers.sport.sport);
    router.route('/esgazete/business').get(esgazete_controllers.business.business);
    router.route('/esgazete/politics').get(esgazete_controllers.politics.politics);
    router.route('/esgazete/world').get(esgazete_controllers.world.world);
    router.route('/esgazete/publicorder').get(esgazete_controllers.publicorder.publicorder);
    router.route('/esgazete/agenda').get(esgazete_controllers.agenda.agenda);
    router.route('/esgazete/life').get(esgazete_controllers.life.life);
    router.route('/esgazete/fun').get(esgazete_controllers.fun.fun);
    router.route('/esgazete/interview').get(esgazete_controllers.interview.interview);
    router.route('/esgazete/magazin').get(esgazete_controllers.magazin.magazin);
    router.route('/esgazete/health').get(esgazete_controllers.health.health);
    router.route('/esgazete/education').get(esgazete_controllers.education.education);
    router.route('/esgazete/economy').get(esgazete_controllers.economy.economy);
    router.route('/esgazete/technology').get(esgazete_controllers.technology.technology);
    router.route('/esgazete/art').get(esgazete_controllers.art.art);

    app.use(router);
};
