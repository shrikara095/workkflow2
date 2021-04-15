import React from "react";
import Dashboard from './Dashboard';
import {BrowserRouter as Router,useHistory,Switch,Route} from "react-router-dom";
import MyProfile from './MyProfile';
import SignIn from './SignIn';
import FormsMain from './FormsMain';
function App()
{
 
  return(
    <Router>
    <div>
    <Dashboard />
    <Switch>
    <Route path="/" exact component={SignIn}/>
    <Route path="/profile" component={MyProfile} /> 
    <Route path="/forms" component={FormsMain}/>
    </Switch>
     
    </div>
    </Router>
  );
}
export default App;
