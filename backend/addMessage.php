<?php

header('Content-Type : application/json');
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers : *");
include("connexionToDB.php");


$requete = "INSERT INTO messages(conversationID,userID,messageContent) VALUES(:discussion,:author,:chat)";
$insert = $bdd->prepare($requete);
$insert->execute(array(
     'discussion' => $_POST['convID'],
     'author' => $_POST['auth'],
     'chat' => $_POST['text']
));

echo $author;