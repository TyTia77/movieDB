import { combineReducers } from "redux"

import popularMovies from "./popularMoviesReducer"
import nowShowingMovies from "./nowShowingMoviesReducer"
import newMovies from "./newMoviesReducer"

export default combineReducers({
  popularMovies,
  nowShowingMovies,
  newMovies,
})