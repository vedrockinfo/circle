(function($) {

	"use strict";

    $(document).ready(function() {
        $('.nav li a[href^="#"]').on('click', function(event) {
            $('.nav li').removeClass('current');
            $(this).parent().addClass('current');
            var target = $(this.hash);
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - $('#navbar').outerHeight()
                }, 1);
            }
        });
    });
    


    // Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize     = height - $(window).scrollTop();
                var doParallax = -(resize/5);
                var positionValue   = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover"
                });
            });
        }
    }


    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }); 


    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function() {
                //active wow
                wow.init();

                if ($(".home-style-four .hero-title").length) {
                    var heroTitle = $(".home-style-four .hero-title");
                    heroTitle.addClass("active-hero-title");
                }

                if ($(".home-style-five .main-banar .banar-title").length) {
                    var heroTitle = $(".home-style-five .main-banar .banar-title");
                    heroTitle.addClass("active-banar-title");
                }
            });
        }
    }


    /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/
    $(window).on("scroll", function() {
        var header = $("#header");
        var mainNavigation = $("#main-navigation");
        var scroll = $(window).scrollTop();
        var top = $(".top-bar").innerHeight();

        if ((scroll > top) && !header.hasClass("header-style-three")) {
            mainNavigation.addClass("sticky");
        } else {
            mainNavigation.removeClass("sticky");
        }
    });

    if ($(".header-style-three").length) {
        $(window).on("scroll", function() {
            var mainNavigation = $("#main-navigation");
            var scroll = $(window).scrollTop();
            var top = $(".topbar").innerHeight();

            if (scroll > top) {
                mainNavigation.addClass("sticky");
            } else {
                mainNavigation.removeClass("sticky");
            }
        });        
    }


    /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/  
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title'         : this.title,
                helpers     : {  
                    title : { type : 'inside' },
                    media : {}
                },

                beforeShow : function(){
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });    
    }


    /*------------------------------------------
        = LATEST CAUSES PROGRESS BAR
    -------------------------------------------*/
    function causesProgressBar() {
        if ($(".progress-bar").length) {
            var $progress_bar = $('.progress-bar');
            $progress_bar.appear();
            $(document.body).on('appear', '.progress-bar', function() {
                var current_item = $(this);
                if (!current_item.hasClass('appeared')) {
                    var percent = current_item.data('percent');
                    current_item.append('<span>' + percent + '%' + '</span>').css('width', percent + '%').addClass('appeared');
                }
                
            });
        };
    }

    causesProgressBar();


    /*------------------------------------------
        = FUNCTION FORM SORTING GALLERY
    -------------------------------------------*/
    function sortingGallery() {
        if ($(".sortable-gallery .gallery-filters").length) {
            var $container = $('.gallery-container');
            $container.isotope({
                filter:'*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });

            $(".gallery-filters li a").on("click", function() {
                $('.gallery-filters li .current').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter:selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }
    }

    sortingGallery();


    /*------------------------------------------
        = ACTIVE GALLERY POPUP IMAGE
    -------------------------------------------*/  
    if ($(".popup-gallery").length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',

            gallery: {
              enabled: true
            },

            zoom: {
                enabled: true,

                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });    
    }


    /*------------------------------------------
        = HOME STYLE FIVE IMPORTANT CAUSES METER
    -------------------------------------------*/
    if ($(".meter3").length) {
        var $meter = $('.meter3');
        $meter.appear();
        $(document.body).on('appear', '.meter3', function() {
            var current_item = $(this);
            if (!current_item.hasClass('appeared')) {
                current_item.addClass('appeared');
                $(".meter3").circleProgress({
                    size: 125,
                    thickness: 7,
                    fill: "#fff",
                    emptyFill: "transparent",
                    lineCap: "round",
                    animation: {
                         duration: 2000
                    }
                }).on('circle-animation-progress', function(event, progress, stepValue) {
                    var $this = $(this);
                    $this.find('span').html(Math.round(100 * stepValue) + '<i>%</i>');
                });
            }                
        });
    }


    /*------------------------------------------
        = FUNFACT
    -------------------------------------------*/  
    if ($(".fun-fact").length) {
        $('.counter').appear();
        $(document.body).on('appear', '.counter', function(e) {
            var $this = $(this),
            countTo = $this.attr('data-count');

            $({ countNum: $this.text()}).animate({
                countNum: countTo
            }, {
                duration: 3000,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }   


    /*------------------------------------------
        = TESTIMONIAL SLIDER
    -------------------------------------------*/
    if ($(".testimonials-slider").length) {
        $(".testimonials-slider").owlCarousel({
            autoplay:true,
            smartSpeed:300,
            items:2,
            loop:true,
            margin: 30,
            responsive: {
                0 : {
                    items: 1
                },

                991 : {
                    items: 1
                },

                992 : {
                    items: 2
                }
            }
        });
    }


    /*------------------------------------------
        = PARTNER SLIDER
    -------------------------------------------*/
    if ($(".partner-slider").length) {
        $(".partner-slider").owlCarousel({
            autoplay:true,
            smartSpeed:300,
            items:4,
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
                    items: 2
                },

                600 : {
                    items: 3
                },

                992 : {
                    items: 4
                }
            }
        });
    }


    /*-------------------------------------------------------
        = HOME STYLE FIVE URGENT CAUSES CLOCK, PROGRESS ETC
    -------------------------------------------------------*/
    if ($("#causes-end-time").length) {
        $('#causes-end-time').countdown('2017/04/31', function(event) {
            var $this = $(this).html(event.strftime(''
            + '<div class="box"><div>%D</div> <span>Days</span> </div>'
            + '<div class="box"><div>%H</div> <span>Hours</span> </div>'
            + '<div class="box"><div>%M</div> <span>Mins</span> </div>'
            + '<div class="box"><div>%S</div> <span>Secs</span> </div>'));
        });
    }

    function urgentCausesProgressBar() {
        if ($(".urgent-causes .progress-bar").length) {
            var progressBar = $(".urgent-causes .progress-bar");
            var percent = progressBar.data('percent');
            progressBar.css('width', percent + '%');
                
        };
    }


    // Toggle urgent causes section
    if ($(".urgent-causes-wrapper").length) {
        var urgentCauses = $(".urgent-causes-wrapper .urgent-causes");
        var urgentCausesOpnBtn = $(".urgent-causes-wrapper #toggle-causes");

        urgentCauses.hide();

        urgentCausesOpnBtn.on("click", function() {
            urgentCauses.slideToggle();
            urgentCausesProgressBar();
            urgentCausesOpnBtn.toggleClass("open");
            return false;
        })
    }  


    /*------------------------------------------
        = EVENT S2 SLIDER
    -------------------------------------------*/
    if ($(".event-s2-slider").length) {
        $(".event-s2-slider").owlCarousel({
            items:2,
            loop:true,
            autoplayHoverPause:true,
            mouseDrag: false,
            responsive: {
                0 : {
                    items: 1
                },

                551 : {
                    items: 2
                }
            }
        });
    }


    /*------------------------------------------------------
        = GOOGLE MAP FOR HOME STYLE FIVE ABOUT AREA
    ----------------------------------------------------*/  
    if ($(".map-link").length) {
        $('.map-link').magnificPopup({
            type: 'iframe'
        }); 
    }


    /*----------------------------------------------------
        = HOME STYLE FIVE ABOUT ACCRODIAN TOGGLE CALSS
    --------------------------------------------------------*/  
    if ($(".about-st3 #accordion").length) {
        var panelHeading = $(".about-st3 #accordion .panel-heading > a");
        
        panelHeading.on("click", function() {
            var $this = $(this);
            if (!$this.closest(".panel").hasClass("current")) {
                $this.closest(".panel").addClass("current");
            } else {
                 $this.closest(".panel").removeClass("current");
            }
            
            $this.closest(".panel").siblings().removeClass("current");
        });
    }


    /*------------------------------------------
        = MASONRY GALLERY SETTING
    -------------------------------------------*/
    function masonryGridSetting() {
        if ($('.masonry-gallery').length) {
            var $grid =  $('.masonry-gallery').masonry({
                itemSelector: '.box',
                columnWidth: '.box',
                percentPosition: true
            });

            $grid.imagesLoaded().progress( function() {
                $grid.masonry('layout');
            });
        }
    }

    masonryGridSetting();    



    /*==========================================================================
        WHEN DOCUMENT LOADING 
    ==========================================================================*/
        $(window).on('load', function() {

            preloader();

            bgParallax();

            causesProgressBar();

            sortingGallery();

            masonryGridSetting();

        });


    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {

        activeMenuItem();

        bgParallax();

    });

})(window.jQuery);



$(document).ready(function() {
    $("#news-slider").owlCarousel({
        autoplay:true,
            smartSpeed:300,
            items:4,
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

$(".events-nearby-slider").owlCarousel({
    autoplay:true,
    smartSpeed:300,
    loop:true,
    autoplayHoverPause:true,
    responsive: {
        0 : {
            items: 1
        },

        600 : {
            items: 1
        },

        991 : {
            items: 1
        },

        992 : {
            items: 2
        }
    }
});

$(document).ready(function () {
    $("#dpDown").click(function () {
        $("#dpList").toggleClass("d-block")
    })
})

$(document).ready(function(){
    $(".open-btn").click(function(){
        $("#navbar").css("right", "0");
    });
    $(".close-navbar").click(function(){
        $("#navbar").css("right", "-300px");
    });
});
