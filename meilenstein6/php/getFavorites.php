<?php
header ( "Content-type: text/javascript" );

$verarbeiteJson = function ($data) {
	if ($data != "") {
		
		$decoded = json_decode ( $data, true );
		foreach ( $decoded [0] as $k => $v ) {
			$newArr [$k] = $k;
		}
		$retArr [] = $newArr;
		foreach ( $decoded as $d ) {
			$retArr [] = $d;
		}
		return json_encode ( $retArr );
	}
};

if (isset ( $_GET ['data'] )) {
	
	// connection
	$host = "127.0.0.1";
	$user = "localhost";
	$pwd = "localhost";
	$dbName = "waw";
	$con = new MySQLi ( $host, $user, $pwd, $dbName );
	$con->set_charset ( "UTF-16" );
	
	// {"Filmtitel":"Filmtitel","Regie":"Regie","Drehbuch":"Drehbuch","Erscheinungsjahr":"Erscheinungsjahr","Genre":"Genre"},
	if ($_GET ['data'] == "music") {
		
		$result = mysqli_fetch_all ( $con->query ( "SELECT * FROM film ORDER BY filmId DESC LIMIT 0 ,20" ) );
	}
	if ($_GET ['data'] == "movies") {
		$result = mysqli_fetch_all ( $con->query ( "SELECT * FROM album ORDER BY albumId DESC LIMIT 0 ,20" ) );
	}
	if ($result) {
		echo json_encode ( $result );
	}
}

?>

