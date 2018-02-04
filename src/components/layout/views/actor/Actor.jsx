import React, { PropTypes } from "react"
import { connect } from "react-redux"

import { fetchActorDetails, fetchPopularActors } from "./actions"

import ActorDetails from "./pages/actor-details"
import ActorHome from "./pages/actor-home/actor-home"
import Loader from "../../../re-usable_components/loading_screen/loading-screen"

@connect(store => {
    return {
        details: store.actorDetails.actorDetails,
        actors: store.actorDetails.actors
    }
})
export default class Actor extends React.Component {

    constructor(){
        super();
        this.state = {
            ready: {
                actors: false,
                actorDetails: false
            }
        }
    }

    componentWillMount() {
        console.log('gg', this.props);
        if (this.props.params.id){
            this.props.dispatch(fetchActorDetails(this.props.params.id));
        } else {
            this.props.dispatch(fetchPopularActors());
        }
    }

    componentWillUnmount(){
        let tester = this.state.ready;
        tester.actorDetails = false;
        tester.actors = false;
        this.setState({
            ready: tester
        })
    }

    componentWillReceiveProps(nextprops){
        console.log('props', nextprops);

        let ready1 = this.state.ready;


        if (nextprops.actors){
            ready1.actors = true;
        }

        if(nextprops.details){
            ready1.actorDetails = true;
        }

        console.log('ready', ready1);

        this.setState({
            ready: ready1
        })
                                                                                                
    }

    render() {
        const { details, params, actors } = this.props;

        if (params.id) {
            return ( 
            	<ActorDetails details={details.data}/>
            );
        }

        if (this.state.ready.actors){
            return (
                <ActorHome actors={actors.data.results} />
            );
        }

        return (
            <Loader />
        )
    }
}

Actor.PropTypes = {
    details: PropTypes.object,
    params: PropTypes.object
}