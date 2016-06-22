function video(){
    var music_list = $('.music_list').find('li');
    var musicBox = $('.music').find('iframe');
    
    music_list.on('click', function(e){
        e.preventDefault();
        var thisVideo = $(this).find('a').attr('href');
        musicBox.fadeIn(250).attr({'src': thisVideo});
    });
};

