<?php

//functions
function writeToFile($file, $data){
	foreach($data as $elem){
		fwrite($file, $elem.",");
	}
	fwrite($file, "\n");
	fclose($file);
}

function saveFilm(){
	global $params;
	if(!isset($params["filmtitel"]) || !isset($params["regie"]) || !isset($params["drehbuch"]) || 
	   !isset($params["filmerscheinungsjahr"]) || !isset($params["schauspieler"]) || !isset($params["filmgenre"])) die;
	$file=fopen("film.txt", "a") or die;
	$data[]=$params["filmtitel"];
	$data[]=$params["regie"];
	$data[]=$params["drehbuch"];
	$data[]=$params["filmerscheinungsjahr"];
	$data[]=$params["schauspieler"];
	$data[]=$params["filmgenre"];
	writeToFile($file,$data);
	echo "Submitted successfully! ".' <a href="../html/film.html">Go back</a>';
}

function saveMusic(){
	global $params;
	if(!isset($params["interpreter"]) || !isset($params["albumtitel"]) || !isset($params["musicerscheinungsjahr"]) || 
	   !isset($params["songs"]) || !isset($params["musicgenre"])) die;
	$file=fopen("music.txt", "a") or die;
	$data[]=$params["interpreter"];
	$data[]=$params["albumtitel"];
	$data[]=$params["musicerscheinungsjahr"];
	$data[]=$params["songs"];
	$data[]=$params["musicgenre"];
	writeToFile($file,$data);
	echo "Submitted successfully! ".' <a href="../html/music.html">Go back</a>';
}

//program

if ($_SERVER["REQUEST_METHOD"] == "GET") {
	$params = $_GET;
}
else if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$params = $_POST;
}

if(!isset($params["file"])) die;

if($params["file"]=="film")
	saveFilm();
else if($params["file"]=="music")
	saveMusic();