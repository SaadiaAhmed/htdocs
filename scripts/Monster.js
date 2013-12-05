	$(document).ready(function(){
	
		var headclix = 0;

		$("#head").click(function(){

			if(headclix > 9){

			headclix+=1;
			}
		else {
		headclix=0;	
		}
		} );
		
$("button#restore_Me").click(function(){

			if (v == true){

			$(".portobello").parent().parent().removeClass("veg_leaf");
			$(".portobello").replaceWith("<li class='hamburger'><em>hamburger</em></li>");
			$(".tofu").parent().parent().removeClass("veg_leaf");
			
			$(".menu_entrees li").first().before($f);
			$(".tofu").each(function (i){
				$(this).after($m[i]);
			});

			$(".tofu").remove();
			v = false;

				
			}

		} );
		


		});
		

