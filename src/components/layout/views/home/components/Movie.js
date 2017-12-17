import React, { PropTypes } from "react"
import { Link } from 'react-router'

const Movie = ({movies, title}) => {

  const mapImg = movies.map((movie, index) => {
    let href = "/movie/" +movie.id;

    return (
      <Link key={index} to={href}>
        <img src={movie.poster_path}/>
      </Link>
    ) 
  });

  return (
    <div class="popular">
        <h1> {title} </h1>
        <div class="img-test-container">
          {mapImg}
        </div>
    </div>
  );
  
}

Movie.PropTypes = {
  movie: PropTypes.object,
  title: PropTypes.string
}

export default Movie