import { combineReducers } from "redux"

import popularMovies from "./popularMoviesReducer"
import nowShowingMovies from "./nowShowingMoviesReducer"

export default combineReducers({
  popularMovies,
  nowShowingMovies,
})