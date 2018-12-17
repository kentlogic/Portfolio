<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kentlogic_db";
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo '<script language="javascript">';
	////echo 'alert("Subarashii")';
	//echo '';
	//echo '</script>';

    echo ""; 
    }
catch(PDOException $e)
    {
    echo "Zan'nendesu ne." . $e->getMessage();
    }
?>