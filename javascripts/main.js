$(function () {

    let article = $('#top-article')
    console.log(article)

    let button = $('button')
    console.log(button.html())

    let mainArticles = $('.article--main')
    mainArticles.each(function (arrayIndex, currentElement) {
        console.log('Array Element', arrayIndex, $(currentElement).html())
    })
    let umbrella = $("h1[umbrella='open']")
    console.log(umbrella.html())

    let allChildren = $('.container').children()
    console.log(allChildren)

    //Childern of container that are H1
    console.log($('.container').children('h1'));

    //Children of letters id that are children with class letter, 2 index element
    console.log($('#letters').children('.letter').eq(2).html())

    console.log($('.album').parents('.song-container').attr('index'))

    $.ajax({
        url: 'javascripts/songs.json'
    }).done(functionIWantJQueryToExecute)

    function functionIWantJQueryToExecute() {
        console.log(songList.songs)

    }

    
});