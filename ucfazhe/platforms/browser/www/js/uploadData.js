
	
function startDataUpload() {
	alert ("start data upload");
	var name = document.getElementById("name").value;
	var question = document.getElementById("question").value;
	var possibleAnswer1 = document.getElementById("possibleAnswer1").value;
	var possibleAnswer2 = document.getElementById("possibleAnswer2").value;
	var possibleAnswer3 = document.getElementById("possibleAnswer3").value;
	var possibleAnswer4 = document.getElementById("possibleAnswer4").value;
	var rightAnswer = document.getElementById("rightAnswer").value;
	alert(name + " "+ question + " "+possibleAnswer1);

	var postString = "name="+name +"&question="+question+"&possibleAnswer1="+possibleAnswer1+"&possibleAnswer2="+possibleAnswer2+"&possibleAnswer3="
	+possibleAnswer3+"&possibleAnswer4="+possibleAnswer4+"&rightAnswer="+rightAnswer;



// now get the geometry values
	var latitude = document.getElementById("latitude").value;
	var longitude = document.getElementById("longitude").value;
	postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;
	
	


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
