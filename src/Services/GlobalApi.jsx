import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = 'b4c9c180ead85a167b8c275e00242610'

const moviesByGenreBaseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=b4c9c180ead85a167b8c275e00242610';

// https://api.themoviedb.org/3/trending/movie/day?api_key=b4c9c180ead85a167b8c275e00242610
const getTrendingVideos = axios.get(movieBaseUrl+ "/trending/movie/day?api_key=" + api_key);

const getMovieByGenreId = (id) => axios.get(moviesByGenreBaseUrl + "&with_genres=" + id);

export default{
    getTrendingVideos,
    getMovieByGenreId
}