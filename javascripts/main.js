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
        .fail(function (error) {
            console.log(error)

        })

    // $.ajax({
    //     url: 'javascripts/songs.json'
    //     success:
    //     fail:
    //
    // })

        })
    


    function functionIWantJQueryToExecute(songList) {
        console.log(songList.songs)

        for (let i = 0; i < songList.songs.length; i++){
            let currentSong = songList.songs[i];
            $('#list-of-songs').append(`<h1> ${currentSong.title}</h1>
                <div>Performed by ${currentSong.artist}<div>${currentSong.album}`)


                        

        }

    }

let howmanyBeans = 6
let howmanyCows = 2

$('#resultBtn').click(()=>{
    resultFunction(howmanyBeans, howmanyCows);

});

function resultFunction(a, b) {
    let result = a * b

    $('#result-1').html(`${result} random items of cows and beans`)
}

$('#scaryBtn').click(()=>{
    $('li').toggle()
    console.log($('li').is(':hidden'))
    $('li').is(':hidden') ? $('#scaryBtn').html('Show') : $('#scaryBtn').html('Too Scary')
})

let storyItems = $(".story")
for (let i = 0; i < storyItems.length; i++){
    storyItems[i].onmouseover = over;
    storyItems[i].onmouseout = out;

function over() {
     console.log(this.id, event.currentTarget, event.target)
    this.style.backgroundColor = 'peachpuff';
}

function out() {
    this.style.backgroundColor = '#ffffff';
}

}


$('.inner').append(`, <strong>Jack</strong>`)


$('#holiday').click(()=>{
    doSomething($("#holiday"))
})

function doSomething(obj) {
    console.log(obj, event)
    event.target.style.backgroundColor = 'red'
}

$("#tomorrow").click((event)=>{
    doSomething(event)
});

