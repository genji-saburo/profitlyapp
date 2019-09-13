import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from'./layouts/HomePageLayout';
import SignUpComponent from './components/SignUpComponent';
import SignUpWithComponent from './components/SignUpWithComponent';
import FormSignUpComponent from './components/FormSignUpComponent';
import FormLoginComponent from './components/FormLoginComponent';
import HomeComponent from './components/HomeComponent';

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <Fragment>
        <Router>
          <Fragment>
            <Route path="/" component={HomePage} exact />
            <Route path="/sign_up" component={SignUpComponent} />
            <Route path="/sign_up_with" component={SignUpWithComponent} />
            <Route path="/form_sign_up" component={FormSignUpComponent} />
            <Route path="/login" component={FormLoginComponent} />
            <Route path="/home" component={HomeComponent} />
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;
