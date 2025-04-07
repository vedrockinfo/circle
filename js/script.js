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