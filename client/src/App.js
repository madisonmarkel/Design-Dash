//import React, { Component } from 'react';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Brands from "./pages/Brands";
import Home from "./pages/Home";
import IndividualBrands from "./pages/IndividualBrands";
import PixabayPage from "./pages/Pixabay";
import ColorPage from "./pages/Color";
import Login from "./pages/Login";
import AWSPhotoStorage from "./pages/AWSPhotoStorage";
import "./App.css";
import { Security, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-687371.oktapreview.com',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oainhuo94dnScBmE0h7',
  API_KEY: process.env.REACT_APP_PIXABAY_API_KEY
}

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Security issuer={config.issuer}
//                   client_id={config.client_id}
//                   redirect_uri={config.redirect_uri}
//         >
//           <Route path='/' exact={true} component={Home}/>
//           <Route path='/implicit/callback' component={ImplicitCallback}/>
//           <Route exact path="/" component={Login} />
//           <Route exact path="/home" component={Home} />
//           <Route exact path="/brands" component={Brands} />
//           <Route exact path="/brands/:id" component={IndividualBrands} />
//           <Route exact path="/photo-search" component={PixabayPage} />
//           <Route exact path="/color-search" component={ColorPage} />
//         </Security>
//       </Router>
//     );
//   }
// }

 function App() {
   return (
     <Router>
       <div>
       <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
        >
         <Switch>
           <Route exact path="/" component={Login} />
             <Route path='/implicit/callback' component={ImplicitCallback}/>
           <Route exact path="/home" component={Home} />
           <Route exact path="/brands" component={Brands} />
           <Route exact path="/brands/:id" component={IndividualBrands} />
           <Route exact path="/photo-search" component={PixabayPage} />
           <Route exact path="/color-search" component={ColorPage} />
           <Route exact path="/photo-storage" component={AWSPhotoStorage} />
         </Switch>
         </Security>
       </div>
     </Router>
   );
 }

export default App;
