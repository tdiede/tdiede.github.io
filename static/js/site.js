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





function submitProjectData (e) {
    e.preventDefault();
    console.log(this);
    console.log(this.href);
    var projectName = this.data('project');
    console.log(projectName);
    var src = '/static/img/features/'+projectName+'.png';
    console.log(src);
    $('#project-photo-feature').attr('src', src);
    // $('#data-card-id').attr('data-card', result.card_id);
}

$('#data-project').on('click', submitProjectData);
