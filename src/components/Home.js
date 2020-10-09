import React from 'react';
// import Navigation from './Navigation';
// import Login from './Login';
import '../../src/components/menu/menu_style/menu.css'; 

class Home extends React.Component{
  render(){
    return(
    
            <div className="home">
              {/* <Navigation /> */}
                <h1>Miam Ok</h1>

                {/* what will show up on home page ?  */}
                {/* <Login />  */}
              {/* <button onClick={this.logout.bind(this)}>Logout</button> */}
            </div>
    );
  }

}

export default Home;
