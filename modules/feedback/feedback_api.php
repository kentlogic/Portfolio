<?php
require ('../dbConnection/dbConnect.php');

class TableRows extends RecursiveIteratorIterator { 
    function __construct($it) { 
        parent::__construct($it, self::LEAVES_ONLY); 
    }

    function current() {
        return "<td style='width:150px;border:1px solid black;'>" . parent::current(). "</td>";
    }

    function beginChildren() { 
        echo "<tr>"; 
    } 

    function endChildren() { 
        echo "</tr>" . "\n";
    } 
} 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kentlogic_db";
 
$pdo = new PDO("mysql:dbname=$dbname;host=$servername", $username, $password);
$statement = $pdo->prepare(
    "SELECT Count(*) as Total,
    (Select Count(*) FROM feedback_tbl WHERE feedbackCategory like '%Feature%') as FeatureRequest,
    (Select Count(*) FROM feedback_tbl WHERE feedbackCategory like '%Bug/Glitch%') as Bug,  
    (Select Count(*) FROM feedback_tbl WHERE feedbackCategory like '%Functionality%') as Functionality 
    from feedback_tbl");
$statement->execute();
$results = $statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($results);

?>