"use strict";


$(document).ready(function() {
    // $('.two').hide();
    // $('.one').show();
    $('#project-feature').hide();
    $('#feature-row-one').hide();
    $('#feature-row-two').hide();
});

// var canvas = document.getElementById('canvas-element');
// var header = $('nav.navbar').offset().top;



var projects = '../../data/projects.json';

var projectsJSON = $.getJSON(projects);

var text = {};
text = projectsJSON.responseText;
console.log(text);


$('a.project-link').on('click', function(e) {

    var isRowOne = $( this ).hasClass('row-one');
    var isRowTwo = $( this ).hasClass('row-two');

    if ( isRowOne === true ) {
        console.log("feature row 1");
        $('#feature-row-two').hide();
        $('#feature-row-one').show();
        $('#project-feature').appendTo('#feature-row-one');
        $('#project-feature').show();
    } else if ( isRowTwo === true ) {
        console.log("feature row 2");
        $('#feature-row-one').hide();
        $('#feature-row-two').show();
        $('#project-feature').appendTo('#feature-row-two');
        $('#project-feature').show();
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

    $('#project-photo-feature').attr('src', src);
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

