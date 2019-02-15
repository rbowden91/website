import React, { Component } from 'react'
import AppHeader from './AppHeader.js'
import AppFooter from './AppFooter.js'
import Nick from './Nick.js'
import Home from './Home.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {
    render() {
	return (<Router>
	    <div>
		<AppHeader />

		<hr/>

		<Route exact path="/" component={Home}/>
		<Route path="/ntrinehart" component={Nick}/>

		<hr/>
		<AppFooter />
	    </div>
	</Router>);
    }
}
