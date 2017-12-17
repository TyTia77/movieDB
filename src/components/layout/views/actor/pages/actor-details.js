import React, { PropTypes } from "react";

const ActorDetails = ({details}) => {
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

  return (
    <div>
      actor id is {actor.id} <br/>
      birthday: {actor.birthday} <br/>
      bio: {}
    </div>
  );
}

ActorDetails.PropTypes = {
  details: PropTypes.object
}

export default ActorDetails