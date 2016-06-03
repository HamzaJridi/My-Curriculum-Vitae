// créer le module "myCV"
var myCV = angular.module('myCV', ['ngRoute']);

//configurer les views
myCV.config(function($routeProvider) {
    $routeProvider

    // route pour l'acceuil
        .when('/resume', {
            templateUrl : 'public/views/home.html',
            controller  : 'headCtrl'
        })

        // route pour listExp.html
        .when('/experiences', {
            templateUrl : 'public/views/listExp.html',
            controller  : 'comptCtrl'
        })
        .when('/experiences/:itemId', {
            templateUrl : 'public/views/detailExp.html',
            controller  : 'comptCtrl'
        })

        .when('/formation', {
            templateUrl : 'public/views/formation.html',
            controller  : 'formCtrl'
        })

        .when('/skills', {
            templateUrl : 'public/views/skills.html',
            controller  : 'skillCtrl'
        })

        .otherwise({
            redirectTo:'/resume'
        });
});