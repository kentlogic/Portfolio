<?php
require ('../dbConnection/dbConnect.php');

$pdo = new PDO("mysql:dbname=$dbname;host=$servername", $username, $password);
 
 if(isset($_GET['pDesc'])){
    $process = $_GET['pDesc'];
  $statement = $pdo->prepare(
    "SELECT *
    from process where pDesc like '%$process%'");
}
else{
    $statement = $pdo->prepare(
    "SELECT *
    from process");
} 

$statement->execute();
$results = $statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($results);
 
 
?>