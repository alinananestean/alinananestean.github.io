$(document).foundation();

$( document ).ready(function() {

    $(document).on("scroll", function () {
        if
        ($(document).scrollTop() > 60) {
            $("header").addClass("smaller");
            $('body').addClass("scroll-padding");

        }
        else {
            $("header").removeClass("smaller");
            $('body').removeClass("scroll-padding");
        }
    });
});