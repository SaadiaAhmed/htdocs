$(document).ready(function(){

 var map;

function initialize(){

var latlng = new google.maps.latlng.(41.0483940,-73.5358710);

var mapOpts = {
zoom: 13,
center: latlng,
mapTypeId: google.maps.MapTypeId.HYBRID;
};

map = new google.mapsMap(document.getElementById(______________), mapOpts);

}

});