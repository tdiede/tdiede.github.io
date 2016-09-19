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
    });
});
