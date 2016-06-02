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

        .when('/formation', {
            templateUrl : 'routes/formation.html',
            controller  : 'formCtrl'
        })

        .when('/skills', {
            templateUrl : 'routes/skills.html',
            controller  : 'skillCtrl'
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
        "resume": "JRID hamza, c'est mon nom, mon ambition dans la vie c'est de devenir un ingénieur avec un grand i. Rendre fière mes parents était ma principale motivation. C'est eux qui m'ont toujours poussé à avancer et m'ont toujours encouragé à faire des études en Informatique et je peux affirmé aujourd'hui que je suis fier d'avoir fait ce choix. Certes, je n'ai pas encore goûté à la joie de pratiquer enfin ce que j'ai appris théoriquement durant toutes ces années d'études, mais je suis plein de motivation et d'énergie qui ne demande juste qu'à être exprimée..."
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
});


//créer le controleur de la page de formation
myCV.controller('formCtrl', function($scope) {
    $scope.form =[
        {
            "date" : "2012 - 2015",
            "Ecole" : "Ecole Nationale d’Electronique et de Télécommunication de Sfax (ENET’com)",
            "Diplome": "Diplôme National d’Ingénieur en Informatique",

        },
        {
            "date" : "2008 - 2011",
            "Ecole" : "Institut préparatoire aux études d’ingénieurs de Nabeul (IPEIN).",
        },
        {
            "date" : "2008 ",
            "Ecole" : "Obtention du Baccalauréat section Sciences Techniques, Mention Bien.",
        }


    ];
});

//créer le controleur de la page de compétences
myCV.controller('skillCtrl', function($scope) {
    $scope.skill =[
        {
            "Langage de programation" : ["C, C embarqué", "C++", "Java","HTML5","CSS3", "JavaScript", "jQuery", "AJAX", "JSON", "PHP5", "Node.js", "Socket.io", "Redis"],

        },
        {
            "Systèmes embarqués": ["Cartes FPGA (VHDL)", "Microcontrôleurs", "Cartes DSP (TMS320C64x)"]
        },
        {
            "Framework" : ["PhoneGap-Cordova", "Bootstrap"]
        },
        {
            "Langage de modélisation" : ["UML"]
        },
        {
            "Connaissances" : ["Culture et création d’entreprise", "Gestion des projets", "droit de l’homme"]
        },

        {
        "Langues" : ["Arabe (Maternelle)", "Français (Niveau B2)", "Anglais (Niveau B2)", "Italien (Niveau A1)"]
        }


    ];
});