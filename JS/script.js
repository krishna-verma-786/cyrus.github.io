
jQuery(document).ready(function ($) {

    function sliders() {
        $('.home-slider--wrapper').slick({
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '.home-slider--nav .prev',
            nextArrow: '.home-slider--nav .next',
        });

    }

    $(function () {
        sliders();
    });

});

document.getElementById("toggleMe").addEventListener("click", toggleNav);
function toggleNav() {
    document.getElementById("NAV").classList.toggle('show');
    document.getElementById("toggleIcon").classList.toggle('fa-bars');
    document.getElementById("toggleIcon").classList.toggle('fa-xmark');
}



window.addEventListener("scroll", function () {
    // console.log("heoo");
    if (this.pageYOffset > 20) {
        document.querySelector('.header').classList.add("boxShadow");
    }
    else {
        document.querySelector('.header').classList.remove("boxShadow");
    }
});