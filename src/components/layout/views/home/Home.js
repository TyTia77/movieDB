import $ from "jquery";
import React from "react";
import { connect } from "react-redux";

require("./home.scss");

import {
  fetchNewMovies,
  fetchNowShowingMovies,
  fetchPopularMovies
} from "./actions";

import Hero from "./components/hero/Hero";
import Movie from "./components/Movie";

// connects redux with react
@connect(store => {
  return {
    movies: store.popularMovies.movies,
    nowShowMovies: store.nowShowing.movies,
    newMovies: store.newMovies.movies
  };
})
export default class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchPopularMovies());
    this.props.dispatch(fetchNowShowingMovies());
    this.props.dispatch(fetchNewMovies());
  }

  render() {
    const { movies, nowShowMovies, newMovies } = this.props;

    return (
      <div class="main">
        <Hero movies={newMovies} />

        <Movie title="popular movies" movies={movies} />
        <Movie title="now showing" movies={nowShowMovies} />
      </div>
    );
  }
}
