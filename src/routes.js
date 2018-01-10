import React from 'react';
import { IndexRoute, Router, Route, browserHistory  } from 'react-router';
import Home from './Containers/Home/Home';
import App from './Containers/App/App';
import Projects from './Containers/Projects/Projects';
import About from './Containers/About/About';

export default (
    <Router history={browserHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
        </Route>
    </Router>
);