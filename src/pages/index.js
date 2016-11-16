import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import News from './News.jsx'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import 'less'

// ReactDOM.render( < App name = "helloReact" / > , document.getElementById('app'))

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='home' component={Home} />
    <Route path='about' component={About} />
    <Route path='contact' component={Contact} />
    <Route path='news' component={News} />
  </Router>

), document.getElementById('app'))
