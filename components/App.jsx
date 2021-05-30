import React from "react";
import Dashboard from './Dashboard';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import MyProfile from './MyProfile';
import SignIn from './SignIn';
import FormsMain from './FormsMain';
import Register from './register';

function App()
{
  window.nm="true";
  window.vw="true";
  window.cl="true";
  window.fm="false";
  

  return(
    <Router>
    <div>
    
    <Switch>
    <Route path="/login" exact component={SignIn}/> 
    <Route path="/" exact component={Dashboard}/>
    <Route path="/register" exact component={Register}/>
    <Route path="/profile" component={MyProfile} /> 
    <Route path="/forms" component={FormsMain}/> 
    </Switch>
     
    </div>
    </Router>
  );
  
}
export default App;
