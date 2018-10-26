var Hero = {
    
    init: function(nom, force, agi, dext, armure){
        this.nom = nom;
        this.force = force;
        this.agi = agi;
        this.dext = dext;
        this.armure = armure;

    },

    carac: function(mana, endu, enduMax){
        this.mana = mana;
        this.endu = endu;
        this.enduMax = enduMax;
    },

    decrire: function(){
        var description = this.nom + " est un puissant démoniste! Il possede " + this.endu + " points de vie sur " + this.enduMax + "au maximum et " + this.mana + " points de mana. Il a une force de " +
         this.force + " , une agilité de " + this.agi + " , " + this.dext + " de dexterité et " + this.armure + " points d'armure!";
        return description;
    },

    experience: function(lvl, exp, expMax){
        this.lvl = lvl;
        this.exp = exp;
        this.expMax = expMax;
    },

    Up: function Up(joueur){   
        joueur.lvl += 1;
        joueur.exp = 0;
        joueur.expMax = joueur.expMax + (joueur.expMax*0.1);
        joueur.force += 2;
        joueur.enduMax += 10;
        joueur.endu = joueur.enduMax;
        joueur.mana += 10;
        joueur.agi += 2;
        joueur.dext += 2;
        joueur.armure += 1;
        console.log("Votre hero gagne un niveau!");
        console.log(joueur.decrire());
    },
    
    lvlUp: function Up(joueur){   
        joueur.lvl += 1;
        joueur.exp = 0;
        joueur.expMax = joueur.expMax + (joueur.expMax*0.1);
        joueur.force += 2;
        joueur.enduMax += 10;
        joueur.endu = joueur.enduMax;
        joueur.mana += 10;
        joueur.agi += 2;
        joueur.dext += 2;
        joueur.armure += 1;
        console.log("Votre hero gagne un niveau!");
        console.log(joueur.decrire());
    }
    /*
    function lvlUp(joueur){
        if(joueur.exp > joueur.expMax){
            joueur += Up(joueur);
            console.log("Votre hero gagne un niveau!");
            console.log(joueur.decrire());
        }else{
            console.log("AYAAAAAAAAAAAAAAAAAAAAAAAAAA");
        }
    };(joueur){
        if(joueur.exp > joueur.expMax){
            joueur += Up(joueur);
            console.log("Votre hero gagne un niveau!");
            console.log(joueur.decrire());
        }else{
            console.log("AYAAAAAAAAAAAAAAAAAAAAAAAAAA");
        }
    };
    (joueur){   
        joueur.lvl += 1;
        joueur.exp = 0;
        joueur.expMax = joueur.expMax + (joueur.expMax*0.1);
        joueur.force += 2;
        joueur.enduMax += 10;
        joueur.endu = joueur.enduMax;
        joueur.mana += 10;
        joueur.agi += 2;
        joueur.dext += 2;
        joueur.armure += 1;
        console.log("Votre hero gagne un niveau!");
        console.log(joueur.decrire());
    },
    
    function lvlUp(joueur){
        if(joueur.exp > joueur.expMax){
            joueur += Up(joueur);
            console.log("Votre hero gagne un niveau!");
            console.log(joueur.decrire());
        }else{
            console.log("AYAAAAAAAAAAAAAAAAAAAAAAAAAA");
        }
    }
/*
    lvlUp: function(){
            if(this.exp === this.expMax){
            lvl += 1;
            exp = 0;
            this.expMax = expMax + (expMax*0.1);
            this.force += 2;
            this.enduMax += 10;
            this.endu = this.enduMax;
            this.mana += 10;
            this.agi += 2;
            this.dext += 2;
            this.armure += 1;
            console.log("Votre hero gagne un niveau!");
            console.log(joueur.decrire());
       }else{

        }
    }
*/
};

