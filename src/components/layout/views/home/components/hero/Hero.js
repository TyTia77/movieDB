import React from "react"
import { Link } from 'react-router'
import $ from "jquery"

import DotNav from "./Dot-nav"
import ArrowNav from "./Arrow-nav"

export default class Hero extends React.Component {

  constructor(){
    super();
    this.state = {
      heroPos: 0
    }

    // current hero section position
    this.heroTimer = setInterval(() => {
      this.slide();
    }, 3000);

    // store resizer as a variable, only way to reference
    // same object when removing event listerner because 
    //.bind(this) will create a new reference
    this.resizer = this.handleResize.bind(this);
  }

  componentDidMount(){

    // event listerner for window resizing
    window.addEventListener('resize', this.resizer);

    // call timer when components has mounted
    this.heroTimer;
  }

  // remove events/timers on new page state
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizer);
    clearInterval(this.heroTimer);
  }

  handleResize(event){
    let current = this.state.heroPos * event.target.innerWidth;
       $('.hero-container').animate({
        scrollLeft: current
    }, 0);
  }

  updateHeroPos(pos){
    this.setState({
      heroPos: pos
    });
  }

  handleDotNav(pos){
    //console.log(pos);
    // TODO: ADD SLIDE TO POS
  }

  slide(event){

    let heroPos = this.state.heroPos;

    // get length of hero sections excluding nulls
    let length = this.props.movies.reduce((length, movie) => {
      return movie.backdrop_path ? length + 1 : length;
    }, 0);

    // clear timer on user click
    if(event){
      clearInterval(this.heroTimer);
    }

    // handle hero timer slide and clear timer on last section
    let direction = event 
      ? event.target.getAttribute('data-next') 
      : (heroPos >= 0 && heroPos < length - 1 ) 
        ? 'next' 
        : clearInterval(this.heroTimer);

    // determine whether to slide right/left
    if(direction === 'next' && heroPos !== length - 1){
      heroPos++;
    } else if (direction === 'prev' && heroPos !== 0){
      heroPos--;  
    }

    // update state
    this.updateHeroPos(heroPos);

    // run slider
    $('.hero-container').animate({
        scrollLeft: window.innerWidth * heroPos
    }, 500);

  }

  render() {
    const { movies } = this.props;

    const mapNewMovies = movies.map((movie, index) => {
      if(movie.backdrop_path){
        let href = '/movie/' +movie.id;
        return (
          <div class="hero" key={index}>
            <h1 class="new-movie-title">{movie.title}</h1>
            <button>view trailer</button>
            <button><Link class="link" to={href}>view movie information</Link></button>
            <img src={movie.backdrop_path}/>
          </div>
        )
      }
    });    

    let mapHeroDotNav = movies.filter(movie => {
      return movie.backdrop_path;
    }).map((movie, index) => {
        return index === this.state.heroPos ? true : false;
    });

    return (
        <div>
            <div class="hero-container">
                {mapNewMovies}
            </div>

            <ArrowNav handleClick={this.slide.bind(this)} />

            <DotNav 
              position={mapHeroDotNav} 
              handleClick={this.handleDotNav.bind(this)} />
        </div>
    );
  }
}