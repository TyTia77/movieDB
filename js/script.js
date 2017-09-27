// require('../styles/index.scss');

import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import { Provider } from "react-redux"

import store from "./store"
import Layout from "./pages/Layout"
import Body from "./components/Body"
import Actor from "./pages/Actor"
import Tv from "./pages/Tv"
import Movie from "./pages/Movie"

ReactDOM.render(
	<Provider store={store}>
	  <Router history={hashHistory}>
	    <Route path="/" component={Layout}>
	      <IndexRoute component={Body}></IndexRoute>
	      <Route path="actor" name="actor" component={Actor}></Route>
	      <Route path="movie" name="movie" component={Movie}></Route>
	      <Route path="tv" name="tv" component={Tv}></Route>
	    </Route>
	  </Router>
   </Provider>,
app);
