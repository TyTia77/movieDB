import axios from "axios"
import { getInfo } from "./api"

let date = new Date();
let year = date.getFullYear();

let info = getInfo();
let cors = 'https://cors-anywhere.herokuapp.com/';
let api = info.base_url +'/movie/upcoming' +info.api_key +'&language=en-US&page=1&region=au';


//https://api.themoviedb.org/3/movie/upcoming?api_key=0aeb56f883f453e1f523338db440eb9e&language=en-US&page=1&region=au


export function fetchNewMovies() {
  return function(dispatch) {
    dispatch({type: "FETCH_NEW_MOVIES"});
    
    axios.get(api)
      .then((response) => {
        let newMovieList = response.data.results.map( mov => {
          let imgPath = mov.backdrop_path;
          // if (imgPath){
          //   mov.backdrop_path = info.images_url + '/w1280' +imgPath;
          // } else {
          //   mov.backdrop_path = false;
          // }

          mov.backdrop_path = imgPath 
            ? info.images_url + '/w1280' +imgPath
            : false; 
          return mov;

        });

        dispatch({type: "FETCH_NEW_MOVIES_FULFILLED", payload: newMovieList})
      })
      .catch((err) => {
        dispatch({type: "FETCH_NEW_MOVIES_REJECTED", payload: err})
      })
  }
}
