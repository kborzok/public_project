<!DOCTYPE html>
<script>
    document.cookie = "szam= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    var szam = prompt("Adjon meg egy egész számot");
    document.cookie = "szam=" + szam;
    alert(document.cookie);
</script>
<html lang="hu">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
	<title>Document</title>
	<style>
	h5 {
		background: #ff6666;
		color: white;
	}
	</style>
</head>
<body>
<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Szám</th>
      <th scope="col">Négyzet</th>
      <th scope="col">Négyzetgyök</th>
    </tr>
  </thead>

<?php
$vege = $_COOKIE['szam'];
echo $vege;
for ($x=1; $x<$vege; $x++){
	echo '<tbody>
    <tr>
      <th scope="row">'. $x .' </th>
      <td>' . $x . '</td>
      <td>' . $x**2 . '</td>
      <td>' . sqrt($x) . '</td>
    </tr>
  </tbody>';
}
echo "</table>";	
?>

</body>
</html>