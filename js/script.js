import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Actor from "./pages/Actor"
import Body from "./components/Body"
import Layout from "./pages/Layout"
import Movie from "./pages/Movie"
import store from "./store"
import Tv from "./pages/Tv"

ReactDOM.render(
	<Provider store={store}>
	  <Router history={hashHistory}>
	    <Route path="/" component={Layout}>
	      <IndexRoute component={Body}></IndexRoute>
	      <Route path="actor(/:id)" name="actor" component={Actor}></Route>
	      <Route path="movie(/:id)" name="movie" component={Movie}></Route>
	      <Route path="tv" name="tv" component={Tv}></Route>
	    </Route>
	  </Router>
   </Provider>,
app);
