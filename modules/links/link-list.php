<?php
require ('../dbConnection/dbConnect.php');

 

 $pdo = new PDO("mysql:dbname=$dbname;host=$servername", $username, $password);
 

 
 if(isset($_GET['linkurl'])){
    

    $url = $_GET['linkurl'];

    if($url === "" || $url === null){
    	$statement = $pdo->prepare("SELECT * from links");
    }
    else{
    	$statement = $pdo->prepare( "SELECT *    from links where linkUrl like '%$url%'");

    }
}
else{
    $statement = $pdo->prepare("SELECT *    from links");
    
} 

$statement->execute();
$results = $statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($results);
 
 
?>