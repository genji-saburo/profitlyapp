import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import fire from './helpers/fire';

import LandingPage from'./components/LandingComponent';
import SignUpComponent from './components/SignUpComponent';
import SignUpWithComponent from './components/SignUpWithComponent';
import FormSignUpComponent from './components/FormSignUpComponent';
import FormLoginComponent from './components/FormLoginComponent';
import HomeComponent from './components/HomeComponent';

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
            { this.state.user ? (<Route path="/home" component={HomeComponent} />) : (<Route path="/home" component={LandingPage} />) }
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;
