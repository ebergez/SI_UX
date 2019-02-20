function CompteARebours()
{
    var date_actuelle = new Date(); // la date d'aujourdhui
    var annee = date_actuelle.getFullYear();
    var sortie = new Date(annee, 2, 0, 8, 0, 0); // date de la sortie de l'article
    var tps_restant = sortie.getTime() - date_actuelle.getTime(); // Temps restant en millisecondes
    var s_restantes = tps_restant / 1000; // On convertit en secondes
    var min_restantes = s_restantes / 60;
    var H_restantes = min_restantes / 60;
    var d_restants = H_restantes / 24;


    s_restantes = Math.floor(s_restantes % 60); 
    min_restantes = Math.floor(min_restantes % 60); 
    H_restantes = Math.floor(H_restantes % 24); 
    d_restants = Math.floor(d_restants); 

       var days = d_restants;
       
       var hours = H_restantes;
       var min = min_restantes;
       var sec = s_restantes;
       

  
    /*texte = d_restants+ " jour(s) " +H_restantes+ " heure(s) " +
          +i_restantes+ " minute(s) et " +s_restantes+ "(s)";


document.getElementById("compteARebours").innerHTML = texte;*/
document.getElementById("d_restants").innerHTML = days;
document.getElementById("H_restantes").innerHTML = hours;
document.getElementById("min_restantes").innerHTML = min;
document.getElementById("s_restantes").innerHTML = sec;

}
setInterval(CompteARebours, 1000); // la fonction s'actualise toutes les secondes



// reglage du volume 
/*
var video = document.getElementById("myVideo");

function setNoVolume() { 
  video.volume = 0;
}

*/