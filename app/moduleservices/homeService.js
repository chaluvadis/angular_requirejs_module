'use strict';
define([], function () {
    'use strict';
    var homeServiceProvider = function () {
        this.$get = function () {
            return this;
        }
        this.getHomeRouteData = function () {
            return {
                heading: 'Home',
                message: 'Welcome to my world',
                paragraph: 'Good news everyone! With placeholder text from shows like Futurama, Doctor Who, Dexter, and Monty Python, Fillerama is the perfect Lorem Ipsum for the TV lover in all of us.'
            }
        }
    }
    angular.module('homeService', [])
        .provider('homeServiceProvider', homeServiceProvider);
});