<?php
require ('../dbConnection/dbConnect.php');
 
 $pdo = new PDO("mysql:dbname=$dbname;host=$servername", $username, $password);
 

 
 if(isset($_GET['kbtitle'])){
    $title = $_GET['kbtitle'];
     	if(strlen($title))
 	if(strlen($title)==2){
 		$param = "kbID";
 	}
 	else{
 		$param = "kbTitle";
 	}
 $statement = $pdo->prepare(
    "SELECT *
    from knowledgebase where $param like '%$title%'");
}
else{
    $statement = $pdo->prepare(
    "SELECT *
    from knowledgebase");

 
}

 
$statement->execute();
$results = $statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($results);


/**
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kentlogic_db";
 */




?>