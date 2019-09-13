import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import '../styles/components/authComponent.css';

class SignUpComponent extends Component {

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
										<h1 className="text-white text-center mb-2 colfax-bold">“The best products, from the best <br /> sites, all in one app.”</h1>
									</div>
									<div className="reviews mb-4 text-center">
										<img src="images/reviews.png" alt="" />                
									</div>
									<Row className="justify-content-center">
										<Col xl="3" md="3" lg="3" xs="12" sm="3">
											<Link className="btn btn-block btn-green avenir-black" to="/sign_up_with">Sign-Up</Link>
										</Col>
									</Row>
									<div className="auth-link mt-2 text-center">
										<p>
											Already have an account? &nbsp;
											<Link to="/login">Sign-in.</Link>
										</p>
									</div>
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

export default SignUpComponent;
