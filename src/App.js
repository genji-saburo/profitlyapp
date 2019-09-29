import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import fire from './helpers/fire';

import LandingPage from'./components/LandingComponent';
import SignUpComponent from './components/SignUpComponent';
import SignUpWithComponent from './components/SignUpWithComponent';
import FormSignUpComponent from './components/FormSignUpComponent';
import FormLoginComponent from './components/FormLoginComponent';
import HomeComponent from './components/HomeComponent';
import Pay1Component from './components/Pay1Component';
import Pay2Component from './components/Pay2Component';
import Pay3Component from './components/Pay3Component';
import productListingComponent from './components/productListingComponent';
import AffiliatesComponent from './components/AffiliatesComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{},
    }
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
        
      }else{
        this.setState({user: null});
      }
    })
  }
  componentDidMount() {
    this.authListener();
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Fragment>
            { this.state.user ? (<Route path="/" component={HomeComponent} exact />) : (<Route path="/" component={LandingPage} exact />) }            
            <Route path="/sign_up" component={SignUpComponent} />
            <Route path="/sign_up_with" component={SignUpWithComponent} />
            <Route path="/form_sign_up" component={FormSignUpComponent} />
            <Route path="/login" component={FormLoginComponent} />
            <Route path="/pay1" component={Pay1Component} />
            <Route path="/pay2" component={Pay2Component} />
            <Route path="/pay3" component={Pay3Component} />
            <Route path="/product_listing" component={productListingComponent} />
            <Route path="/affiliates" component={AffiliatesComponent} />
            { this.state.user ? (<Route path="/home" component={HomeComponent} />) : (<Route path="/home" component={LandingPage} />) }
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;
