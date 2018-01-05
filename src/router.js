import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App.js'
import Details from './statusDetails/statusDetails.js'

export default () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/details/:id' component={Details}/>
    </Switch>
  </main>
)