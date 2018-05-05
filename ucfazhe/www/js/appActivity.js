
function menuClicked() {
			alert("You clicked the menu");
}

function replaceGraphs() {
	document.getElementById("graphdiv").innerHTML ="<img src='images/ucl.png'>"
}

	// load the map
 	var mymap = L.map('mapid').setView([51.505, -0.09], 13);
	// load the tiles
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);
	
//User click event to allow user click on ponits of map, and then give the lat & lon
// create a custom popup
	var popup = L.popup();

function onMapClick(e) {
		popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(mymap);
	}
	// now add the click event detector to the map
	mymap.on('click', onMapClick);
	
function startDataUpload() {
	alert ("start data upload");
	var name = document.getElementById("name").value;
	var question = document.getElementById("question").value;
	var possibleanswer1 = document.getElementById("possibleanswer1").value;
	var possiblenswer2 = document.getElementById("possibleanswer2").value;
	var possibleanswer3 = document.getElementById("possibleanswer3").value;
	var possibleanswer4 = document.getElementById("possibleanswer4").value;
	var rightanswer = document.getElementById("rightanswer").value;
	alert(name + " "+ question + " "+possibleAnswer1);

	var postString = "name="+name +"&question="+question+"&possibleanswer1="+possibleanswer1+"&possibleanswer2="+possibleanswer2+"&possibleanswer3="
	+possibleanswer3+"&possibleanswer4="+possibleanswer4+"&rightanswer="+rightanswer;



// now get the geometry values
	var latitude = document.getElementById("latitude").value;
	var longitude = document.getElementById("longitude").value;
	postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;
	
}
var client;
function processData(postString) {
	client = new XMLHttpRequest();
	client.open('POST','http://developer.cege.ucl.ac.uk:30271/uploadData',true);
	client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	client.onreadystatechange = dataUploaded;
	client.send(postString);
	}
// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
	if (client.readyState == 4) {
// change the DIV to show the response
		document.getElementById("dataUploadResult").innerHTML = client.responseText;
	}
}



	