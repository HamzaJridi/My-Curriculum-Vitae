//Configuration des controleurs

//créer le controleur de la page d'accueil
myCV.controller('headCtrl', function ($scope) {
    $scope.data =
    {
        "adresse" : "Soukrah, Ariana Tunisia",
        "e-mail" : "hamzaJridi.h@gmail.com",
        "tel" : "(+216) 22 428 402",
        "linkedIN" : "https://tn.linkedin.com/in/jridihamza",
        "resume": "Hamza Jridi is my name, my ambition in life is to become an Engineer with a big E. Make my parents proud of me was always my main motivation. It is them who had always pushed me forward and encouraged me to pursue my studies in computer sciences, and I can confirm today that I am proud to have made this choice. Certainly, I have not yet tasted the joy of practicing what I have learned during all these years of study, but I am full of motivation and energy that just wait to be expressed."
    }
});

//créer le controleur de la page d'expériences
myCV.controller('comptCtrl', function($scope, $routeParams) {
    $scope.compt =[
        {
            "date" : "Mars - May 2016",
            "role" : "Craft Academy Training",
            "tache" : "Javascript FullStack Developer Training",
            "tech" : "HTML5, CSS3, JavaScript, jQuery, Node.js, Socket.io, AngularJS, MongoDB, Emebr.js, Backbone",
            "description" : "The Craft Academy is a project in collaboration between Poulina Group Holding and Human Craft for teaching a group of computer engineers some of the newest Web technologies and make them able to develop a whole web project from its first step until deploying it to production."
        }, {
        "date" : "September - February 2016",
        "role" : "Member of the Teampany collaborative framework as a Freelancer",
        "tache" : "Development of Web Platforms ",
        "tech" : "HTML5, CSS3, JavaScript, jQuery, Node.js, Socket.io, Redis, HandsOnTable",
        "description" : "The platform consists in generating forms, small applications, or modules that can be added to websites."
        }, {
        "date" : "February – June 2015",
        "role" : "Graduation Project within the company \"Edition Kitabi\"",
        "tache" : "Development of mobile applications for kids",
        "tech" : "HTML5, CSS3, JavaScript, jQuery, jQueryUI, Phonegap, Android SDK",
        "description" : "The graduation project was a part of a bigger project within the Kitabi Publishing house that consists in converting the company's products from a simple book to a mobile app. During this project, I developed two mobile applications, one as a native android app and the other as a hybrid app using Phonegap"
        }, {
        "date" : "July 2014",
        "role" : "Internship at STEPEAV",
        "tache" : "Development of a power management and people counting Application",
        "tech" : "CCS C IDE, Proteus, Embedded C for PICs",
        "description" : "Development of a power management and people counting Application"
      }, {
        "date" : "June 2014",
        "role" : "End of year project within the school ENET’com",
        "tache" : "Development Temperature Acquisition by RS-232 Application",
        "tech" : "mikroC IDE, Proteus, Embedded C for PICs",
        "description" : "Development Temperature Acquisition by RS-232 Application"
      }, {
        "date" : "July 2013",
        "role" : "Internship at CIPI ACTIA",
        "tache" : "Development of an application for workshop tools management",
        "tech" : "Visual Studio 2010 IDE, Visual Basic 6",
        "description" : "Development of an application for workshop tools management"
      }
    ];
    $scope.whichItem = $routeParams.itemId;
});


//créer le controleur de la page de formation
myCV.controller('formCtrl', function($scope) {
    $scope.form =[
      {
        "date" : "2012 - 2015",
        "Ecole" : "National School of Electronics and Telecommunication of Sfax (ENET’com)",
        "Diplome": "Computer Engineer Diploma"
      }, {
        "date" : "2008 - 2011",
        "Ecole" : "Preparatory Institute for Engineering Studies of Nabeul (IPEIN).",
        "Diplome": ""
      }, {
        "date" : "2008 ",
        "Ecole" : "Technical sciences baccalaureate degree",
        "Diplome": ""
      }
    ];
});

//créer le controleur de la page de compétences
myCV.controller('skillCtrl', function($scope) {
    $scope.skill =[
      {
        "Langage de programation" : ["C, Embedded C", "C++", "Java","HTML5","CSS3", "JavaScript", "jQuery", "AJAX", "JSON", "PHP5", "Node.js", "UML"]
      }, {
        "webTechs" : ["HTML5", "CSS3", "Bootstrap", "Sass", "JavaScript", "jQuery", "AngularJS", "NodeJS", "Express", "Socket.io", "MongoDB"]
      },{
        "Systèmes embarqués": ["FPGA cards (VHDL)", "Microcontrollers", "DSP cards (TMS320C64x)"]
      }, {
        "Framework" : ["PhoneGap-Cordova", "Bootstrap", "Express"]
      }, {
        "Connaissances" : ["Entrepreneurship", "Project Management", "Human Rights", "Personal Skills development"]
      }, {
        "database" : ["MySql", "Redis", "MongoDB"]
      }, {
        "Langues" : ["Arabic (Native)", "French (B2)", "English (B2)", "Italian (A1)"]
      }
    ];
});