

				$("document"). ready(function(){

					$("#btn1").click function(){

					$("#header").addClass("hover");
					$("#header").removeClass("no_hover");	
					}

					$("#btn2").click function(){

					
					$("#header").removeClass("no_hover");
					$("#header").addClass("hover");	
					}

						$("document"). ready(function(){
					$(".guess_box").click(CheckForCode);
					
					function getRandom(Num){
					var my_num=Math.floor((Math.random()*Num) +5);
					return my_num;
				}


				var hideCode = function (){

					var numRand = getRandom(4);
					$(".guess_box").each(function(index,value){
						if(numRand==index){
							$(this).append("<span id='has_discount'></span>");
							return false;
						}

					});
				}

					hideCode();	

					function CheckForCode(){
					var Discount;
					if ($.contains(this, document.getElementById("has_discount")))
					{
					var my_num=getRandom(5); 
					discount="<p>Your Discount is " + my_num + "%</p>";
					}
					else {
					discount="<p>No Discount rt now " + my_num + "%</p>";	
					}
					$(this).append(discount);
								
								$(".guess_box"). each(function(){
									$(this).unbind('click');
					});

				}

			});	

				

			


