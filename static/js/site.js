"use strict";


$(document).ready(function() {
    // $('html, body').stop().animate({
    //         scrollTop: $('#home').offset().top
    //     }, 1000);
    // console.log();
    $('.two').hide();
    $('.one').show();
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


$('.one').on('click', function(e) {
    $('.one').hide();
    $('.two').show();
});

$('.two').on('click', function(e) {
    $('.two').hide();
    $('.one').show();
});



$('div#feature').data( 'link', { 'one': 'hackscrapers',
                                         'two': 'movies',
                                         'three': 'pavilion',
                                         'four': 'parametric',
                                         'five': 'velib' } );

    var data = $(this).data( 'link' );
    $( 'span#three' ).text( $( 'div#feature' ).data( 'link' ).three );
    $( 'span#four' ).text( $( 'div#feature' ).data( 'link' ).four );
    console.log(data);




// a[href^="#"]
$('.project-link').on('click', function(e) {
    var link = $(this.getAttribute('id'));
    var hh = $(this.getAttribute('href'));
    var projectName = $( this ).data( "project" );
    console.log(link);
    console.log(hh);
    console.log(projectName);
    var src = '/static/img/features/'+projectName+'.png';
    // if( target.length ) {
    //     event.preventDefault();
    //     console.log(target);
    //     
    //     console.log(src);
    $('#project-photo-feature').attr('src', src);
    // }
});
