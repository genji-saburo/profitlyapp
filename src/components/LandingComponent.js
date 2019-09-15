import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Modal from 'react-responsive-modal';

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

import macBook from "../styles/images/mac-book.png";
import shopyfyLogo from "../styles/images/shopify.png";

import '../styles/components/landingPage.css';
import '../styles/index.css';

class LandingComponent extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
    <Fragment>
      <HeaderComponent />
      <div className="main">
        <div className="landing-page">
          <div className="landing-top-section">
            <Container>
              <Row>
                <Col xl="12">
                  <div className="shopify mb-3 text-center">
                    <img className="img-fluid" src={shopyfyLogo} alt="" />
                  </div>
                  <div className="landing-heading mb-4 text-center">
                    <h1 className="text-white colfax-bold">Find the Best <br /> Products to Sell Online.</h1>
                    <h2>View a list of the world’s 1,000 best-selling products, and <br /> instantly import them into your Shopify store.</h2>
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
                      <div className="video-box">
                        <img className="img-fluid" src={macBook} alt="" />
                        <div className="video-play-btn" onClick={this.onOpenModal}></div>                        
                        <Modal open={open} onClose={this.onCloseModal} center>
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe title="Demo Video" className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM"></iframe>
                          </div>
                        </Modal>
                      </div>
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

export default LandingComponent;
