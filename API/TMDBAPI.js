//import API_TOKEN from '../Helpers/tokens'
const API_TOKEN = "a08533c51621e5fcb2d376f775cce712";

export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getImageFromApi(name){
    return 'https://image.tmdb.org/t/p/w300' + name;
}

export function getFilmDetailFromApi(id){
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr';
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}