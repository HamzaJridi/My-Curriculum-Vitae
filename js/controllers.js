// créer le module "myCV"
var myCV = angular.module('myCV', ['ngRoute']);

//configurer les routes
myCV.config(function($routeProvider) {
    $routeProvider

        // route pour l'acceuil
        .when('/', {
            templateUrl : 'routes/home.html',
            controller  : 'headCtrl'
        })

        // route pour listExp.html
        .when('/experiences', {
            templateUrl : 'routes/listExp.html',
            controller  : 'comptCtrl'
        })
        .when('/experiences/:itemId', {
            templateUrl : 'routes/detailExp.html',
            controller  : 'comptCtrl'
        })
        .otherwise({
            redirectTo:'/'
        });
});

//Configuration des controleurs

//créer le controleur de la page d'accueil
myCV.controller('headCtrl', function ($scope) {
    $scope.data =
    {
        "adresse" : "La Soukra, Ariana Tunisie",
        "e-mail" : "hamzaJridi.h@gmail.com",
        "tel" : "(+216) 22 428 402",
        "linkedIN" : "https://tn.linkedin.com/in/jridihamza",
        "resume": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt  culpa qui officia deserunt mollit anim  est laborum."
    }
});

//créer le controleur de la page d'expériences
myCV.controller('comptCtrl', function($scope, $routeParams) {
    $scope.compt =[
    {
        "date" : "Septembre - Février 2016",
        "role" : "Membre dans le cadre collaboratif « Teampany »",
        "tache" : "Développement des plateformes Web ",
        "tech" : "HTML5, CSS3, JavaScript, jQuery, Node.js, Socket.io, Redis, HandsOnTable",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit anim est laborum."
    },
    {
        "date" : "Février – Juin 2015",
        "role" : "Projet de Fin d’Etude au sein de la société « Edidtion Kitabi »",
        "tache" : "Développement d’applications mobiles pour enfants",
        "tech" : "HTML5, CSS3, JS, jQuery, IDE, Bootstrap, PhoneGap et jQueryUI",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit anim est laborum."
    }
    ];
    $scope.whichItem = $routeParams.itemId;
    /*if ($routeParams.itemId < $scope.compt.length-1) {
        $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
        $scope.nextItem = 0;
    }*/
});