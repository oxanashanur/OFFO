jQuery(document).ready(function($) {
  jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
  $('#slider-with-blocks-1').royalSlider({
    arrowsNav: true,
    arrowsNavAutoHide: false,
    fadeinLoadedSlide: false,
    controlNavigationSpacing: 0,
    controlNavigation: 'bullets',
    imageScaleMode: 'none',
    imageAlignCenter: false,
    blockLoop: true,
    loop: true,
    numImagesToPreload: 6,
    transitionType: 'fade',
    keyboardNavEnabled: true,
      autoPlay: {
     enabled: true,
      delay: 4000,
          stopAtAction: false,
      },
    block: {
      delay: 400,
    }
  });
});



jQuery(document).ready(function($) {
  var rsi = $('#slider-in-laptop').royalSlider({
    autoHeight: false,
    arrowsNav: false,
    fadeinLoadedSlide: false,
    controlNavigationSpacing: 0,
    controlNavigation: 'bullets',
    imageScaleMode: 'fill',
    imageAlignCenter: true,
    loop: false,
    loopRewind: false,
    numImagesToPreload: 6,
    keyboardNavEnabled: true,
    autoScaleSlider: true,  
    autoScaleSliderWidth: 486,     
    autoScaleSliderHeight: 864,

    imgWidth: 0,
    imgHeight: 0



  }).data('royalSlider');
  $('#slider-next').click(function() {
    rsi.next();
  });
  $('#slider-prev').click(function() {
    rsi.prev();
  });
});

