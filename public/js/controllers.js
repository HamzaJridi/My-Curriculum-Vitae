//Configuration des controleurs

//créer le controleur de la page d'accueil
myCV.controller('headCtrl', function ($scope) {
    $scope.data =
    {
        "adresse" : "La Soukra, Ariana Tunisie",
        "e-mail" : "hamzaJridi.h@gmail.com",
        "tel" : "(+216) 22 428 402",
        "linkedIN" : "https://tn.linkedin.com/in/jridihamza",
        "resume": "Hamza Jridi is my name, my ambition in life is to become an Engineer with a big E. Make my parents proud of me was always my main motivation. It is them who had always pushed me forward and ancouraged me to pursue my studies in computer sciences, and I can confirm today that I am proud to have made this choice. Certainly, I have not yet tasted the joy of practicing what I have learned during all these years of study, but I am full of motivation and energy that just wait tp be expressed."
    }
});

//créer le controleur de la page d'expériences
myCV.controller('comptCtrl', function($scope, $routeParams) {
    $scope.compt =[
    {
        "date" : "September - February 2016",
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