"use strict";


var canvas = document.getElementById('canvas-element');
var header = $('nav.navbar').offset().top;

// $(document).ready(function() {

//     $('a.link-home').click(function () {
//         $.scrollTo('section.link-home');
//     });

//     $('a.link-projects').click(function () {
//         $.scrollTo('section.link-projects');
//     });

//     $('a.link-aboutme').click(function () {
//         $.scrollTo('section.link-aboutme');
//     });

//     $('a.link-contact').click(function () {
//         $.scrollTo('section.link-contact');
//     });
// });


$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});