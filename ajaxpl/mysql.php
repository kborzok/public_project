<?php
    require "config.php";
     
    function leker($conn) {
        $sql = "select * from szavak";
        $result = $conn->query($sql);
        //echo json_encode($result->fetch_assoc());
     
     
        $res = array();    
        while($sor = $result->fetch_assoc()) {
            array_push($res, $sor);        
        }
        echo json_encode($res);
     
    }
     
    function insertDolgozo($conn, $data) {
    	$sql = "INSERT INTO Dolgozók (Név, Település) 
            VALUES (\"{$data['nev']}\", \"{$data['telepules']}\")";
    	$conn->query($sql);
    }
     
    function dbopen() {
    	global $db;
    	$conn = new mysqli($db['host'], $db['user'], $db['pass'], $db['dbname']);
    	if($conn->connect_error)
    		die("Hiba a kapcsolódás során (" . $mysqli->connect_errno . ")"
    		. $conn->connect_error);
    	$conn->set_charset("utf8");	
    	return $conn;	
    }
     
    function dbclose($conn) {
    	$conn->close();
    }
    ?>

