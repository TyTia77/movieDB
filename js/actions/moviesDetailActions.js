import axios from "axios"
import { getInfo } from "./api"


let info = getInfo();
let cors = 'https://cors-anywhere.herokuapp.com/';
// let api = info.base_url +'/movie/';


// https://api.themoviedb.org/3/movie/297762?api_key=0aeb56f883f453e1f523338db440eb9e&language=en-US


export function fetchMovieDetails(id) {

  let api = info.base_url +'/movie/';
  api += id +info.api_key +'&language=en-US';


  return function(dispatch) {
    dispatch({type: "FETCH_MOVIE_DETAILS"});
    
    axios.get(api)
      .then((response) => {

        dispatch({type: "FETCH_MOVIE_DETAILS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_MOVIE_DETAILS_REJECTED", payload: err})
      })
  }
}
