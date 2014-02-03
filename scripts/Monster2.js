	$(document).ready(function(){

		var w = 367;
		var m = 10;
		var clix = [0,0,0,0];
		var int1, int2, int3;
		//var headclix = 0;
		//var eyeclix = 0;
		//var noseclix = 0;
		//var mouthclix = 0;

		$("#btnRandom").click(randomize);
		$("#btnReset").click(reset);

		function getRandom(num){
			var my_random_num = Math.floor(Math.random()*num);
			return my_random_num;
		}

		function randomize(){
			$(".face").each(function(index){

			var target_pos = getRandom(m);
			var current_pos = clix[index];
			clix[index] = target_pos;

			if (target_pos > current_pos){
				var move_to =(target_pos - current_pos)*w;
				$(this).animate({left:"-="+move_to+"px"},500);
			} 

			else if(target_pos < current_pos){
				var move_to = ( current_pos - target_pos ) * w;
				$(this).animate({left:"+="+move_to+"px"},500);
			}

			else {
				// Do not do any thing
			}

			//var move_to = target_pos * w;
			//$(this).animate({left:"-="+move_to+"px"},500);

			});

		};

		function reset(){
			$(".face").each(function(index){
				clix[index] = 0;
			$(this).animate({left:"0px"},500);
			
				});
		}


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







	
	}); // end of document ready function 