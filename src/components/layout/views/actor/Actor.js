import React, { PropTypes } from "react"
import { connect } from "react-redux"

// import { fetchActorDetails } from "../../../../redux/actions/actorActions"
import { fetchActorDetails } from "./actions"

import ActorDetails from "./pages/actor-details"

@connect(store => {
    return {
        details: store.actorDetails.actorDetails
    }
})
export default class Actor extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchActorDetails(this.props.params.id));
    }

    render() {
        const { details, params } = this.props;

        if (params.id) {
            return ( 
            	<ActorDetails details = { details.data }/>
            );
        }

        return ( 
        	<div>
            	<h1> this is Actor page </h1> 
            </div>
        );
    }
}

Actor.PropTypes = {
    details: PropTypes.object,
    params: PropTypes.object
}