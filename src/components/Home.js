import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navigation from './Navigation';
// import Login from './Login';
import '../index.css'; 

class Home extends React.Component{
  render(){
    return(
      
        <div className="sign">
          <span class="fast-flicker">M</span>i<span className="flicker">a</span>am
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
