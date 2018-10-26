//creation de persos
var Hero = function(nom, endu, enduMax, force, lvl,xp){
    this.nom = nom;
    this.endu = endu;
    this.enduMax = enduMax;
    this.force = force;
    this.lvl = lvl;
    this.xp = xp;

    this.decrire = function(){
        var descritpion = this.nom + " possede " + this.endu + " points de vie et " + this.force + " en force et " + this.xp + " points d'experience!";
        return descritpion; // Faute d'orthographe description au lieu de descritpion
    }

};

// Variable Globale pour y accéder en dehors de la fonction SelectHero() ou dans d'autres fonctions appliqué à var Cible = joueur1;
var joueur1;

//Function de selection de la classe du hero, de sa creation et de son nomage
function selectHero() {
    var select= prompt("Veuillez choisir entre demo/ war/ hunt/ wiz :");
    var select = select.toLowerCase();
    var nomPerso = prompt("Veuillez saisir le nom de votre hero");
    if (select === "demo"){
        console.log("Vous invoquez un demoniste");
        joueur1 = new Hero ("nom", 100, 100, 50, 1, 0);
        this.joueur1= joueur1;
        joueur1.nom = nomPerso;
        console.log(joueur1.decrire());
    }else if (select === "war"){
        console.log("Vous invoquez un warrior");
        joueur1 = new Hero ("nom", 170, 20, 1, 0);
        joueur1.nom = nomPerso;
        console.log(joueur1.decrire());
    }else if (select === "hunt"){
        console.log("Vous invoquez un hunter");
        joueur1 = new Hero ("nom", 130, 25, 1, 0);
        joueur1.nom = nomPerso;
        console.log(joueur1.decrire());
    }else if (select === "wiz"){
        console.log("Vous invoquez un wizzard");
        joueur1 = new Hero ("nom", 20, 10, 1, 0);
        joueur1.nom = nomPerso;
        console.log(joueur1.decrire());
    }else{
        console.log("SURPRISE MOTHER FUCKER!!!")
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

//creation de BOSS
var Boss = function (nom, endu, force, lvl, valeurXp){
    this.nom = nom;
    this.endu = endu;
    this.force = force; 
    this.lvl = lvl;
    this.valeurXp = valeurXp;

    this.decrire = function(){
        var descritpion = "Un terrible monstre se dresse devant vous! \n "
        "C'est " + this.nom + " !!! \n"
        "Il possede " + this.endu + " points de vie et " + this.force + " en force!";
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
            joueur1.xp = joueur1.xp + Target.valeurXp;
            lvlUp(joueur1);            
        }
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


//TEST LVL UP
function up(joueur1){
    joueur1.lvl += 1;
    joueur1.enduMax += 10;
    joueur1.endu = joueur1.enduMax;
    joueur1.force += 2;
    joueur1.xp = 0;

};

function lvlUp(joueur1) {
    if ((joueur1.lvl === 1) && (joueur1.xp >=100)){
        joueur1 += up(joueur1);
        
        console.log("Votre héro gagne un niveau!! Il est desormais niveau 2 ");
    }else if ((joueur1.lvl === 2) && (joueur1.xp >=100)){
            joueur1 += up(joueur1);
            console.log("Votre héro gagne un niveau!! Il est desormais niveau 3");
    }else if ((joueur1.lvl === 3) && (joueur1.xp >=150)){
        joueur1 += up(joueur1);
        console.log("Votre héro gagne un niveau!! Il est desormais niveau 4");
    }else if ((joueur1.lvl === 4) && (joueur1.xp >=200)){
        joueur1 += up(joueur1);
        console.log("Votre héro gagne un niveau!! Il est desormais niveau 5");
    }else if ((joueur1.lvl === 5) && (joueur1.xp >=250)){
        joueur1 += up(joueur1);
        console.log("Votre héro gagne un niveau!! Il est desormais niveau 6");
    }else if ((joueur1.lvl === 6) && (joueur1.xp >=300)){
        joueur1 += up(joueur1);
        console.log("Votre héro gagne un niveau!! Il est desormais niveau 7");
    }else if ((joueur1.lvl === 7) && (joueur1.xp >=350)){
        joueur1 += up(joueur1);
        console.log("Votre héro gagne un niveau!! Il est desormais niveau 8");
    }else if ((joueur1.lvl === 8) && (joueur1.xp >=400)){
        joueur1 += up(joueur1);
        console.log("Votre héro gagne un niveau!! Il est desormais niveau 9");
    }else if ((joueur1.lvl === 9) && (joueur1.xp >=450)){
        joueur1 += up(joueur1);
        console.log("Votre héro gagne un niveau!! Il est desormais niveau 10");
    }else if ((joueur1.lvl === 10) && (joueur1.xp >=450)){
        joueur1 += up(joueur1);
        console.log("Votre héro gagne un niveau!! Il est desormais niveau 11");
    }else if ((joueur1.lvl === 11) && (joueur1.xp >=450)){
        joueur1 += up(joueur1);
        console.log("Votre héro gagne un niveau!! Il est desormais niveau 12");
    }else if ((joueur1.lvl === 12) && (joueur1.xp >=450)){
        joueur1 += up(joueur1);
        console.log("Votre héro gagne un niveau!! Il est desormais niveau 13");
    }
};   



// init de perso
//var joueur1 = new Hero ("Gex", 150, 25);
//var joueur2 = new Hero ("Gsxr", 100, 50);
//init de mobs
/*
var trash1 =  new Monstre ("Murloc", 75, 5, 50);
var trash2 = new Monstre ("Goblin", 100, 10, 100);
var trash3 = new Monstre ("Noob", 50, 10, 100);
var trash4 =  new Monstre ("Tarlouzator", 75, 5, 100);
var trash5 =  new Monstre ("Lapinou", 80, 3, 100);
var trash6 =  new Monstre ("Nécureuil", 80, 3, 100);
var trash7 =  new Monstre ("Lance-Glands", 75, 5, 100);
var trash8 =  new Monstre ("Ratata", 90, 2, 100);
var trash9 =  new Monstre ("ratitu", 70, 3, 100);
*/

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


//CONSOLE

console.log("Bienvenue dans World Of gex!")

//selection du perso
selectHero(); // Les consoles logs sont dans la fonction

//Premier combat
invoquer();
var Cible= joueur1;
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): ")); // Faute d'orthographe monstre au lieu de nomstre
Choix(Answer); 
//Choix(Answer);  // Les consoles logs sont dans la fonction

//Second combat
invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): "));
Choix(Answer);

//Troisieme combat
invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): "));
Choix(Answer); 

//Quatrieme combat
invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): "));
Choix(Answer);

//Cinquieme combat
invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): "));
Choix(Answer);

//Sixieme combat
invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): "));
Choix(Answer); 

invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): "));
Choix(Answer); 
invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): "));
Choix(Answer); 
invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): "));
Choix(Answer); 
invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): "));
Choix(Answer); 
invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): "));
Choix(Answer); 
invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): "));
Choix(Answer); 
invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): "));
Choix(Answer); 
invoquer();
var Target= trash;
var Answer=(prompt("Voulez vous affronter ce monstre? (oui/non): "));
Choix(Answer); 




