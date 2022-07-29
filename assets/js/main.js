/* Preloader Js
===================*/
jQuery(window).on("load", function () {
  $('.preloade').fadeOut(500);
});

jQuery( document ).ready(function( $ ) {
"use strict"
    /*Sticky js
     =================*/
     $("#sticker").sticky({topSpacing:0});

     /*WoW js Active
     =================*/
    new WOW().init({
        mobile: true,
    });

    /*goolge map
     =================*/
    function initialize() {
      var mapOptions = {
      zoom: 8,
      scrollwheel: false,
      center: new google.maps.LatLng(40.7127837, -74.00594130000002),
      styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},
        {"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},
        {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},
        {"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},
        {"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},
        {"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},
        {"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},
        {"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},
        {"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},
        {"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},
        {"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},
        {"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},
        {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},
        {"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
        {"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},
        {"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},
        {"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},
        {"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
      };
      var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);
    }
    if( $('#map').length ){
      google.maps.event.addDomListener(window, 'load', initialize);
    }
    
      
});
