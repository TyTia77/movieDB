import React, { PropTypes } from "react"
import { Link } from 'react-router'

require('./movies.scss');

const Movies = ({ movies, title }) => {

    const mapImg = movies.map((movie, index) => {
        let href = "/movie/" + movie.id;

        const handleHover = e => {
            let classList = e.currentTarget.classList;
            let animate = ['animated', 'infinite', 'jello'];

            switch(e.type){
                case 'mouseenter': 
                    classList.add(...animate);
                    break;

                case 'mouseleave':
                    classList.remove(...animate);
                    break;
            }
        }

        return (
            <div class="movie">
                <Link key={index} to={href}>
                    <img 
                        class="movie-image" 
                        src={movie.poster_path} 
                        onMouseEnter={handleHover} 
                        onMouseLeave={handleHover}/>
                </Link>
                <label class="movie-label">{movie.original_title}</label>
            </div>
        )
});

    return (
        <div class="movies-container">
            <h1 class="movies-title"> {title} </h1>
            <div class="movie-container">
                {mapImg}
            </div>
        </div>
    );

}

Movies.PropTypes = {
    movies: PropTypes.object,
    title: PropTypes.string
}

export default Movies