	$(document).ready(function(){
	
		var v = false;
		var $f, $m;

		$("button#Veg_On").click(function(){

			if (v == false){

				$f = $(".fish").parent().parent().detach();
				$(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");	
				$(".portobello").parent().parent().addClass("veg_leaf");
				$(".meat").after("<li class='tofu'><em>tofu</em></li>");
				$m = $(".meat").detach();
				$(".tofu").parent().parent().addClass("veg_leaf");
				v = true;
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
		

