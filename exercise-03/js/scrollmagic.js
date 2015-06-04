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
        var duration = 3500;
        var duration2 = 2000;
        new ScrollMagic.Scene({triggerElement: "#svg-trigger",triggerHook: 'onLeave', duration: duration})
                        .setPin("#svg-pin")
                        // .addIndicators({name: "svg (duration: " + duration + ")"}) // add indicators (requires plugin)
                        .addTo(controller);

        // scroll scene adds a trigger for displaying svg groups
        new ScrollMagic.Scene({triggerElement: "#svg-trigger", triggerHook: 'onLeave', duration: duration2, offset: 2000})
                        .setClassToggle("#Highlights1", "display") // add class toggle
                        // .addIndicators({name: "Highlights 1 (duration: " + duration2 + ")"}) // add indicators (requires plugin)
                        .addTo(controller);

        // second pin
        new ScrollMagic.Scene({triggerElement: "#svg-trigger2",triggerHook: 'onLeave', duration: duration})
                        .setPin("#svg-pin2")
                        // .addIndicators({name: "svg 2 (duration: " + duration + ")"}) // add indicators (requires plugin)
                        .addTo(controller);

        // scroll scene adds a trigger for displaying svg groups
        new ScrollMagic.Scene({triggerElement: "#svg-trigger2", triggerHook: 'onLeave', duration: duration2, offset: 2000})
                        .setClassToggle("#Highlights2", "display") // add class toggle
                        // .addIndicators({name: "Highlights 2 (duration: " + duration2 + ")"}) // add indicators (requires plugin)
                        .addTo(controller);
        // third pin
        new ScrollMagic.Scene({triggerElement: "#svg-trigger3",triggerHook: 'onLeave', duration: duration})
                        .setPin("#svg-pin3")
                        // .addIndicators({name: "svg 3 (duration: " + duration + ")"}) // add indicators (requires plugin)
                        .addTo(controller);

        // scroll scene adds a trigger for displaying svg groups
        new ScrollMagic.Scene({triggerElement: "#svg-trigger3", triggerHook: 'onLeave', duration: duration2, offset: 2000})
                        .setClassToggle("#Highlights3", "display") // add class toggle
                        // .addIndicators({name: "Highlights 3 (duration: " + duration2 + ")"}) // add indicators (requires plugin)
                        .addTo(controller);
        // 4th pin
        new ScrollMagic.Scene({triggerElement: "#svg-trigger4",triggerHook: 'onLeave', duration: duration})
                        .setPin("#svg-pin4")
                        // .addIndicators({name: "svg 4 (duration: " + duration + ")"}) // add indicators (requires plugin)
                        .addTo(controller);

        // scroll scene adds a trigger for displaying svg groups
        new ScrollMagic.Scene({triggerElement: "#svg-trigger4", triggerHook: 'onLeave', duration: duration2, offset: 2000})
                        .setClassToggle("#Highlights4", "display") // add class toggle
                        // .addIndicators({name: "Highlights 4 (duration: " + duration2 + ")"}) // add indicators (requires plugin)
                        .addTo(controller);
        // 5th pin
        new ScrollMagic.Scene({triggerElement: "#svg-trigger5",triggerHook: 'onLeave', duration: duration})
                        .setPin("#svg-pin5")
                        // .addIndicators({name: "svg 5 (duration: " + duration + ")"}) // add indicators (requires plugin)
                        .addTo(controller);

        // scroll scene adds a trigger for displaying svg groups
        new ScrollMagic.Scene({triggerElement: "#svg-trigger5", triggerHook: 'onLeave', duration: duration2, offset: 2000})
                        .setClassToggle("#Highlights5", "display") // add class toggle
                        // .addIndicators({name: "Highlights 5 (duration: " + duration2 + ")"}) // add indicators (requires plugin)
                        .addTo(controller);
        // 6th pin
        new ScrollMagic.Scene({triggerElement: "#svg-trigger6",triggerHook: 'onLeave', duration: duration})
                        .setPin("#svg-pin6")
                        // .addIndicators({name: "svg 6 (duration: " + duration + ")"}) // add indicators (requires plugin)
                        .addTo(controller);

        // scroll scene adds a trigger for displaying svg groups
        new ScrollMagic.Scene({triggerElement: "#svg-trigger6", triggerHook: 'onLeave', duration: duration2, offset: 2000})
                        .setClassToggle("#Highlights6", "display") // add class toggle
                        // .addIndicators({name: "Highlights 6 (duration: " + duration2 + ")"}) // add indicators (requires plugin)
                        .addTo(controller);


    });
}(jQuery));

