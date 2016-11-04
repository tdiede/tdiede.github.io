"use strict";


$(document).ready(function() {
    // $('.two').hide();
    // $('.one').show();
    $('#project-feature-row-one').hide();
    $('#project-feature-row-two').hide();
});

// var canvas = document.getElementById('canvas-element');
// var header = $('nav.navbar').offset().top;




$('.project-link-one').on('click', function(e) {
    var projectName = $( this ).data( "project" );
    var title = $( this ).data( "title" );
    var date = $( this ).data( "date" );
    var description = $( this ).data( "description" );
    var techstack = $( this ).data( "techstack" );
    var apis = $( this ).data( "apis" );
    var github = $( this ).data( "github" );
    var deployed = $( this ).data( "deployed")
    var partners = $( this ).data( "partners" );

    var src = '/static/img/features/'+projectName+'.png';

    $('#project-feature-row-two').hide();
    $('#project-feature-row-one').show();
    $('#project-photo-feature-1').attr('src', src);
    $('#project-title-1').html(title);
    $('#project-date-1').html(date);
    $('#project-description-1').html(description);
    $('#project-techstack-1').html(techstack);
    $('#project-apis-1').html(apis);
    $('#project-github-1').html(github);
    $('#project-deployed-1').html(deployed);
    $('#project-partners-1').html(partners);
});

$('.project-link-two').on('click', function(e) {
    var projectName = $( this ).data( "project" );
    var title = $( this ).data( "title" );
    var date = $( this ).data( "date" );
    var description = $( this ).data( "description" );
    var techstack = $( this ).data( "techstack" );
    var apis = $( this ).data( "apis" );
    var github = $( this ).data( "github" );
    var deployed = $( this ).data( "deployed")
    var partners = $( this ).data( "partners" );

    var src = '/static/img/features/'+projectName+'.png';

    $('#project-feature-row-one').hide();
    $('#project-feature-row-two').show();
    $('#project-photo-feature-2').attr('src', src);
    $('#project-title-2').html(title);
    $('#project-date-2').html(date);
    $('#project-description-2').html(description);
    $('#project-techstack-2').html(techstack);
    $('#project-apis-2').html(apis);
    $('#project-github-2').html(github);
    $('#project-deployed-2').html(deployed);
    $('#project-partners-2').html(partners);
});




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

