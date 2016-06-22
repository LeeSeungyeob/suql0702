function wheel(){
    var wheel_h= $('.wheel').height();
    var timed = 1000;
    
    $("html, body").on('mousewheel DOMMouseScroll', function(e) {
        var E = e.originalEvent;
        var delta = E.deltaY;
        var win_index = $(this).index();
        var win_i = win_index - 1;
        var win_offset = $(this).offset().top;
        
        if (delta > 0) {
            $('html, body').stop().animate({'scrollTop': '+=' + wheel_h}, timed);
        } else {
            $('html, body').stop().animate({'scrollTop': '-=' + wheel_h}, timed);
        };
        
    });
};



function indicator(){
    $('.wheel').on('mouseenter', function(){
            var documehtH = $(document).height();
            var wheelLength =  $('.wheel').length;
            var win_index = $(this).index();
            var win_i = win_index - 3; 
            var indiLi = $(".indi").find('li');
            
            indiLi.find('div').remove()
            indiLi.children('a').stop().animate({'margin-top': 0});
            indiLi.children('a').css({'background-color' : '#cccccc'});
            indiLi.eq(win_i).children('a').stop().animate({'background-color' : '#ECF93E', 'margin-top':'2.2vw'}, function(){
                indiLi.eq(win_i).append('<div>').find('div').stop().addClass('cat_btn');
                
            });
        });
};

function topAdd(topAdd){
    topAdd.find('button').on('click', function(){
        topAdd.slideUp();
    });
};

