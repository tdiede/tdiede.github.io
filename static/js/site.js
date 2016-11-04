"use strict";



var portfolio = {};
var json = '../../data/projects.json';


function createPortfolio() {

    var response = $.getJSON(json);
    portfolio = response.responseJSON;
};

window.setTimeout(createPortfolio, 1000);


$(document).ready(function() {
    // $('.two').hide();
    // $('.one').show();
    $('#project-feature').hide();
    $('#feature-row-one').hide();
    $('#feature-row-two').hide();

});

// var canvas = document.getElementById('canvas-element');
// var header = $('nav.navbar').offset().top;


function getTitle() {
    var projectID = 1;
    var projects = portfolio.projects;

    var title = projects[projectID].title;
    console.log(title);
}



$('a.project-link').on('click', function(e) {

    var isRowOne = $( this ).hasClass('row-one');
    var isRowTwo = $( this ).hasClass('row-two');

    if ( isRowOne === true ) {
        console.log("feature row 1");
        $('#feature-row-two').hide();
        var projectID = 0;
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

