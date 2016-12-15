$(document).ready(function(){ // wait for document ready
		// init
							var controller = new ScrollMagic.Controller();

							// define movement of panels
							var wipeAnimation = new TimelineMax()
								// animate to second panel
								.to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
								.to("#slideContainer", 1,   {x: "-20%"})	// move in to first panel
								.to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
								// animate to third panel
								.to("#slideContainer", 0.5, {z: -150, delay: 1})
								.to("#slideContainer", 1,   {x: "-40%"})
								.to("#slideContainer", 0.5, {z: 0})
								// animate to forth panel
								.to("#slideContainer", 0.5, {z: -150, delay: 1})
								.to("#slideContainer", 1,   {x: "-60%"})
								.to("#slideContainer", 0.5, {z: 0})
                                // animate to fifth panel
                                .to("#slideContainer", 0.5, {z: -150, delay: 1})
								.to("#slideContainer", 1,   {x: "-80%"})
								.to("#slideContainer", 0.5, {z: 0});

							// create scene to pin and link animation
							new ScrollMagic.Scene({
									triggerElement: "#pinContainer",
									triggerHook: "onLeave",
									duration: "500%"
								})
								.setPin("#pinContainer")
								.setTween(wipeAnimation)
								.addIndicators() // add indicators (requires plugin)
								.addTo(controller);
    
    new ScrollMagic.Scene({
        duration: 6000,  // the scene should last for a scroll distance of 100px
               // start this scene after scrolling for 50px
    })
    .setPin("#phone1") // pins the element for the the scene's duration
    .addIndicators()
    .addTo(controller); 
    
    new ScrollMagic.Scene({
        duration: 6000,  // the scene should last for a scroll distance of 100px
               // start this scene after scrolling for 50px
    })
    .setPin("#smallPhone3") // pins the element for the the scene's duration
    .addIndicators()
    .addTo(controller);
    
    new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"1000"})
					.setClassToggle("#phone1", "artists") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
    
    new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"2000"})
					.setClassToggle("#smallPhone3", "bands") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
    	
	// build tween
	var tween = new TimelineMax()
		.to("#smallPhone3", 1, {x: "+=110"});
		
                new ScrollMagic.Scene({triggerHook: 'onEnter',offset:"2700"})
                    .setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
    
    
    
    
	});