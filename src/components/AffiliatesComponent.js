import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import { Container, Row, Col } from 'reactstrap';

import HeaderInnerComponent from './HeaderInnerComponent';
import FooterComponent from './FooterComponent';
import iconLight from "../styles/images/icon-light.png";
import arrowDown from "../styles/images/arrow-down.png";
import imgProducts from "../styles/images/img-products.png";
import imgCommision from "../styles/images/commision.png";
import imgFreeJoin from "../styles/images/free-join.png";
import imgQuickPayout from "../styles/images/quick-payout.png";
import imgUnlimitedEarning from "../styles/images/unlimited-earning.png";
import imgTracking from "../styles/images/tracking.png";
import imgLink from "../styles/images/icon-link.png";
import imgShare from "../styles/images/icon-share.png";
import imgMoney from "../styles/images/icon-dollar.png";

import '../styles/components/affiliatesPage.css';
import '../styles/index.css';

class AffiliatesComponent extends Component {
  state = {
    
  }

  render() {
    return (
    <Fragment>
      <HeaderInnerComponent />
      <div className="main">
        <div className="affiliate-page">
          <div className="affiliate-section become-partner text-center">
            <Container>
              <Row>
                <Col xl="12">
                  <div className="mb-3">
                    <img className="img-fluid" src={iconLight} alt="" />
                  </div>
                  <div className="section-heading mb-4">
                    <h1 className="text-white colfax-bold">Become a Partner</h1>
                    <h2>Empower your audience and earn a <span>20% commission</span> <br/> on every sale made, and up to a <span>$5K Bonus</span> for <br/> completing challenges.</h2>
                  </div>
                  <Row className="justify-content-center">
                    <Col xl="2">
                      <Link className="btn btn-block btn-white avenir-black" to="/">Join Now</Link>
                    </Col>
                  </Row>
                  <div className="rating-star mt-2">
                    <div className="rating-with-count">
                      <ReactStars className="stars" 
                        count={5}
                        value={5}
                        size={30}
                        color2={'#ffcc48'}
                      />
                      <span className="rating-count text-white">4.9</span>
                    </div>
                  </div>
                  <div className="text-center mt-5 down-arrow">
                    <Link to="/"><img className="img-fluid" src={arrowDown} alt="" /></Link>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="wave-shape">
              <svg viewBox="0 -20 700 110" width="100%" height="130" preserveAspectRatio="none">
                <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#0018dd" />
                <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#0018dd" />
              </svg>
            </div>
          </div>
          <div className="affiliate-section features-section text-center">
            <Container>
              <Row>
                <Col xl="12">
                  <div className="features-wrp">
                    <div className="feature-box">
                      <figure><img className="img-fluid" src={imgCommision} alt="" /></figure>
                      <div className="text">
                        25% <br/> Commissions
                      </div>
                    </div>
                    <div className="feature-box">
                      <figure><img className="img-fluid" src={imgFreeJoin} alt="" /></figure>
                      <div className="text">
                      Free to <br/> Join
                      </div>
                    </div>
                    <div className="feature-box">
                      <figure><img className="img-fluid" src={imgQuickPayout} alt="" /></figure>
                      <div className="text">
                      Quick <br/> Payouts
                      </div>
                    </div>
                    <div className="feature-box">
                      <figure><img className="img-fluid" src={imgUnlimitedEarning} alt="" /></figure>
                      <div className="text">
                      Unlimited <br/> Earnings
                      </div>
                    </div>
                    <div className="feature-box">
                      <figure><img className="img-fluid" src={imgTracking} alt="" /></figure>
                      <div className="text">
                      Easy Tracking <br/> & Reports
                      </div>
                    </div>
                  </div>
                  <div className="section-heading mb-4">
                    <h1 className="text-white colfax-bold">It’s as Easy as...</h1>
                    <h2>Getting started is easy. Get your unique referral link, share <br/> that link with your audience, and start earning cash.</h2>
                  </div>
                  <div className="links-wrp">
                    <Row>
                      <Col xl="4">
                        <div className="link-box mb-4">
                          <figure><img className="img-fluid" src={imgLink} alt="" /></figure>
                          <div className="text">
                            <h5 className="text-white colfax-bold">
                              <Link to="/">Get Your Unique Link</Link>
                            </h5>
                            <p>Begin by signing-up below to the program in just a few clicks, and you’ll instantly get your unique tracking link. </p>
                          </div>
                        </div>
                      </Col>
                      <Col xl="4">
                        <div className="link-box mb-4">
                          <figure><img className="img-fluid" src={imgShare} alt="" /></figure>
                          <div className="text">
                            <h5 className="text-white colfax-bold">
                              <Link to="/">Share Your Link</Link>
                            </h5>
                            <p>Promote your link to your audience and friends through YouTube, Facebook, Instagram, emails, or even flyers and posters.</p>
                          </div>
                        </div>
                      </Col>
                      <Col xl="4">
                        <div className="link-box mb-4">
                          <figure><img className="img-fluid" src={imgMoney} alt="" /></figure>
                          <div className="text">
                            <h5 className="text-white colfax-bold">
                              <Link to="/">Earn 20% Commission</Link>
                            </h5>
                            <p>Earn 20% commission for every customer that signs-up for Profitly using your unique referral link.</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <Row className="justify-content-center">
                    <Col xl="2">
                      <Link className="btn btn-block btn-white avenir-black" to="/">Join Now</Link>
                    </Col>
                  </Row>
                  <div className="rating-star mt-2">
                    <div className="rating-with-count">
                      <ReactStars className="stars" 
                        count={5}
                        value={5}
                        size={30}
                        color2={'#ffcc48'}
                      />
                      <span className="rating-count text-white">4.9</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="wave-shape">
              <svg viewBox="0 -20 700 110" width="100%" height="130" preserveAspectRatio="none">
                <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#0117cb" />
                <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#0117cb" />
              </svg>
            </div>
          </div>
          <div className="affiliate-section unlimited-earning text-center">
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
                  <div className="section-heading mb-4">
                    <h1 className="text-white colfax-bold">Unlimited Earnings</h1>
                    <h2>We offer a truly unlimited comission structure. The more <br/> referrals you sign-up, the more money you make.</h2>
                  </div>
                  <Row className="justify-content-center">
                    <Col xl="2">
                      <Link className="btn btn-block btn-white avenir-black" to="/">Join Now</Link>
                    </Col>
                  </Row>
                  <div className="rating-star mt-2">
                    <div className="rating-with-count">
                      <ReactStars className="stars" 
                        count={5}
                        value={5}
                        size={30}
                        color2={'#ffcc48'}
                      />
                      <span className="rating-count text-white">4.9</span>
                    </div>
                  </div>
                  <div className="text-center mt-3 down-arrow">
                    <img className="img-fluid" src={imgProducts} alt="" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <FooterComponent />
    </Fragment>
    );
  }
}

export default AffiliatesComponent;
