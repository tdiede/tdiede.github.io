"use strict";


$(document).ready(function() {
    // $('.two').hide();
    // $('.one').show();
    $('#project-feature-row-one').hide();
    $('#project-feature-row-two').hide();
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


$('row-one.project-link').on('click', function(e) {
    var projectName = $( this ).data( "project" );
    var src = '/static/img/features/'+projectName+'.png';

    $('#project-feature-row-two').hide();
    $('#project-feature-row-one').show();
    $('#project-photo-feature').attr('src', src);
});

$('row-two.project-link').on('click', function(e) {
    var projectName = $( this ).data( "project" );
    var src = '/static/img/features/'+projectName+'.png';

    $('#project-feature-row-one').hide();
    $('#project-feature-row-two').show();
    $('#project-photo-feature').attr('src', src);
});