(function ($) { // iief = Immediately-Invoked Function Expression, mainly useful to limit scope
    $(function() { // Shorthand for $( document ).ready()

        var scrollPosition;

        function onScroll(event){
            scrollPosition = $(document).scrollTop();       // distance to top from matched element
            // console.log("scrollPosition: " + scrollPosition);
            // if scrollposition != 0 (not on top) display different logo
            if(scrollPosition > 50){
                $('.logo').addClass("logo--mini");
                $('.fixed-nav-bar').removeClass("fixed-nav-bar--transparent");
            } else {
                $('.logo').removeClass("logo--mini");
                $('.fixed-nav-bar').addClass("fixed-nav-bar--transparent");
            }
        }

        //if click on menu

        $( ".show, .hide" ).click(function() {
            // get hash from url (e.g. #menu if menu is shown)
            var hash = window.location.hash;
            console.log("hash: " + hash);
            scrollPosition = $(document).scrollTop();
            console.log("scrollPosition: " + scrollPosition);
            if(hash == "#hidemenu" || hash == " ") {
                $('.fixed-nav-bar').removeClass("fixed-nav-bar--transparent");
                console.log("hash: " + hash + "= menu also zeig");

            } else if(hash == "#menu" && scrollPosition < 50) {
                $('.fixed-nav-bar').addClass("fixed-nav-bar--transparent");
                console.log("hash: " + hash + "!= menu also mach weg");
            }
        });

        $(document).on("scroll", onScroll);

    });
}(jQuery));