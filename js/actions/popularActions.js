import axios from "axios"

var info = {
  "api_key": "",
  "base_uri": "http://api.themoviedb.org/3",
  "images_uri": "http://image.tmdb.org/t/p",
  "timeout": 5000,
  "key" : '?api_key=470fd2ec8853e25d2f8d86f685d2270e'
};

var test = 'https://api.themoviedb.org/3/movie/550?api_key=0aeb56f883f453e1f523338db440eb9e';


var test1 = info.base_uri +'/discover/movie?api_key=0aeb56f883f453e1f523338db440eb9e&sort_by=popularity.desc'+info.key


export function fetchPopularMovies() {
  return function(dispatch) {
    dispatch({type: "FETCH_POP_MOVIES"});
    
    axios.get(test1)
      .then((response) => {
        let newMovieList = response.data.results.map( mov => {
          let imgPath = mov.poster_path;
          mov.poster_path = info.images_uri + '/w185' +imgPath;
          return mov;
        });

        dispatch({type: "FETCH_POP_MOVIES_FULFILLED", payload: newMovieList})
      })
      .catch((err) => {
        dispatch({type: "FETCH_POP_MOVIES_REJECTED", payload: err})
      })
  }
}



    // 0aeb56f883f453e1f523338db440eb9e
    // http://image.tmdb.org/t/p/w185//cWWCWbsJa2t0FbQwsdQR27MRP3k.jpg
