$(document).ready(function() {
    // Toggle header dropdown
    $('.dropdown-toggle').on('click', function(e) {
        e.preventDefault();
        $('.profile').toggleClass('active');
    });

    // Toggle mobile menu
    $('.js-toggle-menu').on('click', function(e) {
        $(this).toggleClass('active');
        $('.header__inner, .header-mobile').toggleClass('active');
        $('body').toggleClass('locked');
    });

    $(window).resize(function() {
        if ($(window).outerWidth() > '768') {
            $('body').removeClass('locked');
            $('.js-toggle-menu, .header__inner, .header-mobile').removeClass('active');
        }
    });

    // Select answer options
    $('.answer-option__checkbox').on('click', function() {
        $('.answer-option').removeClass('selected').addClass('disabled');
        $(this).parent().removeClass('disabled').addClass('selected');
    });

    // Articles slider
    $('.articles-slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: $('.articles__slider-arrows'),
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/slider-arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/slider-arrow-right.svg" alt=""></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    // Copy referal-link to clipboard
    $('.partner-product__copy-link').on('click', function() {
        var element = $("<input>");

        element.val($('.partner-product__referal-link').text());
        $("body").append(element);
        element.select();

        document.execCommand("copy");
        element.remove();
    });
});