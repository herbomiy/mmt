import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

import Home from 'pages/Home/Home';
import Page1  from 'pages/Page1/Page1';

const getRouter = <Router>
	<div>
		<ul>
			<li><Link to="/home">首页</Link></li>
			<li><Link to="/page1">Page1</Link></li>
		</ul>
		<Switch>
			<Route exac path="/home" component={Home}></Route>
			<Route path="/page1" component={ Page1 }></Route>
			<Redirect to="/home" component={ Home }></Redirect>
		</Switch>
	</div>
</Router>
export default getRouter;

