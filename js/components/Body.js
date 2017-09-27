import React from "react";
import { connect } from "react-redux"

require('../../styles/components/body.scss');

import { fetchPopularMovies } from "../actions/popularActions"

// connects redux with react
@connect(store => {
  return {
    movies: store.popular.movies,
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
        <div className="main">

            <div className="hero-container">
                <h1> hero section </h1>
            </div>

            <div className="popular">
                <h1> popular section </h1>
                <div>
                  {mapImg}
                </div>
            </div>
            <div className="current">
                <h1> currently in cinemas section </h1>
            </div>
        </div>
    );
  }
}