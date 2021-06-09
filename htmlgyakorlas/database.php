<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adatbázis teszt</title>
</head>
<body>
<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Kapcsolódási hiba " . $conn->connect_error);
}
echo "<h1>Adatbázis kapcsolat sikeres</h1>";
$conn->query("DROP DATABASE IF EXISTS myDB");
$sql = "CREATE DATABASE myDB;";
//echo $sql;
if ($conn->query($sql) === TRUE) {
  echo "Az adatbázis létrehozása sikeres";
} else {
  echo "Hiba az adatbázis létrehozásánál: " . $conn->error;
}
$conn->query("use myDB");

$sql = "CREATE TABLE MyGuests (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(50),
  reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )";
  
  if ($conn->query($sql) === TRUE) {
    echo "Tábla MyGuests létrehozva";
  } else {
    echo "Hiba a tábla létrehozásánál: " . $conn->error;
  }
  $sql = "INSERT INTO MyGuests (firstname, lastname, email)
  VALUES ('John', 'Doe', 'john@example.com');";
  $sql .= "INSERT INTO MyGuests (firstname, lastname, email)
  VALUES ('Mary', 'Moe', 'mary@example.com');";
  $sql .= "INSERT INTO MyGuests (firstname, lastname, email)
  VALUES ('Julie', 'Dooley', 'julie@example.com')";
  
  if ($conn->multi_query($sql) === TRUE) {
    echo "Új sorok beszúrva!";
  } else {
    echo "Hiba: " . $sql . "<br>" . $conn->error;
  }

$conn->close();
?> 
</body>
</html>