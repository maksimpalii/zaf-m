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
    }

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


$('#spis_1_h_inn').click(function () {
    // var twes05li2_ = TweenMax.to($('#spis_2 .goodsm'), 0.7, {"filter": "blur(5px)", "transform": "translateX(-100px) translateY(0px)", yoyo: false, repeat: 0, ease: Power2.easeIn});
    // var twes05li3_ = TweenMax.to($('#spis_3 .goodsm'), 0.7, {"filter": "blur(5px)", "transform": "translateX(-100px) translateY(0px)", yoyo: false, repeat: 0, ease: Power2.easeIn});
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

/* Click Butirat End */



$('.fbutt').click(function (event) {
    event.preventDefault();
    $('#scroll_down').addClass('hide');
    $('#section1').removeClass('active');
    $('#section7').addClass('active');
    canvasTimeline.plafirst.gotoAndStop('NL');
    sec7_inn.go();
    nav_menu(7);
});



