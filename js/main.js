jQuery(document).ready(function ($) {

    //// Header fixed and Back to top button
    //$(window).scroll(function () {
    //    if ($(this).scrollTop() > 100) {
    //        $('.back-to-top').fadeIn('slow');
    //        $('#header').addClass('header-fixed');
    //    } else {
    //        $('.back-to-top').fadeOut('slow');
    //        $('#header').removeClass('header-fixed');
    //    }
    //});

    //if ($(this).scrollTop() > 100) {
    //    $('.back-to-top').fadeIn('slow');
    //    $('#header').addClass('header-fixed');
    //}

    //$('.back-to-top').click(function () {
    //    $('html, body').animate({
    //        scrollTop: 0
    //    }, 1500, 'easeInOutExpo');
    //    return false;
    //});

    // Initiate the wowjs animation library
    new WOW().init();

    // //Initiate superfish on nav menu
    //$('.nav-menu').superfish({
    //    animation: {
    //        opacity: 'show'
    //    },
    //    speed: 400
    //});

    // Gallery - uses the magnific popup jQuery plugin
    $('.gallery-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

});
