//append tori
$(function(){
  var tori =emojione.toImage(':chicken:');
  tori = $.parseHTML(tori);
  $(tori).addClass('animated');
  $(tori).attr('id','tori');
  $("#emoji").append(tori);
});
//click tori
$(function(){
  // $('#tori').click(function(){
  //   $("#tori").removeClass('rubberBand');
  //   $("#tori").addClass('bounceOutUp');
  //   console.log('click tori');
  //   $('.box-tori').fadeIn(1000);
  //   $('.box-karaage').fadeOut(1000);
  // });
});
//load event
$(window).on("load", function(){
  $("#main").show();
  $(".spinner").fadeOut("1000");
  $(".animated").addClass('rubberBand');
});
