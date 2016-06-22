function popupGallery(){
    var popupBtn = $('.popup_btn').find('li');
    var close = $('.close');
    var popup = $('.popup1');
    var galleryBox = $('img');
    
    popupBtn.on('click', function(e){
        e.preventDefault();
        var thisImg = $(this).find('a').attr('href')
        var thisNar = $(this).find('span').text();
        popup.fadeIn(250).find('img').attr({'src': thisImg, 'alt': thisNar});
    });
    
    close.on('click', function(){
        popup.fadeOut(250);
    });
    popup.on('click', function(){
       popup.fadeOut(250);
    });
};

