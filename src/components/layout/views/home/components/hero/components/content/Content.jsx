import React, { PropTypes } from "react";
import { Link } from "react-router";

require('./content.scss');

const Content = ({movies}) =>
  <div class="hero-content-container">
    <div class="hero-content">
      <img class="hero-content-image" src={movies.poster_path} />
      <div class="hero-content-info">
        <h1 class="hero-content-title">{movies.title}</h1>
        <p class="hero-content-overview">{movies.overview}</p>
        <Link to={"/movie/" + movies.id}>
          <button class="hero-content-button">More Info</button>
        </Link>
      </div>
    </div>
  </div>

Content.PropTypes = {
  movies: PropTypes.object
}

export default Content;
