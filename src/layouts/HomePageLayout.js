import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

import '../styles/homePageLayout.css';
import '../styles/index.css';

class HomePageLayout extends Component {
  render() {
    return (
    <Fragment>
      <HeaderComponent />
      <div className="main">
        <div className="landing-page">
          <div className="landing-top-section">
            <Container>
              <Row>
                <Col xl="12">
                  <div className="partners-logo text-center">
                    <a href=""><img src="images/amazon.png" alt="" /></a>
                    <a href=""><img src="images/aliexpress.png" alt="" /></a>
                    <a href=""><img src="images/gearbest.png" alt="" /></a>
                    <a href=""><img src="images/wish.png" alt="" /></a>
                    <a href=""><img src="images/esty.png" alt="" /></a>
                    <a href=""><img src="images/ebay.png" alt="" /></a>
                    <a href=""><img src="images/rakuten.png" alt="" /></a>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xl="12">
                  <div className="landing-heading">
                    <h1 className="text-white text-center mb-2 colfax-bold">Make more sales by selling <br /> the best products.</h1>
                  </div>
                  <div className="reviews mb-5 text-center">
                    <img src="images/reviews.png" alt="" />                
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xl="2">
                  <Link className="btn btn-block btn-green avenir-black" to="/sign_up">Sign-Up Free</Link>
                </Col>
                <Col xl="2">
                  <Link className="btn btn-block btn-white avenir-black" to="/sign_up">Play Video</Link>
                </Col>
                <Col xl="12">
                  <div className="auth-link mt-2 text-center">
                    <p>
                      Already have an account? &nbsp;
                      <Link to="/login">Sign-in.</Link>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="content-screen-wrp">
              <Container>
                <div className="content-screen">
                  <Row className="justify-content-center">
                    <Col xl="8">
                      <img className="img-fluid" src="images/mac-book.png" alt="" />
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
          </div>          
          <div className="section-cta-wrp">
            <Container>
              <div className="section-cta bg-blue">
                <Row className="align-items-center">
                  <Col xl="8">
                    <div className="landing-heading">
                      <h1 className="text-white mb-0 colfax-bold">Get started for free</h1>
                      <h3>Join Profitly, make more sales.</h3>
                    </div>
                  </Col>
                  <Col xl="2">
                    <Link className="btn btn-block btn-green avenir-black" to="/sign_up">Sign-Up Free</Link>
                  </Col>
                  <Col xl="2">
                    <Link className="btn btn-block btn-white avenir-black" to="/sign_up">Watch Video</Link>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <FooterComponent />
    </Fragment>
    );
  }
}

export default HomePageLayout;
