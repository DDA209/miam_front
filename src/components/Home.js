import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navigation from './Navigation';
// import Login from './Login';
class Home extends React.Component{
  render(){
    return(
            <div>
              {/* <Navigation /> */}
              <img src="../image/plat1.png" alt="bene"></img>
                <h1>Miam Ok</h1> 
                {/* <Login />  */}
              {/* <button onClick={this.logout.bind(this)}>Logout</button> */}
            </div>
    );
  }

}

export default Home;
