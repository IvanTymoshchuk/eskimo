$(window).on("resize", function () {
    var maxH = 0;  
    $('.hmax').each(function(){
         
        $(this).css('height','auto');
         
        //console.log($(this).height());
        if ( $(this).height() > maxH ) {
            maxH = $(this).height();
        }
         
    });
     
    $('.hmax').height(maxH);
}).resize();