var stuff={

    tete: function(force, enduMax, agi, dext, armure){
        this.force = force;
        this.enduMax = enduMax;
        this.agi = agi;
        this.dext = dext;
        this.armure = armure;
        joueur.force = this.force + joueur.force;
        joueur.endu = this.enduMax + joueur.enduMax;
        joueur.agi = this.agi + joueur.agi;
        joueur.dext = this.dext + joueur.dext;
        joueur.armure = this.armure + joueur.armure;
    },

    torse: function(force, enduMax, agi, dext, armure){
        this.force = force;
        this.enduMax = enduMax;
        this.agi = agi;
        this.dext = dext;
        this.armure = armure;
        joueur.force = this.force + joueur.force;
        joueur.enduMax = this.enduMax + joueur.enduMax;
        joueur.agi = this.agi + joueur.agi;
        joueur.dext = this.dext + joueur.dext;
        joueur.armure = this.armure + joueur.armure;
    },

    epau: function(force, enduMax, agi, dext, armure){
        this.force = force;
        this.enduMax = enduMax;
        this.agi = agi;
        this.dext = dext;
        this.armure = armure;
        joueur.force = this.force + joueur.force;
        joueur.enduMax = this.enduMax + joueur.enduMax;
        joueur.agi = this.agi + joueur.agi;
        joueur.dext = this.dext + joueur.dext;
        joueur.armure = this.armure + joueur.armure;
    },

    gants: function(force, enduMax, agi, dext, armure){
        this.force = force;
        this.enduMax = enduMax;
        this.agi = agi;
        this.dext = dext;
        this.armure = armure;
        joueur.force = this.force + joueur.force;
        joueur.enduMax = this.enduMax + joueur.enduMax;
        joueur.agi = this.agi + joueur.agi;
        joueur.dext = this.dext + joueur.dext;
        joueur.armure = this.armure + joueur.armure;
    },

    jambes: function(force, enduMax, agi, dext, armure){
        this.force = force;
        this.enduMax = enduMax;
        this.agi = agi;
        this.dext = dext;
        this.armure = armure;
        joueur.force = this.force + joueur.force;
        joueur.enduMax = this.enduMax + joueur.enduMax;
        joueur.agi = this.agi + joueur.agi;
        joueur.dext = this.dext + joueur.dext;
        joueur.armure = this.armure + joueur.armure;
    },

    bottes: function(force, enduMax, agi, dext, armure){
        this.force = force;
        this.enduMax = enduMax;
        this.agi = agi;
        this.dext = dext;
        this.armure = armure;
        joueur.force = this.force + joueur.force;
        joueur.enduMax = this.enduMax + joueur.enduMax;
        joueur.agi = this.agi + joueur.agi;
        joueur.dext = this.dext + joueur.dext;
        joueur.armure = this.armure + joueur.armure;
    },
};

var stuffArmes={
    
    arme1: function(force, agi, dext, enduMax){
        this.force = force;
        this.agi = agi;
        this.dext = dext;
        this.enduMax = enduMax;
        joueur.force = joueur.force + this.force;
        joueur.agi = joueur.Agi + this.agi;
        joueur.dext = joueur.dext + this.dext;
        joueur.armure =joueur.armure + this.armure;

    },

    arme2: function(force, agi, dext, enduMax){
        this.force = force;
        this.agi = agi;
        this.dext = dext;
        this.enduMax = enduMax;
        joueur.force = joueur.force + this.force;
        joueur.agi = joueur.Agi + this.agi;
        joueur.dext = joueur.dext + this.dext;
        joueur.armure =joueur.armure + this.armure;
    },

    trinket1: function(force, agi, dext, enduMax){
        this.force = force;
        this.agi = agi;
        this.dext = dext;
        this.enduMax = enduMax;
        joueur.force = joueur.force + this.force;
        joueur.agi = joueur.Agi + this.agi;
        joueur.dext = joueur.dext + this.dext;
        joueur.armure =joueur.armure + this.armure;
    },

    trinket2: function(force, agi, dext, enduMax){
        this.force = force;
        this.agi = agi;
        this.dext = dext;
        this.enduMax = enduMax;
        joueur.force = joueur.force + this.force;
        joueur.agi = joueur.Agi + this.agi;
        joueur.dext = joueur.dext + this.dext;
        joueur.armure =joueur.armure + this.armure;
    },

    neck: function(force, agi, dext, enduMax){
        this.force = force;
        this.agi = agi;
        this.dext = dext;
        this.enduMax = enduMax;
        joueur.force = joueur.force + this.force;
        joueur.agi = joueur.Agi + this.agi;
        joueur.dext = joueur.dext + this.dext;
        joueur.armure =joueur.armure + this.armure;
    }

};

//creation de monstres
var Monstre = function (nom, endu, force, valeurXp){
    this.nom = nom;
    this.endu = endu;
    this.force = force; 
    this.valeurXp = valeurXp;
    
    this.decrire = function(){
        var descritpion = "Un terrible monstre se dresse devant vous! \n"
        + "C est " + this.nom + " !!! Il possede " + this.endu + " points de vie et " + this.force + " en force!";
        return descritpion;
    }
};

//FONCTION COMBAT SIMPLE sans esquive/critique/reduc armure
var Combat= function (Cible, Target){
    for ( ; ((Cible.endu > 0) && (Target.endu > 0)) ; ){
        degats= Cible.force;
        console.log("Vous infligez " + degats + " points de degats à " + Target.nom);
        Target.endu = Target.endu - degats;
        if (Target.endu > 0){
            console.log(Target.nom + " a encore " + Target.endu + " points de vie!")
            degats = Target.force;
            console.log(Target.nom + " contre attaque et vous inflige " + degats + " points de degats");
            Cible.endu = Cible.endu - degats;
            console.log(Cible.nom + " a encore " + Cible.endu + " points de vie!")
        }else{
            console.log(Target.nom + " meurt sous vos coups!")
            console.log("Vous gagnez " + Target.valeurXp + " points d'experiences." );
            joueur.xp = joueur.xp + Target.valeurXp;
            lvlUp(joueur);            
        }
    }
};



