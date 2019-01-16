//import React, { Component } from 'react';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Brands from "./pages/Brands";
import Home from "./pages/Home";
import YTHome from "./pages/YTHome";
import IndividualBrands from "./pages/IndividualBrands";
import PixabayPage from "./pages/Pixabay";
import ColorPage from "./pages/Color";
// import Login from "./pages/Login";
import Login from "./components/Auth/Login"
import LoginOld from './pages/LoginOld'
import AWSPhotoStorage from "./pages/AWSPhotoStorage";
import "./App.css";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

// const config = {
//   issuer: 'https://dev-687371.oktapreview.com',
//   redirect_uri: window.location.origin + '/implicit/callback',
//   client_id: '0oainhuo94dnScBmE0h7',
//   API_KEY: process.env.REACT_APP_PIXABAY_API_KEY,
// }

function onAuthRequired({history}) {
  history.push('/login');
}

 function App() {
   return (
     <Router>
       <div>
       <Security issuer='https://dev-687371.oktapreview.com/oauth2/default'
                  client_id='0oainhuo94dnScBmE0h7'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} >
       {/* <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
        > */}
         {/* <Switch> */}
           {/* <Route exact path="/" component={Login} /> */}
           <SecureRoute exact path="/home" component={YTHome} />
           <SecureRoute exact path="/add-brand" component={Home} />
           <SecureRoute exact path="/brands" component={Brands} />
           <SecureRoute exact path="/brands/:id" component={IndividualBrands} />
           <SecureRoute exact path="/photo-search" component={PixabayPage} />
           <SecureRoute exact path="/color-search" component={ColorPage} />
           <SecureRoute exact path="/photo-storage" component={AWSPhotoStorage} />
           <Route path="/" exact={true} component={LoginOld}/>
           <Route 
              path="/login" 
              render={() => (
                <Login baseUrl="https://dev-687371.oktapreview.com" />
                )} 
            />
           <Route path='/implicit/callback' component={ImplicitCallback}/>
         {/* </Switch> */}
         </Security>
       </div>
     </Router>
   );
 }

export default App;
