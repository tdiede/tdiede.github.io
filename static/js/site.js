"use strict";


var portfolio = {};
var projects = [];
var json = '../../data/projects.json';
var response = $.getJSON(json);


function createPortfolio() {
    portfolio = response.responseJSON;
    projects = portfolio.master;
};


$(document).ready(function() {
    // $('.two').hide();
    // $('.one').show();
    $('#project-feature').hide();
    $('#feature-row-one').hide();
    $('#feature-row-two').hide();

    createPortfolio();

});

// var canvas = document.getElementById('canvas-element');
// var header = $('nav.navbar').offset().top;


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

    $.get(this, updateFeatureProject);

});


function updateFeatureProject(result) {

    var projectName = $( this ).data( "project" );
    var src = '/static/img/features/'+projectName+'.png';
    $('#project-photo-feature').attr('src', src);

    var projectID = $( this ).data( "projectID" );
    var id = parseInt(projectID);

    var title = projects[id].title;
    var date = projects[id].date;
    var description = projects[id].description;
    var techstack = projects[id].techstack;
    var apis = projects[id].apis;
    var github = projects[id].github;
    var deployed = projects[id].deployed;
    var partners = projects[id].partners;
    var image1URL = projects[id].image1URL;
    var image1Caption = projects[id].image1Caption;

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
}




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

