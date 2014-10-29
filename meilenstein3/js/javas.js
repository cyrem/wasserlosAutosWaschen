function go(){
	alert("gg");
	var div=document.getElementById("test");

	var table= document.createElement("table");

	var tr=document.createElement("tr");

	var td1=document.createElement("td");
	var td2=document.createElement("td");

	//var txt=document.createTextNode("TEST123");

	div.appendChild(table);
	table.appendChild(tr);
	tr.appendChild(td1);
	tr.appendChild(td2);
	var txt = document.createTextNode("Dies ist ein Absatz");
	td1.appendChild(txt);
	//td1.appendChild(txt);
}