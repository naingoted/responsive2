jQuery(document).ready(function() {

  jQuery('.jcarousel')
    .on('jcarousel:create jcarousel:reload', function() {
        var element = $(this),
            width = element.innerWidth();

        // This shows 1 item at a time.
        // Divide `width` to the number of items you want to display,
        // eg. `width = width / 3` to display 3 items at a time.
        element.jcarousel('items').css('width', width + 'px');
    })
    .jcarousel({
      animation: 'fast',
      transitions: true
  });

  jQuery('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });

  jQuery('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });
/*  jQuery('.bxslider').bxSlider({

  });*/
    // jQuery("#head").load("header.html"); 
    // jQuery("#foot").load("footer.html");

    var $content = $('#content');
    $('#toc a')
        .click(function() {
            $content.attr('src', $(this).attr('href'));
            return false;
        });
    
});

$(function(){
  
  $("#head").load("header.html");
  $("#foot").load("footer.html");
});

$(function() {
    var $content = $('#content');
    $('#toc a')
        .click(function() {
            $content.attr('src', $(this).attr('href'));
            return false;
        });
});