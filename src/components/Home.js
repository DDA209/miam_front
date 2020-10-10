import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navigation from './Navigation';
// import Login from './Login';
// import '../index.css'; 
import './Home.css'
class Home extends React.Component{
  render(){
    return(
      
        <div className="sign">
          <a href="/utilisateur">
          <span class="fast-flicker">M</span><span className="flicker">i</span>
          </a>
          am
        </div>
            // <div className="home">
            //   {/* <Navigation /> */}
            //     <h1>Miam Ok</h1>

            //     {/* what will show up on home page ?  */}
            //     {/* <Login />  */}
            //   {/* <button onClick={this.logout.bind(this)}>Logout</button> */}
            // </div>

    );
  }

}

export default Home;
