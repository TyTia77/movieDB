import React, { PropTypes } from "react"
import { connect } from "react-redux"

require("./home.scss")

import {
  fetchNewMovies,
  fetchNowShowingMovies,
  fetchPopularMovies
} from "./actions"

import Hero from "./components/hero/Hero"
import Movies from "./components/movies/Movies"

// connects redux with react
@connect(store => {
  return {
    movies: store.popularMovies.movies,
    nowShowMovies: store.nowShowing.movies,
    newMovies: store.newMovies.movies
  };
})
export default class Home extends React.Component {
  componentWillMount(){
    this.props.dispatch(fetchPopularMovies());
    this.props.dispatch(fetchNowShowingMovies());
    this.props.dispatch(fetchNewMovies());
  }

  render() {
    const { movies, nowShowMovies, newMovies } = this.props;

    return (
      <div class="main">
        <Hero movies={newMovies} />
        <Movies title="popular movies" movies={movies} />
        <Movies title="now showing" movies={nowShowMovies} />
      </div>
    );
  }
}

Home.PropTypes = {
  movies: PropTypes.object.isRequired,
  nowShowMovies: PropTypes.object.isRequired,
  newMovies: PropTypes.object.isRequired
}
