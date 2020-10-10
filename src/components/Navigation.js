import React from 'react';
import Register from './Register';
import Login from './Login';
import UserInfo from '../components/core/UserInfo';
import {Navbar,Nav, Form } from 'react-bootstrap';
// import '../index.css'; //css Emad 09/10
import './Nav.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'




class Navigation extends React.Component{
  render(){
    return(
      <Router>
          <div className="navigation">
            <div> 
                <Navbar collapseOnSelect expand="lg" >
                  <Navbar.Brand href="/utilisateur">
                  <img 
                  alt=""
                  src="../image/miam.png"
                  width="35"
                  height="35"
                  className="d-inline-block align-top"
                  />{' '}Miam
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto"><img 
                      alt=""
                      src="../image/batman.jpg"
                      width="35"
                      height="40"
                      className="d-inline-block align-top"
                      />{' '}
                      <Nav.Link><Link to="/login" className="font-weight-bolder text-white"> Se connecter</Link></Nav.Link>
                      <Nav.Link><Link to="/register" className="font-weight-bolder text-white">s'inscrire </Link></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
      </Router>
    );
  }

}

export default Navigation;

