import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Interests from './Dashboard/Interests';
import Dashboard from './Dashboard/Dashboard';

export default function MyMain(){
      console.log('MyMain')
      return(
            <Switch>
                  <Route exact path="/" render={(props)=> <Interests {...props}/>}/>
                  <Route path="/dashboard" render={(props)=> <Dashboard {...props} />}/>
            </Switch>
      );
}
