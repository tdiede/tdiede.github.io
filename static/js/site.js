"use strict";

$(document).ready(function() {
    $('#content').scrollTop(this).hash;
});

var canvas = document.getElementById('canvas-element');
var header = $('nav.navbar').offset().top;

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});