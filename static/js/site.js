"use strict";


var canvas = document.getElementById('canvas-element');

$(document).ready(function() {

    var header = $('nav.navbar').offset().top;

    $('a.link-home').click(function () {
        $.scrollTo('section.link-home');
    });

    $('a.link-projects').click(function () {
        $.scrollTo('section.link-projects');
    });

    $('a.link-aboutme').click(function () {
        $.scrollTo('section.link-aboutme');
    });

    $('a.link-contact').click(function () {
        $.scrollTo('section.link-contact');
    });
});
