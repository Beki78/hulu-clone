import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3/movie";
const movieByGenreBaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=d0ea3b037f0b0b7b62e3184720cdd2f1"

const api_key = "d0ea3b037f0b0b7b62e3184720cdd2f1";

const getPopularMovies = axios.get(movieBaseURL + "/popular?api_key=" + api_key);
const getMovieByGenreBaseId = (id:number) => axios.get(movieByGenreBaseUrl+"&with_genres="+id)

export default{
    getPopularMovies,
    getMovieByGenreBaseId
}