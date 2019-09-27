//on click to new game page
    $('#newGame').on('click', function(){
        event.preventDefault();
        console.log('this');
        location.href = '/newgame';
    });
