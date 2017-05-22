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
  $('#tori').click(function(){
     $("#tori").removeClass('rubberBand');
     $("#tori").addClass('bounce');
     $("#tori").delay(1500).queue(function() {
       $(this).removeClass('bounce').dequeue();
     });
  });
});
//load event
$(window).on("load", function(){
  $(".animated").addClass('rubberBand');
});
$(document).ready(function() {
  $(".animsition").animsition({
    inClass               :   'fade-in',
    outClass              :   'fade-out',
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   '.animsition-link',
    loading               :    true,
    loadingParentElement  :   'body',
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    overlay               :   false,
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });
});
