  //   $( function() {
  //   $( "#dialogg" ).dialog({
  //     resizable: false,
  //     height: "auto",
  //     width: 400,
  //     modal: true,
  //     buttons: {
  //       "Letter": function() {
  //         window.location.href="lettermemorygame.html";
  //       },
  //       "Picture": function() {
  //         window.location.href="picturememorygame.html";
  //       }
  //     },
  //     width:50%
  //   });
  // } );
  $("#dialogg").dialog({
    
    autoOpen: true,
    buttons: {
    
        Letter: function() { 
    
            window.location.href="lettermemorygame.html";
        },
        Picture: function() { 
            
            
            window.location.href="picturememorygame.html";
        }
    
    },
    width: "100%",
    left: "0"
});

$("div[role=dialog] button:contains('Letter')").css("color", "#87CEEB");
$("div[role=dialog] button:contains('Picture')").css("color", "#cc99ff"); 


$("div[role=dialog] button:contains('Letter')").css("font-size", "2rem");
$("div[role=dialog] button:contains('Picture')").css("font-size", "2rem"); 

$("div[role=dialog] button:contains('Letter')").css("margin-left", "15%");
$("div[role=dialog] button:contains('Picture')").css("margin-left", "15%");

$("div[role=dialog] button:contains('Letter')").css("font-family", "Comic Sans MS");
$("div[role=dialog] button:contains('Picture')").css("font-family", "Comic Sans MS");