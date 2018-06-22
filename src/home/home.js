import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
   const containerStyle={
     marginTop: "60px"
    };
    return (
      <div>
      <div className="container" style={containerStyle}>
        {
          isAuthenticated() && (
              <h4>
                Welcome! aboard to CamtoyApp
              
               
               </h4>
               
            )
            
        }
        {
          !isAuthenticated() && (
              <h4 color='red'>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
        <div className="stupid"><p>with this application we can talk to our dogs!</p></div>
        <p><a href="./html/index.html">click here to talk!</a></p>
        
      </div>
      </div>
    );
  }
}

export default Home;
