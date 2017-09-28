import React from "react";
import { connect } from "react-redux"

require('../../styles/components/body.scss');

import { fetchPopularMovies } from "../actions/popularMoviesActions"
import { fetchNowShowingMovies } from "../actions/nowShowingMoviesActions"
import { fetchNewMovies } from "../actions/newMoviesActions"

// connects redux with react
@connect(store => {
  console.log(store);
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

  componentDidMount(){
  }

  render() {
    const { movies, nowShowMovies, newMovies } = this.props;
    console.log(this.props);

    const mapImg = movies.map((movie, index) => {
      return (
        <img key={index} src={movie.poster_path}/>
      ) 
    });

    const mapNowShowImg = nowShowMovies.map((movie, index) => {
      return (
        <img key={index} src={movie.poster_path}/>
      )
    });

    const mapNewMovies = newMovies.map((movie, index) => {
      return (
        <div key={index}>
          <h1 class="new-movie-title">{movie.title}</h1>
          <button>view trailer</button>
          <button>view movie information</button>
          <i class="fa fa-chevron-left fa-3x" aria-hidden="true"></i>
          <i class="fa fa-chevron-right fa-3x" aria-hidden="true"></i>
          <img src={movie.backdrop_path}/>
        </div>
      )
    });

    return (
        <div class="main">
            <div class="hero-container">
                <div>
                  {mapNewMovies}
                </div>
            </div>
            <div class="popular">
                <h1> popular movies </h1>
                <div class="img-test-container">
                  {mapImg}
                </div>
            </div>
            <div class="popular">
                <h1> now showing </h1>
                <div class="img-test-container">
                  {mapNowShowImg}
                </div>
            </div>
        </div>
    );
  }
}