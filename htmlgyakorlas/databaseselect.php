<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
<h1>Adatbázis lekérdezés</h1>
<table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col" class="table-dark">Sorszám</th>
        <th scope="col" class="table-dark">Település</th>
        <th scope="col" class="table-dark">Állam</th>
        <th scope="col" class="table-dark">Ország</th>
      </tr>
    </thead>
    <tbody>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pubs";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Hiba: " . $conn->connect_error);
}

$sql = "SELECT id, name, state, country  FROM cities";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
   echo '<tr class="bg-info">
          <th scope="row">' . $row["id"] . '</th> 
            <td class="bg-info">' .$row["name"] . '</td>
            <td class="bg-info">' . $row["state"] . '</td>
            <td class="bg-info">' . $row["country"] . '</td>
        </tr>';
  }
} else {
  echo "0 results";
}
$conn->close();
?> 
</tbody>
  </table>  
</body>
</html>