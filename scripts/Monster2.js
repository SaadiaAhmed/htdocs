	$(document).ready(function(){

		var clix = [0,0,0,0];
		var int1, int2, int3;
		var Current_pos = clix[index];
	
		
		goLightening();

		window.onblur = stopLightening;

		window.onfocus = goLightening;

function goLightening(){

int1= setInterval( function() {
	lightning_one();}, 4000
	);

int2= setInterval( function() {
	lightning_two();}, 5000
	);

int3= setInterval( function() {
	lightning_three();}, 7000);

}

function stopLightening(){
	window.clearInterval(int1);
	window.clearInterval(int2);
	window.clearInterval(int3);
}

	function lightning_one(){
		$("#container #lightning1").fadeIn(250).fadeOut(250);
	};
	
	function lightning_two(){
		$("#container #lightning2").fadeIn("fast").fadeOut("fast");
	};
	
	function lightning_three(){
		$("#container #lightning3").fadeIn("fast").fadeOut("fast");
	};

	$("#head").click(function(){

			moveMe(0, this);
		
		} );

		$("#eyes").click(function(){

		moveMe(1, this);
		});

$("#nose").click(function(){

	moveMe(2, this);
		});


$("#mouth").click(function(){

	moveMe(3, this);
		});


		function moveMe(i,obj){
if (clix [i] < 9){
$(obj). animate({left:"-=367px"},500);
clix [i]+1;
}
else {
	clix [i] = 0;
$(obj). animate({left:"0px"},500);
}
		
	}

function getRandom(num) {
var Rand_num = Math.floor(Math.Random()*num);
return Rand_num 
}





	
	}); // end of document ready function 