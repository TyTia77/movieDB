import axios from "axios"
import { getInfo } from "./api"

let date = new Date();
let year = date.getFullYear();

let info = getInfo();
let api = `${info.base_url}/discover/movie${info.api_key}&sort_by=popularity.desc&year=${year}`;


export function fetchPopularMovies() {
  return function(dispatch) {
    dispatch({type: "FETCH_POP_MOVIES"});
    
    axios.get(api)
      .then((response) => {
        let newMovieList = response.data.results.map( mov => {
          let imgPath = mov.poster_path;
          mov.poster_path = info.images_url + '/w185' +imgPath;
          return mov;
        });

        dispatch({type: "FETCH_POP_MOVIES_FULFILLED", payload: newMovieList})
      })
      .catch((err) => {
        dispatch({type: "FETCH_POP_MOVIES_REJECTED", payload: err})
      })
  }
}
