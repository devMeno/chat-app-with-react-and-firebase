<?php 

header('Access-Control-Allow-Origin: *');
header('Content-Type : application/json');
include("connexionToDB.php");

$requete="SELECT conversationID FROM conversations WHERE conversationName = ?";
$req = $bdd->prepare($requete);
$req->execute(array($_POST['convName']));
$result = $req->fetchAll();

echo json_encode($result);