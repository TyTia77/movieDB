import $ from "jquery"
import React from "react"
import { connect } from "react-redux"

require('../../styles/components/body.scss')

import { fetchNewMovies } from "../actions/newMoviesActions"
import { fetchNowShowingMovies } from "../actions/nowShowingMoviesActions"
import { fetchPopularMovies } from "../actions/popularMoviesActions"

import Hero from "./body/hero/Hero"
import Movie from "./body/Movie"

// connects redux with react
@connect(store => {
  return {
    movies: store.popularMovies.movies,
    nowShowMovies: store.nowShowingMovies.movies,
    newMovies: store.newMovies.movies,
  }
})
export default class Body extends React.Component {

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

            <Movie 
              title="popular movies"
              movies={movies} />
            <Movie 
              title="now showing"
              movies={nowShowMovies} />
        </div>
    );
  }
}