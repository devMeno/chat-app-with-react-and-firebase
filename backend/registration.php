<?php 

header('Content-Type : application/json');
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers : *");
include("connexionToDB.php");

$requete = "INSERT INTO users(adresse_email,username,mot_de_passe) VALUES(:mail,:username,:mot_de_passe)";
$insert = $bdd->prepare($requete);
$insert->execute(array(
     'mail' => $_POST['mail'],
     'username' => $_POST['username'],
     'mot_de_passe' => $_POST['mdp']
));

