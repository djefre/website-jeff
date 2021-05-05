// repeated variables
var $window = $(window);
var $root = $('html, body');

$(document).ready(function () {
    "use strict";

    colorScheme();
    menuToggler();
    sliderOwlCarousel();
    swiperSlider();
    typedJS();
    skills();
    // portfolioPopup(); // USED FOR PORTFOLIO
    // mapInit();
    validateEmail();
    $('.owl-item.active .hero-slide').addClass('zoom');
    
    // =======================================
    // OWN CODE
    //========================================
    
    // Detect preferred theme and set theme to dark if user is a darkmode user
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        //// Initiate dark mode hack
        //document.getElementById('darkmodebutton').click() 
        $("body").toggleClass('nill-dark');
        $('.section').toggleClass('bg-dark');
        $('.color-scheme').removeClass('d-none').addClass('d-inline-block');
        $(this).removeClass('d-inline-block').addClass('d-none');
    }

    setAge()
    setPizzaCounter()
    setExpCounter()

    // Handle form submission
    document.getElementById('submit-btn').addEventListener('click', ()=>{
        validateEmail();
        sendEmail()
    })

    // Sets the copyright year
    document.getElementById('year').innerHTML = +(new Date()).getFullYear()
    // =======================================
    // END OF OWN CODE
    //========================================


    // Theme code:
    countup();
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

/*-------------------------
       OWN FUNCTIONS
-------------------------*/
function setExpCounter(){
    let el = document.getElementById('expcounter')
    el.attributes['data-to'].value = (+(new Date()).getFullYear()) - 2015
}

function setPizzaCounter(){
    let base = (Math.round((new Date()).getTime() / 10e5 / 250))
    let el = document.getElementById('pizzacounter')
    el.attributes['data-to'].value = base
}

function setAge() {
    let currentYear = +(new Date()).getFullYear()
    let age = currentYear - 1986

    if(new Date() >= new Date(currentYear, 11, 14)){
        age++
    }

    document.getElementById('age').innerHTML = age
}

function sendAjaxRequest (method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
}
/*-------------------------
      END OF OWN FUNCTIONS
-------------------------*/


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
        anchors: ['hero', 'about', 'resume', 'contact'/*'services', 'portfolio', 'testimonial', 'blog'*/],
        navigation: {
            'position': 'right',
            'tooltips': ['HOME', 'OVER MIJ', 'ERVARING', /*'SERVICES', 'PORTFOLIO', 'CLIENT', 'BLOG',*/ 'CONTACT', 'FOOTER']
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

    $(".overlay-menu-toggler").click(function(){
        $(".overlay-menu").addClass("show");
    });
    $(".overlay-menu").click(function(){
        $(this).removeClass("show");
    });

}

/*-----------------------------
      SLIDER OWL CAROUSEL
------------------------------*/
function sliderOwlCarousel(){
    "use strict";

    $('.hero .owl-carousel').owlCarousel({
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
    $('#hero-slider').on("translate.owl.carousel", function(){
        setTimeout(function(){
            $('.hero-slide').removeClass("zoom");
        }, 1000)
	});
	$('#hero-slider').on("translated.owl.carousel", function(){
		$('.owl-item.active .hero-slide').addClass("zoom");
    });
}

/*-----------------------------
     HERO SWIPER SLIDER
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
        
        $(".hero-item-image").css('background', function () {
            var bg = ('url(' + $(this).data("image-src") + ') no-repeat center');
            return bg;
        });
        var $fullscreen = $(".hero-04, .hero-swiper, .hero-text, .hero-images");
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
function countup() {

    "use strict";

    $('.timer').countTo();
    $('.count-number').removeClass('timer');
}

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
/*-------------------------
     AJAX CONTACT FORM
-------------------------*/
function validateEmail(email) {

    "use strict";

    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function sendEmail() {

    "use strict";

    var email    = $('#email').val();
    var message = $('#comments').val();
    var data = new FormData(document.getElementById('contactForm'));

    if(!email){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Email is  required');
    } else if(!validateEmail(email)){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Email is not valid');
    }else if(!message){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Comments is  required');
    }else {
        let form = document.getElementById('contactForm')
        let data = new FormData(form);
        $('#submit-btn').html('Versturen...');
        sendAjaxRequest(
            form.method, 
            form.action, 
            data, 
            // On Success
            ()=>{
                // ON SUCCESS
                $('#submit-btn').html('Verstuurd!');
                setTimeout(()=>{
                    document.getElementById('email').value = '';
                    document.getElementById('comments').value = '';
                    document.getElementById('submit-btn').innerHTML = 'Verstuur'
                }, 5000)

                 $('#message').toast('show').addClass('bg-success').removeClass('bg-danger bg-warning');
                $('.toast-body').html('<strong>Aw yee!</strong> Bedankt het bericht is succesvol verstuurd!');
            },
            // On Error
            ()=>{
                // ON REJECT
                $('#submit-btn').html('Verstuur');
                $('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
                $('.toast-body').html('<strong> Error : </strong> Er is iets verkeerd gegaan, probeer het nog een opnieuw.');
            });

        // $.ajax({
        //     type: 'POST',
        //     data: $("#contactForm").serialize(),
        //     url:  "sendEmail.php",
        //     beforeSend: function() {
        //         $('#submit-btn').html('<span class="spinner-border spinner-border-sm"></span> Loading..');
        //     },
        //     success: function(data) {

                
        //     },
        //     error: function(xhr) {

                
        //     },
        // });
    }
}