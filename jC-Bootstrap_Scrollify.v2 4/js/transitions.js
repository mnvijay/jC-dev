$(document).ready(function(){
    

    
    $( "#a2" ).click(function() {
  
        
        $("h3.section2Header,p.section2p").fadeOut(500, function() {
        $('h3.section2Header').text(function(){
            var txt = "<b>Artists</b> out there JamCulture gets it all covered";
            return txt;
        }).fadeIn(500);
        $('p.section2p').text('This is a place to discover and be discovered by artists around you. Exhibit yourself and start exploring your opportunities here.').fadeIn(500);
    });
        
        
});
    
});
   			