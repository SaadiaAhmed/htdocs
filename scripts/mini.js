
<script>
				$("document"). ready(function(){
						
					$(".guess_box"). click(CheckForCode);
						
						function CheckForCode(){
							var my_num = Math.floor((Math.random()*5) +5);
							var discount_msg = "<p>Your Discount is " + my_num + "%</p>";
						//alert (discount_msg);
							$(this).append(discount_msg);
							
							$(".guess_box"). each(function(){
								$(this).unbind('click');
							})
							
						
						});// end of click function
						
				});//end ready function

					
				function getRandom(Num){
					var my_num=Math.floor((Math.random()*Num) +5);
					return my_num;
				}

				function hideCode(){
					var numRand=getRandom(4);
					$.(".guess_box").each(function(index,value){
						if(numRand==index){
							$(this).append("<span id='has_discount'></span>");
							return false;
						}

				}


</script>