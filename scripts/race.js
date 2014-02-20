$(document).ready(function(){

 var FREQ = 10000;
 var repeat = true;

function showFrequency(){
$('#freq').html("Page Refreshes every "+ FREQ/1000 + "seconds ");
}

function startAJAXcalls(){
if(repeat){
setTimeout(function(){
getXMLracers();
startAJAXcalls();
}, FREQ);
}
  }
   

function getXMLracers(){


$.ajax({
url:"http://localhost/XML/runners.xml",
cache:false,
datatype:"xml",
success: function(xml){
$("#finishers_m").empty();
$("#finishers_f").empty();
$("#finishers_all").empty();

$(xml).find("runner").each(function (){
    
 var info = '<li> Name: '+ $(this).find("fname").text() + ' '+ $(this).find("lname").text() + '. Time: '+ $(this).find("time").text() + '</li>';

 if( $(this).find("gender").text() == "m" ){
  $("#finishers_m").append(info);
    }

  else if( $(this).find("gender").text() == "f"){
    $("#finishers_f").append(info);
                                    }
 else{ }

  $("#finishers_all").append(info);

    });

getTimeAjax();
//showFrequency();
//getTime();
}


});

}

function getTimeAjax(){
    $("#updatedTime").load("http://localhost/PHP/time.php");
}


$("#Stop").click(function(){
    repeat = false;
$('#freq').html("UDATES paused");
});

$("#btnStart").click(function(){
 repeat = true;
  startAJAXcalls();
    showFrequency();
});


  
showFrequency();
getXMLracers();
startAJAXcalls();

});