import { combineReducers } from "redux"

import popularMovies from "./popularMoviesReducer"
import nowShowingMovies from "./nowShowingMoviesReducer"
import newMovies from "./newMoviesReducer"
import movieDetails from "./movieDetailsReducer"

export default combineReducers({
  popularMovies,
  nowShowingMovies,
  newMovies,
  movieDetails,
})