import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from'./components/LandingComponent';
import SignUpComponent from './components/SignUpComponent';
import SignUpWithComponent from './components/SignUpWithComponent';
import FormSignUpComponent from './components/FormSignUpComponent';
import FormLoginComponent from './components/FormLoginComponent';
import HomeComponent from './components/HomeComponent';
import Pay1Component from './components/Pay1Component';
import Pay2Component from './components/Pay2Component';
import Pay3Component from './components/Pay3Component';

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <Fragment>
        <Router>
          <Fragment>
            <Route path="/" component={LandingPage} exact />
            <Route path="/sign_up" component={SignUpComponent} />
            <Route path="/sign_up_with" component={SignUpWithComponent} />
            <Route path="/form_sign_up" component={FormSignUpComponent} />
            <Route path="/login" component={FormLoginComponent} />
            <Route path="/home" component={HomeComponent} />
            <Route path="/pay1" component={Pay1Component} />
            <Route path="/pay2" component={Pay2Component} />
            <Route path="/pay3" component={Pay3Component} />
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;
