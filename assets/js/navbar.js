var Layout = function () {
    // detect mobile device
    var isMobileDevice = function() {
        return  ((
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
            navigator.userAgent.match(/Opera Mini/i) ||
            navigator.userAgent.match(/IEMobile/i)
        ) ? true : false);
    }

    var NavbarOnScroll = function() {
        if ($(window).scrollTop() > 60) {
            $(".navbar-theme").addClass("scroll");
        } else {
            $(".navbar-theme").removeClass("scroll");
        }
    }

    return {
        init: function () {
            // initial setup for fixed header
            NavbarOnScroll();
            // handle minimized header on page scroll
            $(window).scroll(function() {
                NavbarOnScroll();
            });
        },

    };
}();

$(document).ready(function() {
    Layout.init();
});