<?php

header ( "Content-type: text/javascript" );
if (isset ( $_GET ['data'] )) {
	
	
	if ($_GET ['data'] == "music") {
		echo json_encode(file_get_contents('music.txt'));
	}
	if ($_GET ['data']== "movies") {
		echo json_encode(file_get_contents('film.txt'));
		
	}
}



?>