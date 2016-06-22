// slidebanner.js

function slidebanner(){
    var b_box = $('.bannerBox'),
        b_box_ul = b_box.children('ul'),
        b_box_li = b_box_ul.children('li'),
        b_box_li_width = b_box_li.width(),
        l_btn = $('.left'),
        r_btn = $('.right');
    //$('.bannerBox').find('li').last().prependTo('.bannerBox>ul');

    b_box_li.last().prependTo(b_box_ul);

    l_btn.on('click', function(){
        var b_li = b_box.find('li');
            b_li.first().stop().animate({'margin-left' : b_box_li_width}, function(){
            b_li.css({'margin-left' : 0});
            b_li.last().prependTo(b_box_ul);
         });
    });

    r_btn.on('click', function(){
        var r_li = b_box.find('li');
            r_li.first().stop().animate({'margin-left': -b_box_li_width}, function(){
            r_li.css({'margin-left': 0});
            r_li.first().appendTo(b_box_ul);
         });
    });

}// slidebanner