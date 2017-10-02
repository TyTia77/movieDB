import React from "react"
import { connect } from "react-redux"

import { fetchMovieDetails } from "../../actions/moviesDetailActions"

@connect(store => {
  return {
    details: store.movieDetails.details
  }
})
export default class MovieDetails extends React.Component {

	componentWillMount(){
  		this.props.dispatch(fetchMovieDetails(this.props.id));
	}

	componentWillUnmount(){
		// console.log('unmounting from details');
		// this.props.details = [];
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
		const { details } = this.props;

		let releaseDate = details.release_date;

		if (releaseDate){
			releaseDate 
				= releaseDate
					.split('')
					.slice(0, releaseDate.indexOf('-'))
					.join('');


			// releaseDate = releaseDate.slice(0, releaseDate.indexOf('-')).join('');

		}

		 // releaseDate = test.split('');




		// console.log(details.release_date.indexOf('-'));

		// const date = details.release_date.slice(0, details.release_date.indexOf('-'));

		console.log('props', this.props.details);

		return (
		  <div>
		    <h1> {details.title} ({releaseDate}) </h1>
		    <br/>
		    runtime: {details.runtime} mins<br/><br/>
		    vote: {details.vote_average} <br/><br/>
		    {details.overview}

		    <br/><br/>
		    <br/><br/>
		  </div>
		);
	}
}
