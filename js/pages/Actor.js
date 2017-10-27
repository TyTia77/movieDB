import React from "react"


export default class Actor extends React.Component {

  render() {

	const { params } = this.props;

	console.log('params', params);

	if (params.id){
		return (
			<h1> this is actor id page </h1>
		);
	}

    return (
      <div>
        <h1> this is Actor page </h1>
      </div>
    );
  }
}
