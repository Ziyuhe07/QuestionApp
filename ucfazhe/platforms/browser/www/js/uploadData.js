function startDataUpload() {
	alert ("start data upload");
	var name = document.getElementById("name").value;
	var question = document.getElementById("question").value;
	var answera = document.getElementById("answera").value;
	var answerb = document.getElementById("answerb").value;
	var answerc = document.getElementById("answerc").value;
	var answerd = document.getElementById("answerd").value;
	alert(name + " "+ question + " "+answera);

	var postString = "name="+name +"&question="+question+"&answera="+answera+"&answerb="+answerb+"&answerc="+answerc+"&answerd="+answerd;



// now get the geometry values
	var latitude = document.getElementById("latitude").value;
	var longitude = document.getElementById("longitude").value;
	postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;
	
	
	


// Use radio to allow user chose the right answer

		if (document.getElementById("answera").checked) {
			postString=postString+"&ranswer=answera";
 		}
		if (document.getElementById("answerb").checked) {
 		 	postString=postString+"&ranswer=answerb";
		}
		if (document.getElementById("answerc").checked) {
 		 	postString=postString+"&ranswer=answerc";
		}
		if (document.getElementById("answerd").checked) {
 		 	postString=postString+"&ranswer=answerd";
		}
	
	processData(postString);
	
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

