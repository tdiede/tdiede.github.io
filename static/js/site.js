"use strict";

var portfolio = {};
var projects;

var json = '../../data/projects.json';
var response = $.getJSON(json);

function createPortfolio() {
    portfolio = response.responseJSON;
    projects = portfolio.master;
};


$(document).ajaxSuccess(function() {
    // alert("It's loaded!");
    createPortfolio();
});



$(document).ready(function() {
    // $('.two').hide();
    // $('.one').show();
    $('#project-feature').hide();
    $('#feature-row-one').hide();
    $('#feature-row-two').hide();

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
        $('#project-feature').appendTo('#project-goes-here-one');
        $('#project-feature').show();
    } else if ( isRowTwo === true ) {
        console.log("feature row 2");
        $('#feature-row-one').hide();
        $('#feature-row-two').show();
        $('#project-feature').appendTo('#project-goes-here-two');
        $('#project-feature').show();
    }

    var projectName = $( this ).data( "project" );
    var src = '/static/img/features/'+projectName+'.png';
    $('#project-photo-feature').attr('src', src);

    var id = parseInt( $( this ).data( "num" ) );

    var currentCaption = projects[id].image1Caption;
    $('#project-caption-feature').html(currentCaption);

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
    $('#project-date-partners').html(date + " | " + partners);
    $('#project-description').html(description);
    $('#project-techstack').html("<p>tech stack | <h4>" + techstack + "</h4></p>");
    $('#project-apis').html("<p>APIs | <h4>" + apis + "</h4></p>");
    $('#project-github').html("<p><span><i class='fa fa-github' aria-hidden='true'></i></span> review my code: </p><a href='" + github + "' target='_blank'>" + github + "</a>");
    $('#project-deployed').html("<p><span><i class='fa fa-user' aria-hidden='true'></i></span> try it out: </p><a href='" + deployed + "' target='_blank'>" + deployed + "</a>");

    var photoCount = projects[id].count;
    var sidebarPhotos = "";
    for ( var i=0; i < photoCount; i++ ) {
        var number = i.toString();
        var sidebar = '/static/img/sidebar/'+number+'_'+projectName+'_200.png';
        sidebarPhotos += "<img class='project-photo-sidebar' id='sidebar-photo-"+number+"' src='" + sidebar + "'></img><br><br>";
    }

    console.log(sidebarPhotos);

    $('#sidebar-photos').html(sidebarPhotos);

});

$('img.project-photo-sidebar').on('click', function(e) {
    var srcFeature = $('#project-photo-feature').attr('src');
    var srcNew = $( this ).attr('src');
    $('#project-photo-feature').attr('src', srcNew);
    $( this ).attr('src', srcFeature);
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

