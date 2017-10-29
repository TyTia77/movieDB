import React from "react"

import MovieDetails from "../components/movie/MovieDetails"


export default class Movie extends React.Component {

	componentWillMount(){
		//console.log('props will', this.props.router.getCurrentLocation());
	}

	componentWillUnmount(){
		//console.log('props unwill', this.props.params.id)
	}

	// componentWillReceiveProps(newProps){
	// 	console.log('new', newProps);
	// }

  	componentDidMount(){
  		// console.log('props', this.props);
  	}

	
	render() {

		const { params } = this.props;

		//console.log('params', params);

		if (params.id){
			return (
				<MovieDetails id={params.id}/>
			);
		}

		return (
		  <div>
		    <h1> this is Movie page </h1>
		  </div>
		);
	}
}
