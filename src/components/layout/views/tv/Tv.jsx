import React, { PropTypes } from "react"
import { connect } from "react-redux"

import TvHome from "./pages/home/tv-home"
import Loader from "../../../re-usable_components/loading_screen/loading-screen"

import { fetchTvPopular, fetchTvToprated, fetchTvLatest } from "./actions"

@connect(store => {
  let details = store.tvDetails;
  return {
    popular: details.popular,
    topRated: details.toprated,
    latest: details.latest,
  }
})
export default class Tv extends React.Component {

  constructor(){
    super();
    this.state = {
      popularReady: false,
    }
  }

  componentWillMount() {
    this.setState({popularReady: false});
    this.props.dispatch(fetchTvPopular());
    this.props.dispatch(fetchTvToprated());
    this.props.dispatch(fetchTvLatest());
  }

  // componentWillUnmount(){
  //   this.setState({popularReady: false});
  // }

  componentWillReceiveProps(nextProps){
    console.log('props', nextProps);

    if (nextProps.popular){
      this.setState({popularReady: true})
    }
  }

  render(){

    const { popular, latest, topRated } = this.props;

    console.log('popular', popular);
    console.log('latest', latest);
    console.log('topRated', topRated);

    if (this.state.popularReady){
      return ( <TvHome items={popular.data.results}/> )
    }

    return (
      <Loader />
    )
  }
} 

Tv.PropTypes = {

}
