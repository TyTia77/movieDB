import React from "react"
import { connect } from "react-redux"
import $ from "jquery"

require('../../styles/components/body.scss');

import { fetchPopularMovies } from "../actions/popularMoviesActions"
import { fetchNowShowingMovies } from "../actions/nowShowingMoviesActions"
import { fetchNewMovies } from "../actions/newMoviesActions"

// connects redux with react
@connect(store => {
  return {
    movies: store.popularMovies.movies,
    nowShowMovies: store.nowShowingMovies.movies,
    newMovies: store.newMovies.movies,
  }
})
export default class Body extends React.Component {

  constructor(){
    super();

    // current hero section position
    this.heroIndex = 0;
    this.heroTimer = setInterval(() => {
      this.slide();
    }, 3000);
  }

  componentWillMount(){
      this.props.dispatch(fetchPopularMovies());
      this.props.dispatch(fetchNowShowingMovies());
      this.props.dispatch(fetchNewMovies());
  }

  componentDidMount(){

    // call timer when components has mounted
    this.heroTimer;
  }

  slide(event){

    // get length of hero sections excluding nulls
    let length = this.props.newMovies.reduce((length, movie) => {
      return movie.backdrop_path ? length + 1 : length;
    }, 0);

    // clear timer on user click
    if(event){
      clearInterval(this.heroTimer);
    }

    // handle hero timer slide and clear timer on last section
    let direction = event 
      ? event.target.getAttribute('data-next') 
      : (this.heroIndex >= 0 && this.heroIndex < length - 1 ) 
        ? 'next' 
        : clearInterval(this.heroTimer);

    // determine whether to slide right/left
    if(direction === 'next' && this.heroIndex !== length - 1){
      this.heroIndex++;
    } else if (direction === 'prev' && this.heroIndex !== 0){
      this.heroIndex--;  
    }

    // run slider
    $('.hero-container').animate({
        scrollLeft: window.innerWidth * this.heroIndex
    }, 500);

    // TODO: add logic for dot nav
  }

  render() {
    const { movies, nowShowMovies, newMovies } = this.props;
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
      if(movie.backdrop_path){
        return (
          <div class="hero" key={index}>
            <h1 class="new-movie-title">{movie.title}</h1>
            <button>view trailer</button>
            <button>view movie information</button>
            <img src={movie.backdrop_path}/>
          </div>
        )
      }
    });    

    const mapHeroDotNav = newMovies.map((movie, index) => {
      if(movie.backdrop_path){
        if (!index){
          return (
            <i key={index} class="fa fa-circle" aria-hidden="true"></i>
          )
        } else {
          return (
            <i key={index} class="fa fa-circle-o" aria-hidden="true"></i>
          )
        }
      }
    });

    return (
        <div class="main">
            <div class="hero-container">
                {mapNewMovies}
            </div>

            <div class="hero-nav-container">
                <i 
                  class="fa fa-chevron-left fa-3x"
                  data-next="prev"
                  aria-hidden="true"
                  onClick={this.slide.bind(this)}></i>
                <i 
                  class="fa fa-chevron-right fa-3x"
                  data-next="next"
                  aria-hidden="true"
                  onClick={this.slide.bind(this)}></i>
            </div>

            <div class="dot-nav-container">
              {mapHeroDotNav}
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