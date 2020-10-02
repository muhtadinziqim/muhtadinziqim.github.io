
(function ($) {

    /*=================== CAROUSEL SLIDER  ===================*/
    // $('.carousel.carousel-slider').carousel({
    //     fullWidth: true
    // }, setTimeout(autoplay, 4500));

    // function autoplay() {
    //     $('.carousel').carousel('next');
    //     setTimeout(autoplay, 4500);
    // }

    /*=================== GALLERY FILTERING FUCTION  ===================*/
    $(".filter-button").on("click", function () {
        var value = $(this).attr('data-filter');

        if (value == "gallery-no-filter") {
            $('.gallery-img-box').removeClass("gallery-hidden");
        } else {
            $(".gallery-img-box").not('.' + value).addClass("gallery-hidden");
            $('.gallery-img-box').filter('.' + value).removeClass("gallery-hidden");

        }
    });

    $('.filter-gallery .filter-button').on("click", function () {
        $('.filter-gallery').find('.filter-button.active').removeClass('active');
        $(this).addClass('active');
    });

    /*=================== MAGNIFICPOPUP GALLERY  ===================*/
    $(".gallery-list").magnificPopup({
        type: "image",
        removalDelay: 300
    });

    // ======================= PROMO  ======================= // 
    if ($('#promo-item').length > 0) {
        $("#promo-item").owlCarousel({
            dots: false,
            loop: true,
            autoplay: true,
            slideSpeed: 2000,
            margin: 0,
            responsiveClass: true,
            nav: false,
            navText: ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
                "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                480: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    margin: 0
                }
            }

        });
    }

    // ======================= TESTIMONIAL  ======================= // 
    if ($('#testimonial-item').length > 0) {
        $("#testimonial-item").owlCarousel({
            dots: true,
            loop: true,
            autoplay: true,
            slideSpeed: 2000,
            margin: 0,
            responsiveClass: true,
            nav: false,
            navText: ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
                "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                480: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    margin: 0
                }
            }

        });
    }

    /*=================== FOOTER ===================*/
    $('#page-content').css('min-height', $(document).height() - ($('#header').height() + $(
        '.section.top-header-menu').height()) - $('#footer').height());

})(jQuery);

$("#btn-lainnya").click(function () {
    $('#menu-lainnya').toggleClass('active-dong')
    console.log("lalal");
});
$(".btn-close").click(function () {
    $('#menu-lainnya').toggleClass('active-dong')
    console.log("lalal");
});