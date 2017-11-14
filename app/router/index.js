import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import Main from '../components/Main'
import Second from '../components/Second'
import Third from '../components/Third'

export default (
  <Router history={hashHistory}>
    <Route path='/' >
      <IndexRoute component={Main} />
      <Route path="/second" component={Second} />  
      <Route path="/third" component={Third} />          
    </Route>
  </Router>
)