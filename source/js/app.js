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

$("#mob_inn ul li a").click(function(e) {

    $('#mobmenu').removeClass('active');
    //console.log(this.className);

    if (this.className){
        e.preventDefault();
        // console.log('class yes');
        $('html, body').animate({
            scrollTop: $('#' + this.className).offset().top
        }, 1000);
    }

});

$("#menu-mobile-menu li").click(function(e) {

    if ($(this).hasClass( "sectionto" )){
        e.preventDefault();
        var test = $(this).find("a").attr('href').substr(1);
        $('#mobmenu').removeClass('active');
        $('html, body').animate({
                    scrollTop: $('#' + test).offset().top
                }, 1000);
            }

    // $('#mobmenu').removeClass('active');
    // console.log($(this).find("a").attr('href'));
    // if (this.className){
    //     e.preventDefault();
    //     // console.log('class yes');
    //     $('html, body').animate({
    //         scrollTop: $('#' + this.className).offset().top
    //     }, 1000);
    // }

});
$('.fbutt').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#section7").offset().top
    }, 1000);
});



