import React from "react"
import { Link } from 'react-router'
import $ from "jquery"

import DotNav from "./components/dot-nav/Dot-nav"
import ArrowNav from "./components/arrow-nav/Arrow-nav"
import Content from './components/content/Content'

require('./hero.scss')

export default class Hero extends React.Component {
  constructor() {
    super();
    this.state = { hasHeroItems: false, heroPos: 0, };

    // current hero section position
    this.heroTimer = setInterval(() => {
      this.slide();
    }, 3000);

  }

  componentDidMount() {

    // call timer when components has mounted
    this.heroTimer;
  }

  // remove events/timers on new page state
  componentWillUnmount() {
    clearInterval(this.heroTimer);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps){
      this.setState({ hasHeroItems: true })
    }
  }

  updateHeroPos(pos) {
    this.setState({ heroPos: pos });
  }

  handleDotNav(pos) {
    //console.log(pos);
    // TODO: ADD SLIDE TO POS
  }

  slide(event) {
    let heroPos = this.state.heroPos;

    // get length of hero sections excluding nulls
    let length = this.props.movies.reduce(
      (length, movie) => {
        return movie.backdrop_path
          ? length + 1
          : length;
      }, 0);

    // clear timer on user click
    if (event) {
      clearInterval(this.heroTimer);
    }

    // handle hero timer slide and clear timer on last section
    let direction = event ? 
      event.target.getAttribute("data-next") : 
      heroPos >= 0 && heroPos < length - 1 ? 
        "next" : 
        clearInterval(this.heroTimer);

    // determine whether to slide right/left
    if (direction === "next" && heroPos !== length - 1) {
      heroPos++;
      this.animate(true, heroPos);
    } else if (direction === "prev" && heroPos !== 0) {
      heroPos--;
      this.animate(false, heroPos);
    }
  }

  animate(slideToLeft, heroPos){
    let animate = slideToLeft ? 
      ["bounceOutLeft", "bounceInRight"] : 
      ["bounceOutRight", "bounceInLeft"];

    // remove class
    this.removeClass();
    $(".nav").fadeOut(300);

    // add class
    $(".animated")
      .addClass(animate[0])
      .one("animationend", () => {
        this.removeClass();

        // update state
        this.updateHeroPos(heroPos);
        $(".animated").addClass(animate[1]);
        $(".nav").fadeIn(300);
      });
  }

  removeClass(){
    $('.animated').attr(
      'class', 
      $(".animated")
        .attr("class")
        .split(" ")
        .filter(cl => cl === "animated" || cl === "hero")
        .join(" ")
    );
  }

  render() {
    const { movies } = this.props;

    let mapHeroDotNav = movies
      .filter(movie => {
        return movie.backdrop_path;
      })
      .map((movie, index) => {
        return index === this.state.heroPos ? true : false;
      });

      console.log('movies', movies);

    if (this.state.hasHeroItems) {
      return (
        <div>
          <div class="hero-container">
            <div class="hero animated">
              <Content movies={movies[this.state.heroPos]} />
              <img class="hero-background" src={movies[this.state.heroPos].backdrop_path} />
            </div>
          </div>

          <div class="nav">
            <ArrowNav handleClick={this.slide.bind(this)} />
            <DotNav position={mapHeroDotNav} handleClick={this.handleDotNav.bind(this)} />
          </div>
        </div>
      );
    } else {
      return <div class="hero-container">
          placeholder hero section
        </div>;
    }
  }
}