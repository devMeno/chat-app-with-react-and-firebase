<?php 

try{
     $bdd = new PDO('mysql:host=localhost;dbname=chatapp','root','',[PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
}catch(Exception $e){
     die('Erreur: '.$e -> getMessage());
}