const baseURL = ('http://www.songsterr.com/a/ra/songs/byartists.json');
let url;
//search form--referencing our DOM elements
const searchArtist = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//results section--
const section = document.querySelector('section');

//event listener--
searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    url = baseURL + '?artists=' + searchArtist.value;
    //or url = `${baseURL}?artists=${searchArtist.value}`;
    console.log("URL:", url);

    fetch(url)
        .then(function(result) {
            console.log(result);
        return result.json();
        })
        .then(function(json) {
            displaySongs(json);
            //console.log(json);
        });
}


function displaySongs(songs){
    console.log("Songs: ", songs)
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }   
    if(songs.length === 0) {
        console.log('No results');
    }   else {
        let eachSong = songs.forEach(s => {
            console.log(s);
            let songName = document.createElement('li');
            songName.innerText = s.title;
            section.appendChild(songName);
        })
    }
}
