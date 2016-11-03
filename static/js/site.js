"use strict";


$(document).ready(function() {
    // $('.two').hide();
    // $('.one').show();
    $('#project-feature').hide();
});

// var canvas = document.getElementById('canvas-element');
// var header = $('nav.navbar').offset().top;

$('a[href^="#"]').on('click', function(e) {
    var target = $(this.getAttribute('href'));
    if ( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


// $('.one').on('click', function(e) {
//     $('.one').hide();
//     $('.two').show();
// });

// $('.two').on('click', function(e) {
//     $('.two').hide();
//     $('.one').show();
// });




// var currentFeature;


$('.project-link').on('click', function(e) {
    var projectName = $( this ).data( "project" );
    var src = '/static/img/features/'+projectName+'.png';

    $('#project-feature').show();
    $('#project-photo-feature').attr('src', src);
});
