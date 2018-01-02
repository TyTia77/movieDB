import axios from "axios";
import { getInfo } from "../../../../api";

let info = getInfo();

export function fetchNewMovies() {
  return function(dispatch) {
    let api = `${info.base_url}/movie/upcoming${info.api_key}&language=en-US&page=1&region=au`;

    dispatch({ type: "FETCH_NEW_MOVIES" });

    axios
      .get(api)
      .then(response => {
        let newMovieList = response.data.results.map(mov => {
          let imgPath = mov.backdrop_path;
          let posterPath = mov.poster_path;

          // return false if no poster image
          if (!posterPath) {
            return false;
          }

          if (imgPath && posterPath) {
            mov.backdrop_path = info.images_url + "/w300" + imgPath;
            mov.poster_path = info.images_url + "/w342" + posterPath;
          }

          if (!imgPath && posterPath) {
            mov.backdrop_path = info.images_url + "/w342" + posterPath;
            mov.poster_path = info.images_url + "/w342" + posterPath;
          }

          if (mov.overview.length > 150){
            mov.overview = mov.overview.split('').slice(0, 150).concat(' ...').join('');
          }
          
          return mov;
        }).filter(movie => {

          // filter all falsey values out
          return movie;
        });

        dispatch({ type: "FETCH_NEW_MOVIES_FULFILLED", payload: newMovieList });
      })
      .catch(err => {
        dispatch({ type: "FETCH_NEW_MOVIES_REJECTED", payload: err });
      });
  };
}

export function fetchNowShowingMovies() {
  return function(dispatch) {
    let api = `${info.base_url}/movie/now_playing${info.api_key}&language=en-US&page=1&region=au`;

    dispatch({ type: "FETCH_NOW_SHOWING_MOVIES" });

    axios
      .get(api)
      .then(response => {
        let newMovieList = response.data.results.map(mov => {
          let imgPath = mov.poster_path;
          if (imgPath) {
            mov.poster_path = info.images_url + "/w185" + imgPath;
          } else {
            console.log("not found");
          }
          return mov;
        });

        dispatch({
          type: "FETCH_NOW_SHOWING_MOVIES_FULFILLED",
          payload: newMovieList
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_NOW_SHOWING_MOVIES_REJECTED", payload: err });
      });
  };
}

export function fetchPopularMovies() {
  return function(dispatch) {
    let date = new Date();
    let year = date.getFullYear();
    let api = `${info.base_url}/discover/movie${info.api_key}&sort_by=popularity.desc&year=${year}`;

    dispatch({
    type:
        "FETCH_POP_MOVIES"
    });

    axios
    .get(api)
    .then(response => {
        let newMovieList = response.data.results.map( mov => {
            let imgPath = mov.poster_path;
            mov.poster_path = info.images_url + "/w185" + imgPath;
            return mov;
        });

        dispatch({
          type: "FETCH_POP_MOVIES_FULFILLED",
          payload: newMovieList
        });
    })
    .catch(err => {
        dispatch({
          type: "FETCH_POP_MOVIES_REJECTED",
          payload: err
        });
    });
};
}
