import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import News from './News.jsx'
import { Router, Route, browserHistory } from 'react-router'
import 'less'

// 1. without router
// ReactDOM.render( < App name = "helloReact" / > , document.getElementById('app'))

// 2. with router
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='home' component={Home} />
    <Route path='about' component={About} />
    <Route path='contact' component={Contact} />
    <Route path='news' component={News} />
  </Router>
), document.getElementById('app'))
