(function ($) { // iief = Immediately-Invoked Function Expression, mainly useful to limit scope
    $(function() { // Shorthand for $( document ).ready()

        function onScroll(event){
            var scrollPosition = $(document).scrollTop();       // distance to top from matched element
            console.log("scrollPosition: " + scrollPosition);
            // if scrollposition != 0 (not on top) display different logo
            if(scrollPosition > 50){
                $('.logo').addClass("logo--mini");
                $('.fixed-nav-bar').removeClass("fixed-nav-bar--transparent");
            } else {
                $('.logo').removeClass("logo--mini");
                $('.fixed-nav-bar').addClass("fixed-nav-bar--transparent");
            }
        }

        $(document).on("scroll", onScroll);

    });
}(jQuery));