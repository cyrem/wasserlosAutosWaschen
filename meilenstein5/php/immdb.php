<?php
function saveFilm() {
	global $params;
	if (isset ( $params ["filmtitel"] ) && isset ( $params ["regie"] ) && isset ( $params ["drehbuch"] ) && isset ( $params ["filmerscheinungsjahr"] ) && isset ( $params ["schauspieler"] ) && isset ( $params ["filmgenre"] ))
		$data = file_get_contents ( "film.txt" );
	
	if ($data != "") {
		$data = json_decode ( $data, true );
	}
	
	$data [] = array (
			'Filmtitel' => $params ["filmtitel"],
			'Regie' => $params ["regie"],
			'Drehbuch' => $params ["drehbuch"],
			'Erscheinungsjahr' => $params ["filmerscheinungsjahr"],
			'Schauspieler' => $params ["schauspieler"],
			'Genre' => $params ["filmgenre"] 
	);
	
	file_put_contents ( "film.txt", json_encode ( $data ) );
	
	echo "Submitted successfully! " . ' <a href="../html/film.html">Go back</a>';
}
function saveMusic() {
	global $params;
	if (isset ( $params ["interpreter"] ) && isset ( $params ["albumtitel"] ) && isset ( $params ["musicerscheinungsjahr"] ) && isset ( $params ["songs"] ) && isset ( $params ["musicgenre"] ))
		$data = file_get_contents ( "music.txt" );
	
	if ($data != "") {
		$data = json_decode ( $data, true );
	}
	
	$data [] = array (
			'Interpreter' => $params ["interpreter"],
			'Albumtitel' => $params ["albumtitel"],
			'Erscheinungsjahr' => $params ["musicerscheinungsjahr"],
			'Songs' => $params ["songs"],
			'Genre' => $params ["musicgenre"] 
	);
	file_put_contents ( "music.txt", json_encode ( $data ) );
	
	echo "Submitted successfully! " . ' <a href="../html/music.html">Go back</a>';
}

// program

if ($_SERVER ["REQUEST_METHOD"] == "GET") {
	$params = $_GET;
} else if ($_SERVER ["REQUEST_METHOD"] == "POST") {
	$params = $_POST;
}

if (! isset ( $params ["file"] ))
	die ();

if ($params ["file"] == "film")
	saveFilm ();
else if ($params ["file"] == "music")
	saveMusic ();
