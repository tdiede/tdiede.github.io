"use strict";



var canvas = document.getElementById('canvas-element');

function scrollToElement() {
    element = $(selector);
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({
        scrollTop: offsetTop
    }, time);
}

$(document).ready(function() {

    var header = $('nav.navbar').offset().top;
    var $canvas = $('#canvas-element');

    $('a.link-home').click(function () {
        scrollToElement('body');
    });

    $('a.link-projects').click(function () {
        $('.link-projects').scrollTo(this).hash;
    });

    $('a.link-aboutme').click(function () {
        scrollToElement('.link-aboutme');
    });

    $('a.link-contact').click(function () {
        scrollToElement('.link-contact');
        // $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });

    $('.portfolio-link').hover(function() {
        if($(this).attr('href') == '#') {
            $(this).css('cursor','default');
        }
    });

    $('.portfolio-link').click(function() {
        if($(this).attr('href') == '#') {
            event.preventDefault();
        }
    });

    $('.portfolio-hover').click(function() {
            event.preventDefault();
    });

    var pos = $canvas.offset();
    var wndtop = $(this).scrollTop();
    var h = $(window).height();
    if(wndtop > h) {
      $canvas.fadeOut();
    }
    if(wndtop <= (h/2)) {
      $canvas.fadeIn();
    }
});
