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

    // Play youtube video
    function youtubeShowVideo() {
        let videoButton, youtube;
        videoButton = document.getElementsByClassName("youtube");
        for (let i = 0; i < videoButton.length; i++) {
            youtube = videoButton[i];
            youtube.onclick = function() {
                let iframe = document.createElement("iframe");
                iframe.setAttribute(
                    "src",
                    "https://www.youtube.com/embed/" +
                    this.id +
                    "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1"
                );
                iframe.setAttribute('allow', 'autoplay');
                iframe.style.width = this.style.width;
                iframe.style.height = this.style.height;
                this.parentNode.replaceChild(iframe, this);
            };
        }
    }
    youtubeShowVideo();

    function onPlayerReady(event) {
        event.target.playVideo();
    }

    $(".youtube").click(function(e) {
        e.preventDefault();

        let player;

        function onYouTubeIframeAPIReady(id) {
            player = new YT.Player(id, {
                videoId: id,
                events: {
                    onReady: onPlayerReady,
                },
            });
        }
        const _this = $(this);
        const idYoutube = _this.attr("id");

        onYouTubeIframeAPIReady(idYoutube);
    });

    let tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Test. Select answer options
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

    // Longread slider
    $('.longread-slider').slick({
        infinite: true,
        dots: true,
        customPaging: function(slider, i) {
            return '<button type="button" data-role="none" role="button" tabindex="0"><img src="img/longread-slider-photo-sm-' + (i + 1) + '.jpg" srcset="img/longread-slider-photo-sm-' + (i + 1) + '@2x.jpg" class="photo-image"></button>';
        },
        appendDots: $('.longread__slider-box'),
        appendArrows: $('.longread__slider-box'),
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/longread-slider-arrow-l.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/longread-slider-arrow-r.svg" alt=""></button>',
        responsive: [{
            breakpoint: 1023,
            settings: {
                arrows: false
            }
        }]
    });

    // Copy referal-link to clipboard
    $('.partner-product__copy-link').on('click', function() {
        let element = $("<input>");

        element.val($('.partner-product__referal-link').text());
        $("body").append(element);
        element.select();

        document.execCommand("copy");
        element.remove();
    });
});