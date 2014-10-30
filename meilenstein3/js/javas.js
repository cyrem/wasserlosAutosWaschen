function go() {
	createTable("film");
	// createFilmTable();
}

// function loadFilmTable() {
// clearTable();
// createFilmTable();
// document.getElementById("leftScreen").children[0].id = "";
// document.getElementById("rightScreen").children[0].id = "selected";
// }
//
// function loadMusikTable() {
// clearTable();
// createMusikTable();
// document.getElementById("leftScreen").children[0].id = "selected";
// document.getElementById("rightScreen").children[0].id = "";
// }

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
		txt = document.createTextNode(arr[j]);
		td.appendChild(txt);
		tr.appendChild(td);
	}
	tbl.appendChild(tr);
}

function createTable(arr) {
	// auswahl durch string statt var
	if (arr === 'film') {

		document.getElementById("musikSpan").className = "";
		document.getElementById("filmSpan").className = "selected";
		arr = film;
	} else if (arr === 'musik') {
		document.getElementById("musikSpan").className = "selected";
		document.getElementById("filmSpan").className = "";
		arr = musik;
	}

	clearTable();

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
//
// function createFilmTable() {
// var elem = document.getElementById("datatable");
// var table = document.createElement("table");
// elem.appendChild(table);
// var tr, td, txt;
// for (var i = 0; i < film.filme.length; i++) {
// tr = document.createElement("tr");
// // Filmtitel
// td = document.createElement("td");
// txt = document.createTextNode(film.filme[i].Filmtitel);
// td.appendChild(txt);
// tr.appendChild(td);
// // Regie
// td = document.createElement("td");
// txt = document.createTextNode(film.filme[i].Regie);
// td.appendChild(txt);
// tr.appendChild(td);
// // Drehbuch
// td = document.createElement("td");
// txt = document.createTextNode(film.filme[i].Drehbuch);
// td.appendChild(txt);
// tr.appendChild(td);
// // Erscheinungsjahr
// td = document.createElement("td");
// txt = document.createTextNode(film.filme[i].Erscheinungsjahr);
// td.appendChild(txt);
// tr.appendChild(td);
// // Genre
// td = document.createElement("td");
// txt = document.createTextNode(film.filme[i].Genre);
// td.appendChild(txt);
// tr.appendChild(td);
// table.appendChild(tr);
// }
// }
//
// function createMusikTable() {
// var elem = document.getElementById("datatable");
// var table = document.createElement("table");
// elem.appendChild(table);
// var tr, td, txt;
// for (var i = 0; i < musik.musik.length; i++) {
// tr = document.createElement("tr");
// // Interpreter
// td = document.createElement("td");
// txt = document.createTextNode(musik.musik[i].Interpreter);
// td.appendChild(txt);
// tr.appendChild(td);
// // Albumtitel
// td = document.createElement("td");
// txt = document.createTextNode(musik.musik[i].Albumtitel);
// td.appendChild(txt);
// tr.appendChild(td);
// // Erscheinungsjahr
// td = document.createElement("td");
// txt = document.createTextNode(musik.musik[i].Erscheinungsjahr);
// td.appendChild(txt);
// tr.appendChild(td);
// // Genre
// td = document.createElement("td");
// txt = document.createTextNode(musik.musik[i].Genre);
// td.appendChild(txt);
// tr.appendChild(td);
// table.appendChild(tr);
// }
}