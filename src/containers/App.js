import React from 'react';
import {
  BrowserRouter as Router,
  Route,
	Switch
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
			<div>
				<NavBar />
				<Switch>
					<Route path="/">
						<Home />
					</Route>
					<Route path="/movies">
						<Movies />
					</Route>
					<Route path="/directors">
						<Directors />
					</Route>
					<Route path="/actors">
						<Actors />
					</Route>
				</Switch>
			</div>
    </Router>
  );
};

export default App
