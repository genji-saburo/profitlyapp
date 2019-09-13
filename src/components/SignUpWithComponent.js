import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import '../styles/components/authComponent.css';

class SignUpWithComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {

		}
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
										<h1 className="text-white text-center mb-2 colfax-bold">Sign-up to see the world’s <br /> best-selling products.</h1>
									</div>
									<div className="reviews mb-4 text-center">
										<img src="images/reviews.png" alt="" />                
									</div>
									<Row className="justify-content-center">
										<Col xl="7" md="7" lg="7" xs="12" sm="7" className="mb-3">
											<Link className="btn btn-block btn-green avenir-black" to="/form_sign_up">Sign-Up</Link>
										</Col>
									</Row>
									<Row className="justify-content-center">
										<Col xl="7" md="7" lg="7" xs="12" sm="7" className="mb-3">
											<Link className="btn btn-block btn-facebook avenir-black" to="">Continue with Facebook</Link>
										</Col>
									</Row>
									<Row className="justify-content-center">
										<Col xl="7" md="7" lg="7" xs="12" sm="7" className="mb-2">
											<Link className="btn btn-block btn-google avenir-black" to="">Continue with Google</Link>
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
