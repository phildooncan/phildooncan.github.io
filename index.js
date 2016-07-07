$("document").ready(function(){
  $("#icon1").on("mouseenter", function(){
    $("#icon1").addClass("highlight");
    $("a.link").show();
  });
  $("#icon1").on("mouseleave", function(){
    $("#icon1").removeClass("highlight");
    $("a.link").hide();
  });
});
$("document").ready(function(){
  $("documeny").tooltip();
});
