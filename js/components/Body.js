import React from "react";
import { connect } from "react-redux"

require('../../styles/components/body.scss');

import { fetchPopularMovies } from "../actions/popularMoviesActions"

// connects redux with react
@connect(store => {
  return {
    movies: store.popularMovies.movies,
  }
})
export default class Body extends React.Component {

  componentWillMount(){
      this.props.dispatch(fetchPopularMovies());
  }

  componentDidMount(){
  }

  render() {

    const { movies } = this.props;
    const mapImg = movies.map((movie, index) => {
      return (
        <img key={index} src={movie.poster_path}/>
      ) 
    });

    return (
        <div class="main">
            <div class="hero-container">
                <h1> hero section </h1>
            </div>
            <div class="popular">
                <h1> popular movies </h1>
                <div class="img-test-container">
                  {mapImg}
                </div>
            </div>
            <div class="current">
                <h1> currently in cinemas section </h1>
            </div>
        </div>
    );
  }
}