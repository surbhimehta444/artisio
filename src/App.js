import React ,{Component }from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import cookie from 'react-cookies';
import Login from './pages/Login';
import MyMain from './MyMain';
import Signup from './pages/Signup';

//this is for guards
class App extends Component{
  render(){
    console.log('App')
    return(
      <Router>
        <Switch>
          <Route 
            path="/"
            render={(props) => {
              console.log('Checked')
              let token = cookie.load('token')
              return token === undefined ? <Login {...props}/> : <MyMain {...props}/>
            }}  
          />
        </Switch>
      </Router>
      
    );
  }
}

export default App;
