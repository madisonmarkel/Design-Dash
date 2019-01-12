import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(
    class Home extends Component {
      state = { authenticated: null };
  
      checkAuthentication = async () => {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
          this.setState({ authenticated });
        }
      };
  
      async componentDidMount() {
        this.checkAuthentication();
      }
  
      async componentDidUpdate() {
        this.checkAuthentication();
      }
  
      login = async () => {
        this.props.auth.login('/');
      };
  
      logout = async () => {
        this.props.auth.logout('/');
      };
  
      render() {
        if (this.state.authenticated === null) return null;
  
        const mainContent = this.state.authenticated ? (
          <div>
            <button className="btn" onClick={this.logout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button className="btn" onClick={this.login}>
              Login
            </button>
          </div>
        );

        return (
            <div className="tracking-in-expand">
               <h1><em>Design Dash</em></h1>
                <div class="floatright">
                {mainContent}
                </div>
             </div>
          );
        }
      }
    );

// import React from "react";

// const Header = props => (
//     <div>
//         <h1 className="tracking-in-expand"><em>Design Dash</em></h1>
//         {mainContent}
//     </div>
// );

// export default Header;