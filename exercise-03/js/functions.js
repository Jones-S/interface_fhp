(function ($) { // iief = Immediately-Invoked Function Expression, mainly useful to limit scope
    $(function() { // Shorthand for $( document ).ready()

        // first way to check if mobile device
        if (/mobile/i.test(navigator.userAgent)) {
            $('.mobile-note').show();
        }
        // second way to check
        if ('ontouchstart' in window) {
            $('.mobile-note').show();
        }

    });
}(jQuery));