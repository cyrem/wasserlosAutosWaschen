<?php

header ( "Content-type: text/javascript" );

$verarbeiteJson = function($data){
    if($data != ""){
        
        $decoded = json_decode($data,true);
        foreach($decoded[0] as $k=>$v){
            $newArr[$k] = $k;
        }
        $retArr[] =$newArr;
        foreach($decoded as $d){
        $retArr[]= $d;
        }
        return json_encode($retArr);
    }

};

if (isset ( $_GET ['data'] )) {
	//{"Filmtitel":"Filmtitel","Regie":"Regie","Drehbuch":"Drehbuch","Erscheinungsjahr":"Erscheinungsjahr","Genre":"Genre"},
	if ($_GET ['data'] == "music") {
		//echo $verarbeiteJson(file_get_contents('music.txt'));
		echo file_get_contents('../js/musik.json');
	}
	if ($_GET ['data']== "movies") {
		//echo $verarbeiteJson(file_get_contents('film.txt'));
		echo file_get_contents('../js/film.txt');
		
	}
}



?>

