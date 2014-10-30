function go(){
	createFilmTable();
}

function loadFilmTable(){
	clearTable();
	createFilmTable();
	document.getElementById("leftScreen").children[0].id="";
	document.getElementById("rightScreen").children[0].id="selected";
}

function loadMusikTable(){
	clearTable();
	createMusikTable();
	document.getElementById("leftScreen").children[0].id="selected";
	document.getElementById("rightScreen").children[0].id="";
}

function clearTable(){
	var elem=document.getElementById("datatable");
	elem.removeChild(elem.firstChild);
}

function createFilmTable(){
	var elem=document.getElementById("datatable");
	var table= document.createElement("table");
	elem.appendChild(table);
	var tr,td,txt;
	for(var i=0;i<film.filme.length;i++){
		tr=document.createElement("tr");
		//Filmtitel
		td=document.createElement("td");
		txt = document.createTextNode(film.filme[i].Filmtitel);
		td.appendChild(txt);
		tr.appendChild(td);
		//Regie
		td=document.createElement("td");
		txt = document.createTextNode(film.filme[i].Regie);
		td.appendChild(txt);
		tr.appendChild(td);
		//Drehbuch
		td=document.createElement("td");
		txt = document.createTextNode(film.filme[i].Drehbuch);
		td.appendChild(txt);
		tr.appendChild(td);
		//Erscheinungsjahr
		td=document.createElement("td");
		txt = document.createTextNode(film.filme[i].Erscheinungsjahr);
		td.appendChild(txt);
		tr.appendChild(td);
		//Genre
		td=document.createElement("td");
		txt = document.createTextNode(film.filme[i].Genre);
		td.appendChild(txt);
		tr.appendChild(td);
		table.appendChild(tr);
	}
}

function createMusikTable(){
	var elem=document.getElementById("datatable");
	var table= document.createElement("table");
	elem.appendChild(table);
	var tr,td,txt;
	for(var i=0;i<musik.musik.length;i++){
		tr=document.createElement("tr");
		//Interpreter
		td=document.createElement("td");
		txt = document.createTextNode(musik.musik[i].Interpreter);
		td.appendChild(txt);
		tr.appendChild(td);
		//Albumtitel
		td=document.createElement("td");
		txt = document.createTextNode(musik.musik[i].Albumtitel);
		td.appendChild(txt);
		tr.appendChild(td);
		//Erscheinungsjahr
		td=document.createElement("td");
		txt = document.createTextNode(musik.musik[i].Erscheinungsjahr);
		td.appendChild(txt);
		tr.appendChild(td);
		//Genre
		td=document.createElement("td");
		txt = document.createTextNode(musik.musik[i].Genre);
		td.appendChild(txt);
		tr.appendChild(td);
		table.appendChild(tr);
	}
}