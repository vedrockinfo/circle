document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', function () {

        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

$(document).ready(function() {
    $("#news-slider").owlCarousel({
        autoplay:true,
            smartSpeed:300,
            margin: 0,
            loop:true,
            autoplayHoverPause:true,
            mouseDrag: false,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            responsive: {
                0 : {
                    items: 1
                },

                400 : {
                    items: 1
                },

                600 : {
                    items: 2
                },

                992 : {
                    items: 3
                }
            }
    });
});

$(document).ready(function() {
    $(".participiantFlag").owlCarousel({
        autoplay:true,
            smartSpeed:300,
            items:4,
            loop:true,
            autoplayHoverPause:true,
            mouseDrag: false,
            dots: true,
            nav: false,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            responsive: {
                0 : {
                    items: 1
                },

                400 : {
                    items: 1
                },

                600 : {
                    items: 2
                },

                992 : {
                    items: 3
                }
            }
    });
});

$(document).ready(function() {
    $(".alfaSlider").owlCarousel({
        autoplay:true,
            smartSpeed:300,
            loop:true,
            autoplayHoverPause:true,
            mouseDrag: false,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            responsive: {
                0 : {
                    items: 1
                },

                400 : {
                    items: 1
                },

                600 : {
                    items: 1
                },

                992 : {
                    items: 1
                }
            }
    });
});