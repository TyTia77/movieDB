import React from "react"
import { Link } from 'react-router'

export default class Movie extends React.Component {
  render() {

    const mapImg = this.props.movies.map((movie, index) => {
      let href = "/movie/" +movie.id;

      return (
        <Link key={index} to={href}>
          <img src={movie.poster_path}/>
        </Link>
      ) 
    });

    return (
      <div class="popular">
          <h1> {this.props.title} </h1>
          <div class="img-test-container">
            {mapImg}
          </div>
      </div>
    );
  }
}