// créer le module "myCV"
var myCV = angular.module('myCV', ['ngRoute']);
//créer le controleur et injecter le service $scope et les données
myCV.controller('headCtrl', function($scope) {
    $scope.data =
    {
        "adresse" : "La Soukra, Ariana Tunisie",
        "e-mail" : "hamzaJridi.h@gmail.com",
        "tel" : "(+216) 22 428 402",
        "linkedIN" : "https://tn.linkedin.com/in/jridihamza",
        "Expérience professionnelle":[

        ] ,
    }
});