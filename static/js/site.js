"use strict";


$(document).ready(function() {
    $('html, body').stop().animate({
            scrollTop: $('#content').offset().top
        }, 1000);
    console.log();
});

var canvas = document.getElementById('canvas-element');
var header = $('nav.navbar').offset().top;

canvas.hide();

$('a[href^="#"]').on('click', function(event) {
    canvas.show();
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});