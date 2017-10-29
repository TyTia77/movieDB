import React from "react"
import { connect } from "react-redux"

import { fetchActorDetails } from "../actions/actorActions"

import ActorDetails from "../components/actor/actorDetails.js"

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
            	<h1> this is Actor page < /h1> 
            </div>
        );
    }
}