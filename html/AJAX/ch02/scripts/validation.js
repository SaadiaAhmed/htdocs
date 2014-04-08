

window.onload = initPage;

	function initPage(){
	
		document.getElementById('username').onblur = checkUserName;
}


function checkUserName(){
	request = createRequest();
	if(request == null){
		alert("Unable to create request");
	} else {
		var theName = document.getElementById('username').value;
		var username=escape(theName);
		alert("the name:" +theName );
		var url = "checkName.php?username=" +username;
		request.onreadystatechange = showUserNameStaus;
		request.open("GET", url , true);
		alert("URL:" +url );
		request.send(null);
		}
}

function showUserNameStaus(){
	alert("showUserNameStaus()");
	}
