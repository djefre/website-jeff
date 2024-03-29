// repeated variables
var $window = $(window);
var $root = $('html, body');
let p = document.getElementById("phoney-numbero-si")
let m = document.getElementById("mailey-addresso-no")
let a = document.getElementById("app-anchor-id")

$(document).ready(function () {
    "use strict";

    cleanUrl()
    runBotCheck()
    colorScheme()
    menuToggler()
    sliderOwlCarousel()
    swiperSlider()
    typedJS()
    skills()
    $('.owl-item.active .home-slide').addClass('zoom')
        
    // // Detect preferred theme and set theme to dark if user is a darkmode user
    // if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        //// Initiate dark mode hack
        //document.getElementById('darkmodebutton').click() 
        $("body").toggleClass('nill-dark')
        $('.section').toggleClass('bg-dark')
        $('.color-scheme').removeClass('d-none').addClass('d-inline-block')
        $(this).removeClass('d-inline-block').addClass('d-none')
    //}

    // // Sets the copyright year
    // document.getElementById('year').innerHTML = +(new Date()).getFullYear()

    // Setup phone with js
    p.innerHTML = '<a class="remove" href="#" style="padding:0;">[[Klik voor nummer]]</a>'
    m.innerHTML = '<a href="#" style="padding:0;">[[Klik voor email]]</a>'
    

    p.addEventListener('click', handlePhoneyClick)
    m.addEventListener('click', handleMailyClick)
    a.addEventListener('mouseover', handleAppHover)
});

$window.on("load", (function() {
    $("#overlayer").delay(500).fadeOut('slow');
    $(".loader").delay(1000).fadeOut('slow');
    pagePilling();
    // portfolioIsotop(); // USED FOR PORTFOLIO
}));

/*-----------------------------------------------------------------------------
                                   FUNCTIONS
-----------------------------------------------------------------------------*/
function cleanUrl() {
    window.history.replaceState({}, document.title, '/');
}

function runBotCheck() {
    window.navigator.permissions.query({ name: 'notifications' }).then(function (permissionStatus) {
        const isBot = (Notification.permission === 'denied' && permissionStatus.state === 'prompt')
        window.sessionStorage.setItem('isBot', isBot)
    });
}

function handlePhoneyClick(e){
    p.innerHTML = atob(`PGEgaHJlZj0idGVsOiszMTY1MzY2ODY5NyIgc3R5bGU9InBhZGRpbmc6MDsiPjA2IC0gNTMgNjYgODYgOTc8L2E+`)
    p.removeEventListener('click', handlePhoneyClick)
}

function handleMailyClick(){
    m.innerHTML = atob(`PGEgaHJlZj0ibWFpbHRvOmplZmZyZXlAYnJvY3guaW8iIHN0eWxlPSJwYWRkaW5nOjA7Ij5qZWZmcmV5QGJyb2N4LmlvPC9hPg==`)
    m.removeEventListener('click', handleMailyClick)
}

function handleAppHover(e) {
    a.setAttribute("href", atob('aHR0cHM6Ly93YS5tZS8zMTY1MzY2ODY5Nz90ZXh0PUhhbGxvK0plZmZyZXkhKy4uLg=='))
    a.removeEventListener('mouseover', handleAppHover)
}

/*-------------------------
       Page Pilling
-------------------------*/
function pagePilling(){
    "use strict";

    $('#pagepiling').pagepiling({
        sectionsColor: ['#fff', '#fff', '#fff', '#fff', /*'#fff','#fff', '#fff' ,'#fff' ,'#fff'*/],
        menu: '#myMenu',
        direction: 'vertical',
        verticalCentered: true,
        anchors: ['home', 'about', 'exp', /*'services', 'portfolio', 'testimonial', 'blog'*/],
        navigation: {
            'position': 'right',
            'tooltips': ['HOME', 'OVER MIJ', 'ERVARING', /*'SERVICES', 'PORTFOLIO', 'CLIENT', 'BLOG',*/]
        },
        loopBottom: true,
        loopTop: true,
        scrollingSpeed: 700,
        easing: 'swing',
        css3: true,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,

        //events
        afterRender: function() {},
        afterLoad: function(anchorLink, index) {}
    });
}


