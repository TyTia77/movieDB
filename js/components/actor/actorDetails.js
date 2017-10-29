import React from "react";

export default class ActorDetails extends React.Component {

  render() {
    const { details } = this.props;

    console.log('props', details);

    let actor = {};

    if (details){
    	actor.id = details.id;
    	actor.birthday = details.birthday;
    	actor.biography = details.biography;
    }

    if (details){
    	Object.keys(details).forEach(item => {
    		console.log(`item ${item}`);
    	})
    }

    console.log('details', JSON.stringify(details, null, 4));

    return (
      <div>
        actor id is {actor.id} <br/>
        birthday: {actor.birthday} <br/>
        bio: {}
      </div>
    );
  }
}