"use strict";
var preloader = (function () {
    var percentsTotal = 0;
    var preloader = $('.preloader');
    var imgPath = $('*').map(function (ndx, element) {
        var background = $(element).css('background-image');
        var isImg = $(element).is('img');
        var path = '';
        if (background != 'none') {
            path = background.replace('url("', '').replace('")', '');
        }
        if (isImg) {
            path = $(element).attr('src');
        }
        if (path) return path;
    });

    var setPercents = function (total, current) {
        var percents = Math.ceil(current / total * 100);

        $('.loading-value').text(percents + '%');
        $('.big.circle').css({'stroke-dasharray': percents * 1.57 + ' ' + '157'});

        if (percents >= 100) {
            preloader.fadeOut();
        }
    };

    var loadImages = function (images) {

        if (!images.length) preloader.fadeOut();

        images.forEach(function (img, i, images) {
            var fakeImage = $('<img>', {
                attr: {
                    src: img
                }
            });

            fakeImage.on('load error', function () {
                percentsTotal++;
                setPercents(images.length, percentsTotal);
            });
        });

    }
    return {
        init: function () {
            var imgs = imgPath.toArray();
            loadImages(imgs);
            //console.log(imgs);
        }
    }
}());

preloader.init();


$("#button_share").on("click",function(){
    var fbpopup = window.open("https://www.facebook.com/sharer/sharer.php?u=http://zafakol.thehost.top", "pop", "width=600, height=400, scrollbars=no");
    return false;
});

/*
$('#spis_1_h_inn').click(function () {
    $('#spis_2').velocity({opacity: 0}, {duration: 500, easing: 'easeInSine'});
    $('#spis_3').velocity({opacity: 0}, {
        duration: 500, easing: 'easeInSine', complete: function () {
            $('#spis_1_tx').fadeIn("slow");
        }
    });

});

$('#spis_1 .close').click(function () {
    $('#spis_1_tx').fadeOut("slow");
    $('#spis_2').velocity({opacity: 1}, {duration: 500, easing: 'easeInSine'});
    $('#spis_3').velocity({opacity: 1}, {duration: 500, easing: 'easeInSine'});
});

$('#spis_2_h_inn').click(function () {
    $('#spis_1').velocity({marginTop: -225, opacity: 0}, {duration: 500, easing: 'easeInSine'});
    $('#spis_3').velocity({opacity: 0}, {
        duration: 500, easing: 'easeInSine', complete: function () {
            $('#spis_2_tx').fadeIn("slow");
        }
    });

});

$('#spis_2 .close').click(function () {
    $('#spis_2_tx').fadeOut("slow");
    $('#spis_1').velocity({marginTop: 0, opacity: 1}, {duration: 500, easing: 'easeInSine'});
    $('#spis_3').velocity({opacity: 1}, {duration: 500, easing: 'easeInSine'});
});

$('#spis_3_h_inn').click(function () {
    $('#spis_1').velocity({marginTop: -365, opacity: 0}, {duration: 500, easing: 'easeInSine'});
    $('#spis_2').velocity({opacity: 0}, {
        duration: 500, easing: 'easeInSine', complete: function () {
            $('#spis_3_tx').fadeIn("slow");
        }
    });

});

$('#spis_3 .close').click(function () {
    $('#spis_3_tx').fadeOut("slow");
    $('#spis_1').velocity({marginTop: 0, opacity: 1}, {duration: 500, easing: 'easeInSine'});
    $('#spis_2').velocity({opacity: 1}, {duration: 500, easing: 'easeInSine'});

});

*/

$(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){

        //Expand or collapse this panel
        $(this).next().slideToggle('fast');

        //Hide the other panels
        $(".accordion-content").not($(this).next()).slideUp('fast');

    });
});
/* Click Butirat End */


$("#mobclose").click(function() {
    $('#mobmenu').removeClass('active');
});

$("#header_nav__burger").click(function() {
    $('#mobmenu').addClass('active');
});

$("#mob_inn ul li:first-child a").click(function(e) {
    e.preventDefault();
    $('#mobmenu').removeClass('active');
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 1000);
});
$("#mob_inn ul li:nth-child(2) a").click(function(e) {
    e.preventDefault();
    $('#mobmenu').removeClass('active');
    $('html, body').animate({
        scrollTop: $("#section3").offset().top
    }, 1000);
});

$("#mob_inn ul li:nth-child(3) a").click(function(e) {
    e.preventDefault();
    $('#mobmenu').removeClass('active');
    $('html, body').animate({
        scrollTop: $("#section4").offset().top
    }, 1000);
});


$("#mob_inn ul li:nth-child(4) a").click(function(e) {
    e.preventDefault();
    $('#mobmenu').removeClass('active');
    $('html, body').animate({
        scrollTop: $("#section5").offset().top
    }, 1000);
});


$("#mob_inn ul li:nth-child(5) a").click(function(e) {
    e.preventDefault();
    $('#mobmenu').removeClass('active');
    $('html, body').animate({
        scrollTop: $("#section6").offset().top -50
    }, 1000);
});

$("#mob_inn ul li:nth-child(7) a").click(function(e) {
    e.preventDefault();
    $('#mobmenu').removeClass('active');
    $('html, body').animate({
        scrollTop: $("#section7").offset().top
    }, 1000);
});

$('.fbutt').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#section7").offset().top
    }, 1000);
});



