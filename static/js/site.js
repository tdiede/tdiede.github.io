"use strict";


function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 1000;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
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
        scrollToElement('.link-projects');
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

    $('.foliolink').click(function() {
        if($(this).attr('href') == '#') {
            event.preventDefault();
        }
    });

    $('.foliohover').click(function() {
            event.preventDefault();
    });

    $(window).bind('scroll', function(){

      if($(window).scrollTop() > header ) { // next

            $('nav.main').fadeOut(function() {
                $('nav.main').addClass("sticky");
                $('nav.sticky').removeClass("main");
            });


      } else { // home

            $('nav.sticky').addClass("main");
            $('nav.main').removeClass("sticky");
            $('nav.main').slideDown();

      }

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
});
