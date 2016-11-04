"use strict";


$(document).ready(function() {
    // $('.two').hide();
    // $('.one').show();
    $('#project-feature').hide();
});

// var canvas = document.getElementById('canvas-element');
// var header = $('nav.navbar').offset().top;






$('a.project-link').on('click', function(e) {

    var isRowOne = $( this ).hasClass('row-one');
    var isRowTwo = $( this ).hasClass('row-two');

    if ( isRowOne === true ) {
        console.log("feature");
        $('#project-feature').appendTo('#feature-one');
        $('#project-feature').show();
    } else if ( isRowTwo === true ) {
        // $('#project-feature-row-one').hide();
        // $('#project-feature-row-two').show();
    }

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


    $('#project-photo').attr('src', src);
    $('#project-title').html(title);
    $('#project-date').html(date);
    $('#project-description').html(description);
    $('#project-techstack').html(techstack);
    $('#project-apis').html(apis);
    $('#project-github').html(github);
    $('#project-github').attr('href', github);
    $('#project-deployed').html(deployed);
    $('#project-deployed').attr('href', deployed);
    $('#project-partners').html(partners);
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

