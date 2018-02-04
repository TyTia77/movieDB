import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Actor  from "./components/layout/views/actor/Actor"
import Home   from "./components/layout/views/home/Home"
import Layout from "./components/layout/Layout"
import Movie  from "./components/layout/views/movie/Movie"
import store  from "./store"
import Tv     from "./components/layout/views/tv/Tv"

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path="actor(/:id)" name="actor" component={Actor}></Route>
				<Route path="movie(/:id)" name="movie" component={Movie}></Route>
				<Route path="tv" name="tv" component={Tv}></Route>
			</Route>
		</Router>
	</Provider>, document.getElementById('app'));
