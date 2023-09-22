<?php

header('Content-Type : application/json');
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers : *");
include("connexionToDB.php");

echo 'Bonjour';
$requete = "INSERT INTO conversations(conversationName,conversationType) VALUES(:discussionName,:discussionType)";
$insert = $bdd->prepare($requete);
$insert->execute(array(
     'discussionName' => $_POST['name'],
     'discussionType' => $_POST['type']
));