/*-------------------------
        Color Scheme
-------------------------*/
function colorScheme(){

    "use strict";

    var $darkLogo = $('.dark-logo');
    $('.color-scheme').click(function() {
        $("body").toggleClass('nill-dark');
        $('.section').toggleClass('bg-dark');
        $('.color-scheme').removeClass('d-none').addClass('d-inline-block');
        $(this).removeClass('d-inline-block').addClass('d-none');
    });
}
/*-------------------------
    MENU TOGGLER
-------------------------*/
function menuToggler() {

    "use strict";

    $(".overlay-menu-toggler").click(function(e){
        $(".overlay-menu").addClass("show");
    });
    $(".overlay-menu").click(function(e){
        if(e.target.style.padding === '0px' || e.target.className === 'epp') return // Filter personal
        $(this).removeClass("show");
    });

}

/*-----------------------------
      SLIDER OWL CAROUSEL
------------------------------*/
function sliderOwlCarousel(){
    "use strict";

    $('.home .owl-carousel').owlCarousel({
        loop:true,
        items: 1,
        nav: false,
        dots: false,
        autoplay:true,
        touchDrag: true,
        smartSpeed: 5000,
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
    });
    $('#home-slider').on("translate.owl.carousel", function(){
        setTimeout(function(){
            $('.home-slide').removeClass("zoom");
        }, 1000)
	});
	$('#home-slider').on("translated.owl.carousel", function(){
		$('.owl-item.active .home-slide').addClass("zoom");
    });
}

