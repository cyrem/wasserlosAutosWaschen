function clearTable() {
	var elem = document.getElementById("datatable");
	while (elem.firstChild) {
		elem.removeChild(elem.firstChild);
	}
}

function appendTh(tbl, arr) {
	var tr, th, txt;
	tr = document.createElement("tr");
	for ( var j in arr) {
		th = document.createElement("th");
		txt = document.createTextNode(arr[j]);
		th.appendChild(txt);
		tr.appendChild(th);
	}
	tbl.appendChild(tr);

}

function appendTr(tbl, arr) {
	var tr, td, txt;
	tr = document.createElement("tr");
	for ( var j in arr) {
		td = document.createElement("td");

		if (j == "Regie" || j =="Albumtitel"){
			td.className= "highLightBlue"
		}
		txt = document.createTextNode(arr[j]);
		td.appendChild(txt);
		tr.appendChild(td);
	}
	tbl.appendChild(tr);
}

function get_json(url, fn) {
	
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        console.log(xmlhttp.responseText);
	    	var myArr = JSON.parse(xmlhttp.responseText);
	        
	        fn(myArr);
	    }
	}
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	};
//get_json('http://127.0.0.1/meilenstein5/php/getfavorites.php?data=music',createTable
//get_json('http://127.0.0.1/meilenstein5/php/getfavorites.php?data=movies',createTable



function loadData(arr){
	if (arr.length != 0) {

		var elem = document.getElementById("datatable");
		var table = document.createElement("table");

		appendTh(table, arr[0]);

		for (var i = 1; i < arr.length; i++) {
			appendTr(table, arr[i]);
		}
		elem.appendChild(table);
	}
	
}


function createTable(arr) {
	// auswahl durch string statt var
	clearTable();
	if (arr === 'film') {
		document.getElementById("musikSpan").className = "";
		document.getElementById("filmSpan").className = "selected";
		get_json('http://localhost/wawpro/meilenstein6/php/getfavorites.php?data=movies',loadData);
		
		//arr = film;
		
	} else if (arr === 'musik') {
		document.getElementById("musikSpan").className = "selected";
		document.getElementById("filmSpan").className = "";
		//arr = musik;
		get_json('http://localhost/wawpro/meilenstein6/php/getfavorites.php?data=music',loadData);
				
	}

}




function go() {
	createTable("film");
	// createFilmTable();
}