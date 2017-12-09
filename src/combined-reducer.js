import { combineReducers } from "redux";

// home view
import { newMovies, nowShowing, popularMovies } from "./components/layout/views/home/reducers";

// movie view
import { movieDetails } from "./components/layout/views/movie/pages/movie-details/reducers";

// actor view
import { actorDetails } from "./components/layout/views/actor/reducers";

export default combineReducers({
  // home view
  popularMovies,
  nowShowing,
  newMovies,

  // actor view
  actorDetails,

  // movie view
  movieDetails,
});
