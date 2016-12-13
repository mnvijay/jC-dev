$(document).ready(function(){
   			$('section').verticalDotNav({
   				align : "right"
   			});   
    
     $(function() {
                    $.scrollify({
                        section : ".sections",
                        sectionName : "section1",
                        interstitialSection : "",
                        easing: "easeOutExpo",
                        scrollSpeed: 1100,
                        offset : 0,
                        scrollbars: false,
                        standardScrollElements: "",
                        setHeights: true,
                        overflowScroll: true,
                        updateHash: true,
                        before:function() {},
                        after:function() {},
                        afterResize:function() {},
                        afterRender:function() {}
                    });
                });
    
    
 		});