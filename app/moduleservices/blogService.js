'use strict';
define([], function () {
    'use strict';
    var blogServiceProvider = function () {
        this.$get = function () {
            return this;
        }
        this.getBlogRouteData = function () {
            return {
                heading: 'Blog',
                message: 'I know what you looking for..',
                paragraph: "Why would I want to know that? Fatal. Who are those horrible orange men? A true inspiration for the children." +
                "Uh, is the puppy mechanical in any way?" +
                "I haven't felt much of anything since my guinea pig died." +
                "Is today's hectic lifestyle making you tense and impatient?" +
                "Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor."
            }
        }
    }

    angular.module('blogService', [])
        .provider('blogServiceProvider', blogServiceProvider);
});