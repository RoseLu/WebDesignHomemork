var front = true;


$(document).ready(function(){
    $("#dialogfront").dialog({
          create: function( event, ui ) { 
            $(this).dialog("widget").addClass("frontui").appendTo(".front");
          }
    });
    $("#dialogback").dialog({
          create: function( event, ui ) { 
            $(this).dialog("widget").addClass("backui").appendTo(".back");
          }
    });
    var top=0;
    var left =0;
  $('body').on('click','#flip',function(e){
    e.preventDefault();   
      if(front){
        top = $(".frontui").css("top"); left =$(".frontui").css("left");
      }
      else
      {
        top =$(".backui").css("top"); left=$(".backui").css("left");
      }
      $(".flip-container").css({top:top,left: left});
      $(".ui-dialog").css({top:0,left: 0});
    front =!front;
    $(".flip-container").toggleClass("flip");
    setTimeout(function(){
      $(".ui-dialog").css({top:top,left: left});
    $(".flip-container").css({top:0,left: 0});
    },600);
  });
  });