	$("document").ready(function(){

	//window.onload = function(){

		initPage();

	//} 
});


	 function initPage(){

	

	 	thumbs = document.getElementById("thumbnailPane").getElementsByTagName("img");
	

	 	for(i=0; i<thumbs.length; i++){

	 		image = thumbs[i];


 		image.onclick = function (){
 			 

 			detailURL = 'images/' + this.title + '-detail.jpg';


 			document.getElementById("itemDetail").src = detailURL;

 			//getDetails(this.title);
 	}
	 	}

	
	 		

 }


function createRequest(){

		try {
				request = new XMLHTTPRequest();
			}
catch(tryMS){

			try{
				request = new ActiveXObject("Msxml2.XMLHTTP");
				}
catch(otherMS){
			try{
				request = new ActiveXObject("Microsoft.XMLHTTP");
				}
catch(failed){
				request = null;
			}
		}
	}

}


function getDetails(itemName){

request = createRequest();

	if (request == null){

		alert("unable to create request");
		return;
	}

var url = "getDetails.php?ImageID="	+ escape(itemName);

request.open("GET", url, true);
request.onreadystatechange = diplayDetails;
request.send(null);

}