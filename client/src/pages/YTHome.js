import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import Navigation from "../components/Navigation";
import Header from "../components/Header";

export default withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    this.props.auth.login('/');
  }

  async logout() {
    this.props.auth.logout('/');
  }

  render() {
    if (this.state.authenticated === null) return null;

    const button = this.state.authenticated ?
      <button onClick={this.logout}>Logout</button> :
      <button onClick={this.login}>Login</button>;

    return (
        <div className="App">
            <header className="App-header">
            <Header/>
            </header>
            <div className="main_app">
                <Navigation/>
                <div className="home">
                    <h2>How to Use App</h2>
                        <p>
                            Design Dash is use to inspire, create, curate, and store company branding information to be shared across teams. Design Dash allows teams to quickly grab a company's brand to create multiple mediums and designs that are cohesive no matter who took the lead.
                        </p>
                        <p>
                            Now, teams don't have to send repetitive iternal messages for logos, HEX codes, and brand slogans to create new marketing materials. All the information you need in stored in Design Dash for the brands you manage.
                        </p>
                </div>
            </div>
        </div>

    );
  }
});