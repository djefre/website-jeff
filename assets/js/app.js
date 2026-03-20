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
    typedJS()
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
    $("#overlayer").delay(200).fadeOut('slow');
    $(".loader").delay(400).fadeOut('slow');
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
        sectionsColor: ['#222', '#222', '#222', '#222'],
        menu: '#myMenu',
        direction: 'vertical',
        verticalCentered: true,
        anchors: ['home', 'about', 'exp', /*'services', 'portfolio', 'testimonial', 'blog'*/],
        navigation: {
            'position': 'right',
            'tooltips': ['HOME', 'OVER MIJ', 'ERVARING', /*'SERVICES', 'PORTFOLIO', 'CLIENT', 'BLOG',*/]
        },
        loopBottom: false,
        loopTop: false,
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
        var isDark = $("body").hasClass('nill-dark');
        var bgColor = isDark ? '#222' : '#fff';
        $('html').css('background-color', bgColor);
        $('.pp-section').css('background-color', bgColor);
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


