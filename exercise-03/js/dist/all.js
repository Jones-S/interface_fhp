(function ($) { // iief = Immediately-Invoked Function Expression, mainly useful to limit scope
    $(function() { // Shorthand for $( document ).ready()

        // init controller
        // var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 0}, addIndicators: true});
        var controller = new ScrollMagic.Controller();

        // build scenes
        // new ScrollMagic.Scene({triggerElement: "#sec1"})
        //                 .setClassToggle("#high1", "active") // add class toggle
        //                 .addIndicators() // add indicators (requires plugin)
        //                 .addTo(controller);
        // new ScrollMagic.Scene({triggerElement: "#sec2"})
        //                 .setClassToggle("#high2", "active") // add class toggle
        //                 .addIndicators() // add indicators (requires plugin)
        //                 .addTo(controller);
        // new ScrollMagic.Scene({triggerElement: "#sec3"})
        //                 .setClassToggle("#high3", "active") // add class toggle
        //                 .addIndicators() // add indicators (requires plugin)
        //                 .addTo(controller);

        // scroll scene pins svg for a certain time
        var duration = 4000;
        var duration2 = 2000;
        new ScrollMagic.Scene({triggerElement: "#svg-trigger",triggerHook: 'onLeave', duration: duration})
                        .setPin("#svg-pin")
                        .addIndicators({name: "svg (duration: " + duration + ")"}) // add indicators (requires plugin)
                        .addTo(controller);

        // scroll scene adds a trigger for displaying svg groups
        new ScrollMagic.Scene({triggerElement: "#svg-trigger", triggerHook: 'onLeave', duration: duration2, offset: 2000})
                        .setClassToggle("#red_marks circle", "display") // add class toggle
                        .addIndicators({name: "red marks (duration: " + duration2 + ")"}) // add indicators (requires plugin)
                        .addTo(controller);


    });
}(jQuery));


//# sourceMappingURL=maps/all.js.map