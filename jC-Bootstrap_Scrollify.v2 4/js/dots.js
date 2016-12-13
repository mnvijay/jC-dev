$(document).ready(function(){
   		
    
    // wait for document ready
							// build scene
							var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
        duration: 800,  // the scene should last for a scroll distance of 100px
        offset: 10      // start this scene after scrolling for 50px
    })
    .setPin("#phone1") // pins the element for the the scene's duration
    .addTo(controller) 
    .addIndicators();
    
 		});
     
    