<?php

header('Content-Type : application/json');
header('Access-Control-Allow-Origin:*');
include("connexionToDB.php");

$requete = "INSERT INTO messages(auteur,texte) VALUES(:author,:chat)";
$insert = $bdd->prepare($requete);
$insert->execute(array(
     'author' => $_POST['aut'],
     'chat' => $_POST['text']
));

echo 'very good';