/*-----------------------------
     home SWIPER SLIDER
------------------------------*/
function swiperSlider(){

    "use strict";
    
    if($(".swiper-container").length){
        var swiper = new Swiper('.swiper-container', {
            effect: "slide",
            allowTouchMove: 'false',
            touchRatio: 0,
            threshold: 992,
            autoplay: {
                delay: 5000,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        
          var textSwiper = new Swiper('.text-swiper', {
            effect: "fade",
            allowTouchMove: 'false',
            touchRatio: 0,
            threshold: 992,
            autoplay: {
                delay: 5000,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        
        $(".home-item-image").css('background', function () {
            var bg = ('url(' + $(this).data("image-src") + ') no-repeat center');
            return bg;
        });
        var $fullscreen = $(".home-04, .home-swiper, .home-text, .home-images");
        $fullscreen.css("height", $window.height());
    }
}

/*-------------------------
        TYPED JS
-------------------------*/
function typedJS() {

    "use strict";

    var $element = $(".element");
    if($element.length){
        var options = {
            strings: $element.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000,
            backSpeed: 50,
            loop: true
        };
        var typed = new Typed(".element", options);
    }
}

/*-------------------------
            Skills
-------------------------*/
function skills() {

    "use strict";
    
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
}

/*-------------------------
            Count up
  -------------------------*/
// function countup() {

//     "use strict";

//     $('.timer').countTo();
//     $('.count-number').removeClass('timer');
// }

/*-------------------------
     MAGNIFIC POPUP JS
-------------------------*/
// function portfolioPopup() {

//     "use strict";

//     if (('.portfolio-items').length > 0) {
//         $('.portfolio-items').each(function() {
//             $(this).magnificPopup({
//                 delegate: '.js-zoom-gallery',
//                 type: 'image',
//                 gallery: {
//                     enabled:true
//                 },
//                 callbacks: {
//                     open: function() {
//                         $.fn.pagepiling.setKeyboardScrolling(false);
                      
//                     },
//                     close: function() {
//                         $.fn.pagepiling.setKeyboardScrolling(true);
//                     }
//                   }
//             });
//         });
//     }
// }

/*-------------------------
        ISOTOPE JS
-------------------------*/
// function portfolioIsotop() {

//     "use strict";

//     var $container = $('.portfolio-items');
//     var $filter = $('#portfolio-filter');
//     $container.isotope({
//         filter: '*',
//         layoutMode: 'masonry',
//         animationOptions: {
//             duration: 750,
//             easing: 'linear'
//         }
//     });
//     $filter.find('a').on("click",function() {
//         var selector = $(this).attr('data-filter');
//         $filter.find('a').removeClass('active');
//         $(this).addClass('active');
//         $container.isotope({
//             filter: selector,
//             animationOptions: {
//                 animationDuration: 750,
//                 easing: 'linear',
//                 queue: false,
//             }
//         });
//         return false;
//     });
// }

/*-------------------------
    Testimonial CAROUSEL JS
-------------------------*/
// $(".testimonial .owl-carousel").owlCarousel({
//     loop:true,
//     stagePadding:5,
//     margin: 10,
//     nav: true,
//     autoplay: false,
//     center: false,
//     dots: true,
//     mouseDrag: true,
//     touchDrag: true,
//     smartSpeed: 1000,
//     autoplayHoverPause: false,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//         },
//         600:{
//             items:1,
//         },
//         1200:{
//             margin:60,
//             items:2,
//         },

//     }
// });

/*-------------------------
          GOOGLE Map
  -------------------------*/
// function mapInit() {

//     "use strict";

//     if($('#my-map').length){
//         var options = {
//             center: new google.maps.LatLng(53.107819, 6.091030),
//             zoom: 9,
//             mapTypeControl: true,
//             gestureHandling: 'cooperative',
//             panControl: false,
//             zoomControl: true,
//             zoomControlOptions: {
//                 style: google.maps.ZoomControlStyle.DEFAULT,
//                 position: google.maps.ControlPosition.TOP_LEFT
//             },
//             scaleControl: false,
//             styles: [{
//                 "featureType": "water",
//                 "elementType": "geometry",
//                 "stylers": [{
//                     "color": "#576ee9"
//                 }, {
//                     "lightness": 17
//                 }]
//             }, {
//                 "featureType": "landscape",
//                 "elementType": "geometry",
//                 "stylers": [{
//                     "color": "#f5f5f5"
//                 }, {
//                     "lightness": 20
//                 }]
//             }, {
//                 "featureType": "road.highway",
//                 "elementType": "geometry.fill",
//                 "stylers": [{
//                     "color": "#ffffff"
//                 }, {
//                     "lightness": 17
//                 }]
//             }, {
//                 "featureType": "road.highway",
//                 "elementType": "geometry.stroke",
//                 "stylers": [{
//                     "color": "#ffffff"
//                 }, {
//                     "lightness": 29
//                 }, {
//                     "weight": 0.2
//                 }]
//             }, {
//                 "featureType": "road.arterial",
//                 "elementType": "geometry",
//                 "stylers": [{
//                     "color": "#ffffff"
//                 }, {
//                     "lightness": 18
//                 }]
//             }, {
//                 "featureType": "road.local",
//                 "elementType": "geometry",
//                 "stylers": [{
//                     "color": "#ffffff"
//                 }, {
//                     "lightness": 18
//                 }]
//             }, {
//                 "featureType": "poi",
//                 "elementType": "geometry",
//                 "stylers": [{
//                     "color": "#f5f5f5"
//                 }, {
//                     "lightness": 21
//                 }]
//             }, {
//                 "featureType": "poi.park",
//                 "elementType": "geometry",
//                 "stylers": [{
//                     "color": "#d5d5d5"
//                 }, {
//                     "lightness": 21
//                 }]
//             }, {
//                 "elementType": "labels.text.stroke",
//                 "stylers": [{
//                     "visibility": "on"
//                 }, {
//                     "color": "#f8f8f8"
//                 }, {
//                     "lightness": 25
//                 }]
//             }, {
//                 "elementType": "labels.text.fill",
//                 "stylers": [{
//                     "saturation": 36
//                 }, {
//                     "color": "#222222"
//                 }, {
//                     "lightness": 30
//                 }]
//             }, {
//                 "elementType": "labels.icon",
//                 "stylers": [{
//                     "visibility": "off"
//                 }]
//             }, {
//                 "featureType": "transit",
//                 "elementType": "geometry",
//                 "stylers": [{
//                     "color": "#f5f5f5"
//                 }, {
//                     "lightness": 19
//                 }]
//             }, {
//                 "featureType": "administrative",
//                 "elementType": "geometry.fill",
//                 "stylers": [{
//                     "color": "#fefefe"
//                 }, {
//                     "lightness": 10
//                 }]
//             }, {
//                 "featureType": "administrative",
//                 "elementType": "geometry.stroke",
//                 "stylers": [{
//                     "color": "#fefefe"
//                 }, {
//                     "lightness": 17
//                 }, {
//                     "weight": 1.2
//                 }]
//             }],
//         };
//         var map = new google.maps.Map(document.getElementById('my-map'), options);
//         var marker = new google.maps.Marker({
//             position: map.getCenter(),
//             title: "Headquarters",
//             icon: 'assets/img/pin.png',
//             animation: google.maps.Animation.BOUNCE
//         });
//         marker.setMap(map);
//     }
// }
