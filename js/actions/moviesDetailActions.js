import axios from "axios"
import { getInfo } from "./api"


let info = getInfo();
// let api = info.base_url +'/movie/';


// https://api.themoviedb.org/3/movie/297762?api_key=0aeb56f883f453e1f523338db440eb9e&language=en-US



// TODO get CAST
// https://api.themoviedb.org/3/movie/297762/credits?api_key=0aeb56f883f453e1f523338db440eb9e
export function fetchCast(id) {
  let api = info.base_url +'/movie/';
  api += id +'/credits' +info.api_key;

  return function(dispatch) {
    dispatch({type: "FETCH_CAST"});

    axios.get(api)
      .then((response) => {

        console.log('cast response', response.data);

        response.data.cast.map( cast => {
          let castImg = cast.profile_path;

          cast.profile_path = castImg
            ? info.images_url + '/w185' +castImg
            : false;

          return cast;
        });

        dispatch({type: "FETCH_CAST_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_CAST_REJECTED", payload: err})
      })

  }
}


export function fetchMovieDetails(id) {

  let api = info.base_url +'/movie/';
  api += id +info.api_key +'&language=en-US';


  return function(dispatch) {
    dispatch({type: "FETCH_MOVIE_DETAILS"});
    
    axios.get(api)
      .then((response) => {
        console.log('response', response);

        let imgPath = response.data.poster_path;

        response.data.poster_path = imgPath 
          ? info.images_url + '/w185' +imgPath 
          : false;

          console.log('poster', response.data.poster_path);

        dispatch({type: "FETCH_MOVIE_DETAILS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_MOVIE_DETAILS_REJECTED", payload: err})
      })
  }
}
