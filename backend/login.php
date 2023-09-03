<?php 

header('Content-Type : application/json');
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers : *");
include("connexionToDB.php");

$requete = "SELECT * FROM users WHERE adresse_email = ?" ;
$req = $bdd->prepare($requete);
$req->execute(array($_POST['mail']));
$user = $req->fetchAll();
//echo json_encode($user);

foreach($user as $possibleUser) {
     if($possibleUser['mot_de_passe'] === $_POST['mdp']){
          echo 'ok';
          break;
     }
}

/*if(count($answers) > 0) {
     foreach($answers as $value)
}*/
