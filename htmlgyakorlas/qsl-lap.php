
Skip to content

Why GitHub?
                      


                
Team
Enterprise
Explore
                  

                
Marketplace
Pricing
                   


                    

Sign in
Sign up
jantayg /
13SZF2

0

0

Code
Issues
Pull requests
Actions
Projects
Wiki
Security

Insights

php órai gyakorlat

master 

@jantayg
jantayg committed 23 hours ago
1 parent 47e93e6 commit e77b6b8ff4e954b02b9402a4ddbb29af2800d1f2
Showing
with 89 additions and 0 deletions.
BIN +6 KB php/.DS_Store
Binary file not shown.
89 php/qsl.php
@@ -0,0 +1,89 @@
<!DOCTYPE html>
<html lang="hu">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
<title>QSL</title>
</head>
<body>
<h1>
    qsl
</h1>

<form action="<?=$_SERVER['PHP_SELF']?>" method="get">
Callsign: <input type="text" name="Callsign"><br>
Date(dmy): <input type="date" name="Date"><br>
Time(h:m): <input type="time" name="Time"><br>
QRG(MHz): <input type="number" name="QRG"><br>
Mode: <input type="text" name="Mode"><br>
Report: <input type="number" name="Report"><br>
Via: <input type="number" name="Via"><br>
<input type="submit">
</form>   

<?php
$servername = "localhost";
$username = "root";
$password = "";


// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
} 

$sql = "CREATE DATABASE IF NOT EXISTS myqls";
if ($conn->query($sql) === TRUE) {
echo "successfully connected to database";
} else {
echo "Error creating database: " . $conn->error;
}
$conn->query("use myqls;");
$sql = "CREATE TABLE IF NOT EXISTS qls (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
callsign VARCHAR(30) NOT NULL,
reg_date VARCHAR(30) ,
reg_time VARCHAR(30) ,
qrg VARCHAR(30),
mode VARCHAR(10) NOT NULL,
report VARCHAR(30),
via VARCHAR(30)
)";

if ($conn->query($sql) === TRUE) {
  echo "Table qls created successfully";
} else {
  echo "Error creating table: " . $conn->error;
}

$sql = "INSERT INTO qls (callsign, reg_date, reg_time, qrg, mode, report, via)
VALUES ($_GET[Callsign],$_GET[Date],$_GET[Time],$_GET[QRG],$_GET[Mode],$_GET[Report],$_GET[Via])";

if ($conn->multi_query($sql) === TRUE) {
echo "New records created successfully";
} else {
echo "Error: " . $sql . "<br>" . $conn->error;
}




?>   

</body>
</html>


