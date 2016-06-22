function characterGallery(){
    var faceBtn = $('.character').find('li');
    var face = $('.face');
    var name = $('.name');
    var part = $('.part');
    var explain = $('.explain');
    
    var faceBox = $('img');
    var nameBox = $('.name').find('p');
    var partBox = $('.part').find('p');
    var explainBox = $('.explain').find('p');
    
    
    faceBtn.on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        var thisImg = $this.find('a').attr('href');
        var thisNar = $this.find('span').text();
        var thisName = $this.find('.catName').text();
        var thisPart = $this.find('.catPart').text();
        var thisEx = $(this).find('.catEx').text();
        
        face.fadeIn(250).find(faceBox).attr({'src': thisImg, 'alt': thisNar});
        name.fadeIn(250).find(nameBox).text(thisName);
        part.fadeIn(250).find(partBox).text(thisPart);
        explain.fadeIn(250).find(explainBox).text(thisEx);
        
    });
};

