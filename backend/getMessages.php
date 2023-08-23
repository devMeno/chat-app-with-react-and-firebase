<?php 

header('Access-Control-Allow-Origin: *');
header('Content-Type : application/json');
include("connexionToDB.php");

$requete="SELECT * FROM messages";
$req=$bdd->query($requete);
$result=$req->fetchAll();

echo json_encode($result);