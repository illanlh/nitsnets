$(document).on('ready', function () {

    // DESKTOP
    if ($(window).width() >= 1346) {
        $(".slider-1").slick({
            prevArrow: false,
            centerMode: true,
            dots: false,
            arrows: true,
            infinite: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 3000,
            initialSlide: 1
        });
        $(".slider-2").slick({    
            prevArrow: false,            
            centerMode: false,
            slidesToShow: 5,
            dots: false,
            arrows: true,
            infinite: true,
            variableWidth: false,
            autoplay: true,
            autoplaySpeed: 3000
        });
        $(".slider-3").slick({
            prevArrow: false,
            centerMode: true,
            dots: false,
            arrows: true,
            infinite: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 3000,
            initialSlide: 1,
            widthConfig: 
            $(".slide-container__text").css({
                'width': ($(".slide-container__img-container").width() + 'px')
            })
        });
        $(".slider-4").slick({    
            prevArrow: false,            
            centerMode: false,
            slidesToShow: 5,
            dots: false,
            arrows: true,
            infinite: true,
            variableWidth: false,
            autoplay: false,
            autoplaySpeed: 3000
        });
        $(".slider-5").slick({
            prevArrow: false,
            centerMode: true,
            dots: false,
            arrows: true,
            infinite: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 3000,
            initialSlide: 1
        });
    }

    // MOBILE
    if ($(window).width() < 1346) {
        $(".slider-1").slick({
            prevArrow: false,
            centerMode: false,
            dots: false,
            arrows: true,
            infinite: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 3000,
            initialSlide: 0
        });
        $(".slider-2").slick({    
            prevArrow: false,            
            centerMode: false,
            slidesToShow: 2,
            dots: false,
            arrows: true,
            infinite: true,
            variableWidth: false,
            autoplay: true,
            autoplaySpeed: 3000
        });                
        $(".slider-3").slick({
            prevArrow: false,
            centerMode: false,
            dots: false,
            arrows: true,
            infinite: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 3000,
            initialSlide: 0,
            widthConfig: 
            $(".slide-container__text").css({
                'width': ($(".slide-container__img-container").width() + 'px')
            })
        });
        $(".slider-4").slick({    
            prevArrow: false,            
            centerMode: false,
            slidesToShow: 2,
            dots: false,
            arrows: true,
            infinite: true,
            variableWidth: false,
            autoplay: true,
            autoplaySpeed: 3000
        });
        $(".slider-5").slick({
            prevArrow: false,
            centerMode: false,
            dots: false,
            arrows: true,
            infinite: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 3000,
            initialSlide: 0
        });
    }
});

// CLICK EVENTS

// Toggle Footer mobile
const footerAccordions = document.querySelectorAll(".footer-button-mobile");
footerAccordions.forEach(function(button){
    button.addEventListener("click", displayAccordion);
});
function displayAccordion() {
    let contentAccordion = this.nextElementSibling;
    contentAccordion.classList.toggle('d-xs-block');
}

// Toggle Menu mobile
const buttonMenu = document.querySelector('#button-menu');
buttonMenu.addEventListener("click", displayMobileMenu);
function displayMobileMenu() {
    const html = document.querySelector('html');
    const mobileMenu = document.querySelector('#mobile-menu');
    
    mobileMenu.classList.toggle('d-xs-flex');
    html.classList.toggle('noscroll');

    const toggleButtons = document.querySelectorAll(".header-button:not(#button-menu), .search-button");
    toggleButtons.forEach(function(x){
        x.classList.toggle('d-xs-none');        
    });
}

// Toggle Like button
const buttonLikes = document.querySelectorAll(".slide-container__like-button");
buttonLikes.forEach(function(button){
    button.addEventListener("click", function(){
        button.classList.toggle("active");
    });
});

// Close promotion
const closeButton = document.querySelector('#promotion-div__button');
closeButton.addEventListener("click", function() {
    const promotionDiv = document.querySelector('#promotion-div');
    promotionDiv.classList.add('closing');
    setTimeout(function(){
        promotionDiv.classList.add('d-xs-none');
    }, 200);
});