import React from "react";
import { connect } from "react-redux"

require('../../styles/components/body.scss');

import { fetchPopularMovies } from "../actions/popularMoviesActions"
import { fetchNowShowingMovies } from "../actions/nowShowingMoviesActions"

// connects redux with react
@connect(store => {
  console.log(store);
  return {
    movies: store.popularMovies.movies,
    nowShowMovies: store.nowShowingMovies.movies,
  }
})
export default class Body extends React.Component {

  componentWillMount(){
      this.props.dispatch(fetchPopularMovies());
      this.props.dispatch(fetchNowShowingMovies());
  }

  componentDidMount(){
  }

  render() {
    const { movies, nowShowMovies } = this.props;

    const mapImg = movies.map((movie, index) => {
      return (
        <img key={index} src={movie.poster_path}/>
      ) 
    });

    console.log('testing', this.props);

    const mapNowShowImg = nowShowMovies.map((movie, index) => {
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