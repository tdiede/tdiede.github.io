"use strict";


$(document).ready(function() {
    $('html, body').stop().animate({
            scrollTop: $('#home').offset().top
        }, 1000);
    console.log();
    $('#two').hide();
    $('#show').show();
});

// var canvas = document.getElementById('canvas-element');
// var header = $('nav.navbar').offset().top;

$('a[href^="#"]').on('click', function(e) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


$('#one').on('click', function(e) {
    $('#one').hide();
    $('#two').show();
});

$('#two').on('click', function(e) {
    $('#two').hide();
    $('#show').show();
});
