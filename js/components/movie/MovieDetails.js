import React from "react"
import { connect } from "react-redux"

import { fetchMovieDetails, fetchCast, fetchMovieTrailer } from "../../actions/moviesDetailActions"

import Cast from "./castComp"

require('../../../styles/components/movie-details.scss')

@connect(store => {
  return {
    details: store.movieDetails.details,
    cast: store.movieDetails.cast,
    trailer: store.movieDetails.trailer
  }
})
export default class MovieDetails extends React.Component {

	componentWillMount(){
		// TODO better way to deal with async actions
  		this.props.dispatch(fetchMovieDetails(this.props.id));
  		this.props.dispatch(fetchCast(this.props.id));
  		this.props.dispatch(fetchMovieTrailer(this.props.id));
	}

	componentWillUnmount(){
		//TODO clear on unmount		
	}

	componentWillReceiveProps(newProps){
		// console.log('new from details', newProps);
		// console.log('new from details', prevProps);
		// this.props.dispatch(fetchMovieDetails(this.props.id));
	}


  	componentDidMount(){
  		// console.log('props', this.props);
  	}


	render() {
		const { details, cast, trailer } = this.props;

		let mapTrailer = trailer.data 
			? trailer.data.results.filter((trailer, index)=>{
				return index === 0;
			}).map((trailer, index)=>{
				let youtube = `https://www.youtube.com/embed/${trailer.key}`;
				return (
					<iframe 
						key={index} 
						src={youtube}>
					</iframe>
				)
			})
			: [];

		let releaseDate = details.release_date
			? details.release_date
				.split('')
				.slice(0, details.release_date.indexOf('-'))
				.join('')
			: '';

		let mapCast = cast.cast 
			? cast.cast.filter(cast => {
				return cast.profile_path;
			}).map((filteredCast, index) => {
				return (
					<Cast key={index} filteredCast={filteredCast}/>
				);
			}) 
			: [];

		let movieLengthHr;
		let movieLengthMin;

		if (details.runtime){
			movieLengthHr = Math.floor(details.runtime / 60);
			movieLengthMin = details.runtime % 60;
		}

		let genres = details.genres
			? details.genres.map((genre, index) =>{
				return (
					<li key={index}>{genre.name}</li>
				);
			})
			: [];


		return (
		  <div class="movie-detail-container">
		    <h1 class="movie-detail-title"> {details.title} ({releaseDate}) </h1>
		    <br/>
		    <i class="fa fa-clock-o" aria-hidden="true"></i> &nbsp;
		    {movieLengthHr} hr {movieLengthMin} mins &nbsp;
		    | &nbsp; <ul>{genres}</ul> &nbsp;
		    | &nbsp; <i class="fa fa-star" aria-hidden="true"></i> &nbsp;
 			{details.vote_average}/10 <br/><br/>

 			<fig>
			   	<img src={details.poster_path}/>
			   	<div class="movie-trailer-container">
					{mapTrailer}
			   	</div>
			</fig>

		   	<br/>

	    	<p class="overview">{details.overview}</p>


		    <br/><br/><br/>
		    CAST:<br/><br/>
		    {mapCast}
		  </div>
		);
	}
}
