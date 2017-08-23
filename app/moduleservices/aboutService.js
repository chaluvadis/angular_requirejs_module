'use strict';
define([], function () {
    'use strict';
    var aboutServiceProvider = function () {
        this.$get = function () {
            return this;
        }
        this.getAboutRouteData = function () {
            return {
                heading: 'About',
                message: 'Nice to see you here',
                paragraph: "I can explain. It's very valuable. Good man. Nixon's pro-war and pro-family. I'm sorry, guys. I never meant to hurt you. Just to destroy everything you ever believed in. Okay, it's 500 dollars, you have no choice of carrier, the battery can't hold the charge and the reception isn't very…"
            }
        }
    }
    angular.module('aboutService', [])
        .provider('aboutServiceProvider', aboutServiceProvider);
});