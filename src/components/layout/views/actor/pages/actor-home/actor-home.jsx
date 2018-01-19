import React, { PropTypes } from "react";

require('./actor-home.scss')

const ActorHome = ({ actors }) => {

    return (
        <div class="popular-actor-container">
            <h1 class="popular-actor-header">popular actors</h1>
            {
                actors.map( (actor, index) =>{

                    let imgPath = `https://image.tmdb.org/t/p/w235_and_h235_bestv2${actor.profile_path}`

                    return(
                        <div class="popular-card" key={index}>
                            <img class="popular-card-image" src={imgPath}/>
                            <label class="popular-card-label">{actor.name}</label>
                        </div>
                    )
                })
            }
        </div>
    );
}

ActorHome.PropTypes = {
    actors: PropTypes.object
}

export default ActorHome