import React from "react";
import {
	Router,
	Route,
	IndexRedirect,
	hashHistory
} from "react-router";
import {
	Provider
} from "react-redux";
import store from "./store";

import App from "./components/App";
import Home from "./components/home/Home";
import Detail from "./components/home/MovieDetail";
import Movie from "./components/movie/Movie";
import Cinema from "./components/cinema/Cinema";
import Shop from "./components/shop/Shop";
import MovieList from "./components/movie/MovieList";

const RouterConfig = () => (
	<Provider store={store}>
	    <Router history={hashHistory}>
	        <Route path="/" component={App}>
	        	<IndexRedirect to="home" />
	            <Route path="home" component={Home} />
	            <Route path="detail" component={Detail} />
	            <Route path="movie" component={Movie} >
	            	<IndexRedirect to="now-playing" />
	            	<Route path="now-playing" component={MovieList} />
	            	<Route path="coming-soon" component={MovieList} />
	            </Route>
	            <Route path="cinema" component={Cinema} />
	            <Route path="shop" component={Shop} />
	        </Route>
	    </Router>
	</Provider>
)
export default RouterConfig;