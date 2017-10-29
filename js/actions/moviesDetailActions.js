import axios from "axios"
import { getInfo } from "./api"

let info = getInfo();

export function fetchCast(id) {
  let api = `${info.base_url}/movie/${id}/credits${info.api_key}`;

  // thunk allows to return a function rather than an object
  // which allows async actions
  return function(dispatch) {
    dispatch({type: "FETCH_CAST"});

    axios.get(api)
      .then((response) => {

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

  // to use promises instead of returning a function.
  // store.dispatch({type: "name", payload: axios.get('url')})
}


export function fetchMovieDetails(id) {

  let api = `${info.base_url}/movie/${id}${info.api_key}&language=en-US`;


  return function(dispatch) {
    dispatch({type: "FETCH_MOVIE_DETAILS"});
    
    axios.get(api)
      .then((response) => {

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

// TODO get MovieTrailer
// https://api.themoviedb.org/3/movie/211672/videos?api_key=0aeb56f883f453e1f523338db440eb9e&language=en-US

// youtube url
// https://www.youtube.com/watch?v=SUXWAEX2jlg
// v=key

// export function fetchMovieTrailer(id) {
//   let api = info.base_url +'/movie/';
//   api += id +'/videos' +info.api_key +'&language=en-US';

//     return function(dispatch) {
//     dispatch({type: "FETCH_MOVIE_TRAILER"});
    
//     axios.get(api)
//       .then((response) => {
//         console.log('response', response);

//         response.data.results.forEach(trailer => {
//           trailer.link = 'https://www.youtube.com/watch?v=' +trailer.key;
//         })

//         dispatch({type: "FETCH_MOVIE_TRAILER_FULFILLED", payload: response.data})
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_MOVIE_TRAILER_REJECTED", payload: err})
//       })
//   }
// }

export function fetchMovieTrailer(id) {

  let api = `${info.base_url}/movie/${id}/videos${info.api_key}&language=en-US`;

  return {type: "FETCH_MOVIE_TRAILER", payload: axios.get(api)}
}
