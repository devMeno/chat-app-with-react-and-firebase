<?php 

header('Access-Control-Allow-Origin: *');
header('Content-Type : application/json');
include("connexionToDB.php");

$requete="SELECT * FROM messages WHERE conversationID = ?";
$req = $bdd->prepare($requete);
$req->execute(array($_POST['convID']));
$user = $req->fetchAll();

echo json_encode($result);