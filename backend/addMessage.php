<?php

header('Content-Type : application/json');
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers : *");
include("connexionToDB.php");

$author = $_POST['auth'];
$chat = $_POST['text'];

$requete = "INSERT INTO messages(auteur,texte) VALUES(:author,:chat)";
$insert = $bdd->prepare($requete);
$insert->execute(array(
     'author' => $author,
     'chat' => $chat
));

echo $author;