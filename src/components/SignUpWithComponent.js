import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import ReactStars from 'react-stars';

import '../styles/components/authComponent.css';

import fire from '../helpers/fire';
import firebase from 'firebase';

class SignUpWithComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}
	loginWithFacebook = () => {
		var facebookProvider = new firebase.auth.FacebookAuthProvider();
		fire.auth().signInWithPopup(facebookProvider)
		.then(result => {
			this.props.history.push("/home");
		})
	}
	loginWithGoogle = () => {		
		var googleProvider = new firebase.auth.GoogleAuthProvider();
		fire.auth().signInWithPopup(googleProvider)
		.then(result => {
			this.props.history.push("/home");
		})
	}
	render() {
		return(
			<Fragment>
				<div className="auth-page-wrp">
					<div className="auth-page-header">
						<Container>
							<Row>
								<Col xl="8">
									<div className="auth-page-logo text-center">
										<Link to="/">
											<img className="img-fluid" src="images/footer-logo.png" alt="" />
										</Link>
									</div>									
								</Col>
							</Row>
						</Container>
					</div>
					<div className="auth-page-content">
						<Container className="center-content">
							<Row>
								<Col xl="8">
									<div className="partners-logo text-center">
										<a href=""><img src="images/amazon.png" alt="" /></a>
										<a href=""><img src="images/aliexpress.png" alt="" /></a>
										<a href=""><img src="images/gearbest.png" alt="" /></a>
										<a href=""><img src="images/wish.png" alt="" /></a>
										<a href=""><img src="images/esty.png" alt="" /></a>
										<a href=""><img src="images/ebay.png" alt="" /></a>
										<a href=""><img src="images/rakuten.png" alt="" /></a>
									</div>
									<div className="landing-heading">
										<h1 className="text-white text-center mb-0 colfax-bold">Sign-up to see the world’s <br /> best-selling products.</h1>
									</div>
									<div className="rating-star text-center">
										<div className="rating-with-count">
											<ReactStars className="stars" 
												count={5}
												value={5}
												size={30}
												color2={'#ffcc48'}
											/>
											<span className="rating-count">4.9</span>
										</div>
									</div>
									<Row className="justify-content-center">
										<Col xl="7" md="7" lg="7" xs="12" sm="7" className="mb-3">
											<Link className="btn btn-block btn-green avenir-black" to="/form_sign_up">Sign-Up</Link>
										</Col>
									</Row>
									<Row className="justify-content-center">
										<Col xl="7" md="7" lg="7" xs="12" sm="7" className="mb-3">
											<div className="btn btn-block btn-facebook avenir-black" onClick={this.loginWithFacebook}>Continue with Facebook</div>
										</Col>
									</Row>
									<Row className="justify-content-center">
										<Col xl="7" md="7" lg="7" xs="12" sm="7" className="mb-2">
											<div className="btn btn-block btn-google avenir-black" onClick={this.loginWithGoogle}>Continue with Google</div>
										</Col>
									</Row>
									<Row className="justify-content-center">
										<Col xl="7" md="7" lg="7" xs="12" sm="7" className="text-center mb-3">
											<span className="separator"></span>
										</Col>
									</Row>
									<Row className="justify-content-center">
										<Col xl="7" md="7" lg="7" xs="12" sm="7" className="mb-2">
											<Link className="btn btn-block btn-white avenir-black" to="/login">Login</Link>
										</Col>
									</Row>
									<Row className="justify-content-center">
										<Col xl="9" md="9" lg="9" xs="12" sm="9">
											<div className="auth-link mt-2 text-center">
												<p>By continuing, you agree to Profitly’s Terms of Service and Privacy Policy, and to receiving marketing emails from Profitly.
												</p>
											</div>
										</Col>
									</Row>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="auth-page-footer text-center">
						<Container>
							<Row>
								<Col xl="8">
									<div className="shopify-logo">
										<img className="img-fluid" src="images/shopyfy-logo.png" alt="" />
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</Fragment>
		)
	}
};

export default SignUpWithComponent;
