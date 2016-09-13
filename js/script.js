// Function for smooth scrolling on the page, when a navigation link is clicked.
$(function () {
    $('a[href*="#"]:not([href="#"],[href^="#carousel"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var offset = 50;
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - offset
                }, 1000);
                return false;
            }
        }
    });
});

// Hide collapsed navbar's extended menu after a click.
$(document).ready(function () {
    $(".navbar-nav li a").click(function (event) {
        $(".collapse").collapse('hide');
    });
    $(".navbar-toggleable-xs a").click(function (event) {
        $(".collapse").collapse('hide');
    });
});
