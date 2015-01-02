<?php
function saveFilm() {
	global $params,$con;
	if (isset ( $params ["filmtitel"] ) && isset ( $params ["regie"] ) && isset ( $params ["drehbuch"] ) && isset ( $params ["filmerscheinungsjahr"] ) && isset ( $params ["schauspieler"] ) && isset ( $params ["filmgenre"] )){
		$pstm = $con->prepare("INSERT INTO film (filmtitel,regie,drehbuch,erscheinungsjahr,schauspieler,genre) VALUES (?,?,?,?,?,?)");
		$pstm->bind_param("sssiss", $params ["filmtitel"], $params ["regie"], $params ["drehbuch"], $params ["filmerscheinungsjahr"], $params ["schauspieler"], $params ["filmgenre"]);
		$pstm->execute();
		$pstm->close();
		echo "Submitted successfully! " . ' <a href="../html/film.html">Go back</a>';
	}
}
function saveMusic() {
	global $params,$con;
	if (isset ( $params ["interpreter"] ) && isset ( $params ["albumtitel"] ) && isset ( $params ["musicerscheinungsjahr"] ) && isset ( $params ["songs"] ) && isset ( $params ["musicgenre"] )){
		$pstm = $con->prepare("INSERT INTO album (interpreter,albumtitel,erscheinungsjahr,songs,genre) VALUES (?,?,?,?,?)");
		$pstm->bind_param("ssiss", $params ["interpreter"], $params ["albumtitel"], $params ["musicerscheinungsjahr"], $params ["songs"], $params ["musicgenre"]);
		$pstm->execute();
		$pstm->close();
		echo "Submitted successfully! " . ' <a href="../html/music.html">Go back</a>';
	}
}

// program

if ($_SERVER ["REQUEST_METHOD"] == "GET") {
	$params = $_GET;
} else if ($_SERVER ["REQUEST_METHOD"] == "POST") {
	$params = $_POST;
}

if (! isset ( $params ["file"] ))
	die ();

//connection
$host = "127.0.0.1";
$user = "localhost";
$pwd = "localhost";
$dbName = "waw";
$con = new MySQLi($host, $user, $pwd, $dbName);
$con->set_charset("UTF-16");

try{
	//save data
	if ($params ["file"] == "film")
		saveFilm ();
	else if ($params ["file"] == "music")
		saveMusic ();
	//close con
	$con->close();
}catch(Exception $e){
	$con->close();
}