function Up(joueur){   
    joueur.lvl += 1;
    joueur.exp = 0;
    joueur.expMax = joueur.expMax + (joueur.expMax*0.1);
    joueur.force += 2;
    joueur.enduMax += 10;
    joueur.endu = joueur.enduMax;
    joueur.mana += 10;
    joueur.agi += 2;
    joueur.dext += 2;
    joueur.armure += 1;
    console.log("Votre hero gagne un niveau!");
    console.log(joueur.decrire());
};

function lvlUp(joueur){
    if(joueur.exp > joueur.expMax){
        joueur += Up(joueur);
        console.log("Votre hero gagne un niveau!");
        console.log(joueur.decrire());
    }else{
        console.log("AYAAAAAAAAAAAAAAAAAAAAAAAAAA");
    }
};


//choix du debut du combat ou la fuite
function Choix(Answer){
    Answer= Answer.toLowerCase();
    if (Answer === "oui"){
        Combat(Cible, Target);
        //console.log(Combat(Cible, Target));//remplacer par console.log(Combat( , ); ????? comment remplir les parametres automatiquemet en fonction du monstre rencontré???
    }else if (Answer === "non"){
        console.log("Vous tentez de fuir le combat! Si le monstre vous repere, il vous engagera!");

        //fonction des 6
        function desSix(max) {
            return Math.floor(Math.random() * Math.floor(max)+1);
        }
        var resultatDesSix = desSix(6);
        console.log("Vous lancez le dés et... vous faites un " + resultatDesSix);

        if (resultatDesSix === 1 || 3 || 5){
            console.log("Le monstre vous a reperé et engage le combat!");
            console.log(Combat(joueur1, Target));
        }else if (resultatDesSix === 2 || 4 || 6){
            console.log("Vous vous éloignez discretement et vous revenez sur vos pas.");
        }
    }else{
        console.log("SURPRISE MOTHER FUCKER!!!!");
        console.log("TO LATE TO RUN!!!")
        console.log(Combat(Cible, Target));
    }
};

var bestiaire =  [
    'new Monstre ("Tarlouzator", 75, 5, 100);',
    'new Monstre ("Lapinou", 80, 3, 100);',
    'new Monstre ("Nécureuil", 80, 3, 100);',
    'new Monstre ("Lance-Glands", 75, 5, 100);',
    'new Monstre ("Ratata", 90, 2, 100);',
    'new Monstre ("ratitu", 70, 3, 100);'
];


function rollTrash(max) {
    return Math.floor(Math.random() * Math.floor(max)+1);
};

var trash;

function invoquer(){
    this.trash = trash;
    var resultatRollTrash = rollTrash(bestiaire.length);
    trash = bestiaire[resultatRollTrash];
    if ( resultatRollTrash === 6){
        trash =  new Monstre ("Murloc", 75, 5, 50);
        console.log(trash.decrire());
    }else if ( resultatRollTrash === 1){
        trash =  new Monstre ("Lapinou", 80, 3, 100);
        console.log(trash.decrire());
    }else if ( resultatRollTrash === 2){
        trash =  new Monstre ("Nécureuil", 80, 3, 100);
        console.log(trash.decrire());
    }else if ( resultatRollTrash === 3){
        trash =  new Monstre ("Lance-Glands", 75, 5, 100);
        console.log(trash.decrire());
    }else if ( resultatRollTrash === 4){
        trash =  new Monstre ("Ratata", 90, 2, 100);
        console.log(trash.decrire());
    }else if ( resultatRollTrash === 5){
        trash =  new Monstre ("ratitu", 70, 3, 100);
        console.log(trash.decrire());
    }else{
        console.log("SURPRISE MOTHER FUCKER!!!");
    }       
};


var joueur = Object.create(Hero);
joueur.init("Gsxr", 10, 10, 10, 1);
joueur.carac(10, 250, 250);
joueur.experience(1, 50, 100);
console.log(joueur.decrire());
var stuffTete = Object.create(stuff);
var stuffTorse = Object.create(stuff);
var stuffEpau = Object.create(stuff);
var stuffGants = Object.create(stuff);
var stuffBottes = Object.create(stuff);
var stuffJambes = Object.create(stuff);
stuffTete.tete(1, 1, 1, 1, 1);
stuffTorse.torse(1, 1, 1, 1, 1);
stuffEpau.epau(1, 1, 1, 1, 1);
stuffGants.gants(1, 1, 1, 1, 1);
stuffJambes.jambes(1, 1, 1, 1, 1);
stuffBottes.bottes(1, 1, 1, 1, 1);
//var Tete = new tete(10, 10);
console.log(joueur.decrire());

invoquer();
var Cible= joueur;
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): ")); // Faute d'orthographe monstre au lieu de nomstre
Choix(Answer); 

invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): ")); // Faute d'orthographe monstre au lieu de nomstre
Choix(Answer); 

invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): ")); // Faute d'orthographe monstre au lieu de nomstre
Choix(Answer); 

invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): ")); // Faute d'orthographe monstre au lieu de nomstre
Choix(Answer); 

invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): ")); // Faute d'orthographe monstre au lieu de nomstre
Choix(Answer); 

invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): ")); // Faute d'orthographe monstre au lieu de nomstre
Choix(Answer); 