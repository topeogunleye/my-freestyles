
// $("a").addClass("test");
// $("a").removeClass("test");

// $("a").on("click", function( event) {
//   event.preventDefault()
//   $( this ).hide( "slow" )
// })

$( "p" )
  .on( "mouseenter", function() {
    $( this ).css({
      "background-color": "yellow",
      "font-weight": "bolder"
    });
  })
  
  .on( "mouseleave", function() {
    var styles = {
      backgroundColor : "#ddd",
      fontWeight: ""
    };
    $( this ).css( styles );
  });