// https://developer.okta.com/quickstart/#/react/nodejs/express

import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
//import './App.css';
//import Navigation from "../components/Navigation";
import Header from "../components/Header";
//import API from "../utils/API";
//import YourBrands from "../components/YourBrands"
//import { Input, TextArea, FormBtn } from "../components/Form";
//import { YourBrands, ListItem } from "../components/YourBrands";
import { Link } from "react-router-dom";
import { Input } from "../components/Form";

export default withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    // Redirect to '/' after login
    this.props.auth.login('/home');
  }

  async logout() {
    // Redirect to '/' after logout
    this.props.auth.logout('/');
  }

//   render() {
//     if (this.state.authenticated === null) return null;
//     return this.state.authenticated ?
//       <button onClick={this.logout}>Logout</button> :
//       <button onClick={this.login}>Login</button>;
//   }
// });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          {/* <button onClick={this.logout}>Logout</button>; */}
        </header>
        <div className="color-change-5x">
            <div className="login_links">
                <a href="#login">Login</a>
                <a href="#signup">Sign Up</a>
            </div>
        <div className="info">
          <h2>Welcome to Design Dash!</h2>
            <p>Here you can save multiple company's branding information. Ranging from colors, logos, slogan, and industry, Design Dash is the easiest way to manage and share information with your team.</p>
            <p>Design Dash also allows you to create a brand image. Search for photos, colors, and inspiration to guide your brand identity. </p>
            <p>Create, manage, and store your and others' brand so your team can expound on the baseline and create more marketing materials.</p>
              <img className="squiggle" src="../squiggle.png" alt="Squiggle Line"/>
            <hr/>
            <div className="col_half">
                <form>
                    <h2 id="login">Login</h2>
                    <Input
                    value={this.state.industry}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email Address(Required)"
                    />
                    <Input
                    value={this.state.industry}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Password(Required)"
                    />
                    <button className="btn" onClick={this.login}>Login</button>
                </form>
            </div>
            {/* <button className="btn"><Link to="/home">Login</Link></button> */}
            <div className="col_half">
                <form>
                    <h2 id="signup">Sign Up</h2>
                    <Input
                    value={this.state.industry}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email Address(Required)"
                    />
                    <Input
                    value={this.state.industry}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Password(Required)"
                    />
                    <button className="btn"><Link to="/home">Sign Up</Link></button>
                </form>
            </div>
            <p><a href="/">Forgot Password?</a></p>
          </div>
        </div>
      </div>
    );
  }
}
)

//export default Login;