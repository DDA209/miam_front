import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import { Card, Button, Form, ListGroup, Modal, Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
} from 'react-router-dom';
//import axios from 'axios';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Login from './components/Login';
import UserInfo from './components/core/UserInfo';
import Utilisateur from './components/core/Utilisateur';
// import Menu1 from './components/menu/Menu1'; // commented because of an error @Emad 09/10
import UserList from './components/core/UserList';
//import IngredientsCount from './components/core/IngredientsCount';
// import Ingredients from './components/form/select/Ingredients';
//import Ingredients from './public/json/ingredients.json'
import Add from './components/ingredients/Add';
//import UserList from './components/core/UserList';


class App extends Component {

  constructor(props){
    super(props); 
   
     
  }

  

  render (){   
    return(
      <Router>
        <Navigation />               
          <div className="container-fluid" >
            
              <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    {/* <Route path="/logout" component={Login} /> */}
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/userinfo" component={UserInfo} />
                    <Route path="/add" component={Add}/>
                    {/*<Route path="/userlist" component={UserList} />*/}
                    <Route path="/utilisateur" component={Utilisateur} /> 
                    <Route path="/userlisr" component={UserList} /> 
                    {/* <Route  path="/menu1" component={Menu1} />   ask Emad  */}
              </Switch>              
          </div>        
      </Router>
    );
  }
}

export default App;
