$(document).ready(function(){

 var FREQ = 10000;
 var repeat = true;

showFrequency();
//getXMLracers();

startAJAXcalls();
getDBRacers();


function showFrequency(){
$('#freq').html("Page Refreshes every "+ FREQ/1000 + "seconds ");
}

function startAJAXcalls(){
if(repeat){
setTimeout(function(){
getDBRacers();
//getXMLracers();
startAJAXcalls();
}, FREQ
);
}
  }
function getTimeAjax(){
    $("#updatedTime").load("http://localhost/PHP/time.php");
}

function getDBRacers(){

$.getJSON("http://localhost/PHP/service.php?action=getRunners", function(json) {



if(json.runners.length > 0){

$("#finishers_m").empty();
$("#finishers_f").empty();
$("#finishers_all").empty();

alert("json.runners.length");
$.each(json.runners,function(){
var info = '<li> Name: '+ $(this).find("fname").text() + ' '+ $(this).find("lname").text() + '. Time: '+ $(this).find("time").text() + '</li>';


if(this['gender']=='m'){
 $("#finishers_m").append(info);  
}

else if(this['gender'] =='f'){

$("#finishers_f").append(info);
}

else{}
 $("#finishers_all").append(info);   

});

}


});

getTimeAjax();
}   
//function getXMLracers(){


//$.ajax({
//url:"http://localhost/XML/runners.xml",
//cache:false,
//datatype:"xml",
//success: function(xml){
//$("#finishers_m").empty();
//$("#finishers_f").empty();
//$("#finishers_all").empty();

//$(xml).find("runner").each(function (){
    
// var info = '<li> Name: '+ $(this).find("fname").text() + ' '+ $(this).find("lname").text() + '. Time: '+ $(this).find("time").text() + '</li>';

 //if( $(this).find("gender").text() == "m" ){
 // $("#finishers_m").append(info);
    //}

  //else if( $(this).find("gender").text() == "f"){
  //  $("#finishers_f").append(info);
                                   // }
 //else{ }

 // $("#finishers_all").append(info);

 //   });

//getTimeAjax();
//showFrequency();
//getTime();
//}


//});

//}

$("#btnSave").click(function(){

 var Data = $("#addrunner:input").serializeArray();  

 $.post($("#addrunner").attr('action'), Data ,function (json){

if(json.status == "fail"){
  alert(json.message);  
}

if(json.status == "success"){
  alert(json.message); 
  clearInputs(); 
}
},
"json");

 });


function clearInputs(){
 $("#addrunner:input").each(function(){
    this.val('');
 });   

}


$("#addrunner").submit(function(){

    return false;
});



$("#Stop").click(function(){
    repeat = false;
$('#freq').html("UDATES paused");
});

$("#btnStart").click(function(){
 repeat = true;
  startAJAXcalls();
    showFrequency();
});


  

});