(function() {
    'use strict';

    angular
        .module('zipcourse')
        .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    /** @ngInject **/
    function routerConfig($stateProvider, $urlRouterProvider) {

        console.log('Router Config....');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    hero:{
                        templateUrl: 'JS/Directives/mainTemplate.html',
                        controller: 'zipcourseController'
                    }

                }
            });

            $urlRouterProvider.otherwise('/');
    }


})();