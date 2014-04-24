window.onload = initpage;

function initpage(){

	var images = document.getElementById('schedulePane').getElementsByTagName('img');

		for(var i=0; i<images.length; i++){

			var currentImage = images[i]; 	

			currentImage.onmouseover = showHint;
			currentImage.onmouseout = hideHint;

			if(currentImage.className="Tab"){
					currentImage.onClick = 	showTab;
		}
	}
}

function showHint(){

	alert("show hint message");
}

function hideHint(){

	alert("hide hint message");
}