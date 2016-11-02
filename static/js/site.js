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






function showFeature (result) {
    console.log(result);
    $('#project-photo-feature').attr('src', result);
}

function submitProjectData (e) {
    e.preventDefault();
    var project = this;
    console.log(project['project-data']);
    var projectName = $('#data-project').data().project;
    console.log(projectName);
    var src = '/static/img/features/'+projectName+'.png';
    console.log(src);
    $.get(src, showFeature);
    // $('#data-card-id').attr('data-card', result.card_id);
}

$('.project-link').on('click', submitProjectData);
