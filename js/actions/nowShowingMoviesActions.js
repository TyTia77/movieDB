import axios from "axios"
import { getInfo } from "./api"

let date = new Date();
let year = date.getFullYear();

let info = getInfo();
let api = info.base_url +'/movie/now_playing' +info.api_key +'&language=en-US&page=1&region=au';

export function fetchNowShowingMovies() {
  return function(dispatch) {
    dispatch({type: "FETCH_NOW_SHOWING_MOVIES"});
    
    axios.get(api)
      .then((response) => {
        let newMovieList = response.data.results.map( mov => {
          let imgPath = mov.poster_path;
          if(imgPath){
            mov.poster_path = info.images_url + '/w185' +imgPath;
          } else {
            console.log('not found');
          }
          return mov;
        });

        dispatch({type: "FETCH_NOW_SHOWING_MOVIES_FULFILLED", payload: newMovieList})
      })
      .catch((err) => {
        dispatch({type: "FETCH_NOW_SHOWING_MOVIES_REJECTED", payload: err})
      })
  }
}
