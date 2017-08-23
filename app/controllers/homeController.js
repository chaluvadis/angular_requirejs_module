'use strict';

define(['app', ['moduleservices/homeService']], function (app, homeService) {

    var injectParams = [homeService];

    var HomeController = function () {

    };

    HomeController.$inject = injectParams;

    app.register.controller('HomeController', HomeController);

});