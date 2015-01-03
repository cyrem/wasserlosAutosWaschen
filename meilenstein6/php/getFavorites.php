<?php
// ini_set ( 'display_startup_errors', 1 );
// ini_set ( 'display_errors', 1 );
// error_reporting ( - 1 );

header ( "Content-type: text/javascript" );

$verarbeiteJson = function ($data) {
	
	if ($data != "") {
		
		while ( $row = $data->fetch_assoc() ) {
			if(!$group_arr){
				$keys =array_keys($row);
				foreach($keys as $k){
					$newArr[$k] = $k;
				}
				$group_arr[]=$newArr;
			}
			$group_arr [] = $row;
		}
		return $group_arr;
	}
};

if (isset ( $_GET ['data'] )) {
	
	// connection
	$host = "127.0.0.1";
	$user = "root";
	$pwd = "jhsafk325534";
	$dbName = "waw";
	$con = new MySQLi ( $host, $user, $pwd, $dbName );
	$con->set_charset ( "UTF-16" );
	
	// {"Filmtitel":"Filmtitel","Regie":"Regie","Drehbuch":"Drehbuch","Erscheinungsjahr":"Erscheinungsjahr","Genre":"Genre"},
	if ($_GET ['data'] == "music") {
		$query = $con->query ( "SELECT Interpreter, Albumtitel, Erscheinungsjahr, Songs,Genre FROM album ORDER BY albumId DESC LIMIT 0 ,20" );
	}
	if ($_GET ['data'] == "movies") {
		$query = $con->query ( "SELECT Filmtitel, Regie, Drehbuch, Erscheinungsjahr, Schauspieler, Genre FROM film ORDER BY filmId DESC LIMIT 0 ,20" );
	}
	if ($query) {
		echo json_encode ( $verarbeiteJson ( $query ));
	}
}

?>

