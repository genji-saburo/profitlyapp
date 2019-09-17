import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Slider from "react-slick";
import ReactStars from 'react-stars';

import '../styles/components/authComponent.css';
import slideProducts from "../styles/images/img-products.png";

class FormSignUpComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {

		}
	}
	render() {
		var settings = {
			dots: false,
			infinite: true,
			arrows:false,
			autoplay: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return(
			<Fragment>
				<div className="auth-page-wrp">
					<div className="auth-page-header">
						<Container>
							<Row>
								<Col xl="6" lg="6" md="6" xs="12" sm="6">
									<div className="auth-page-logo text-center">
										<Link to="/">
											<img className="img-fluid" src="images/footer-logo.png" alt="" />
										</Link>
									</div>									
								</Col>
								<Col xl="6" lg="6" md="6" xs="12" sm="6"></Col>
							</Row>
						</Container>
					</div>
					<div className="auth-page-content">
						<Container className="center-content">
							<Row>
								<Col xl="6" lg="6" md="6" xs="12" sm="6">
									<Form className="w-100 form-wrp">
										<Row className="justify-content-center">
											<Col xl="10" md="10" lg="10" xs="12" sm="10">
												<Row>
													<Col xl="12" md="12" lg="12" xs="12" sm="12">
														<FormGroup>
															<Label for="email">Email address:</Label>
															<Input type="email" name="email" id="email" placeholder="johnsmith@gmail.com" />
														</FormGroup>
													</Col>
													<Col xl="12" md="12" lg="12" xs="12" sm="12">
														<FormGroup>
															<Label for="password">Password</Label>
															<Input type="password" name="password" id="password" placeholder="Password" />
														</FormGroup>
													</Col>
													<Col xl="12" md="12" lg="12" xs="12" sm="12" className="mt-3">
														<Button className="btn btn-block btn-green avenir-black">Login</Button>
													</Col>
												</Row>
												<Row className="justify-content-center">
													<Col xl="10" md="10" lg="10" xs="12" sm="10">
														<div className="auth-link mt-3 text-center">
															<Link className="auth-link-text" to="/">Forgot your password?</Link>
														</div>
													</Col>
												</Row>
											</Col>											
										</Row>										
									</Form>
								</Col>
								<Col xl="6" lg="6" md="6" xs="12" sm="6">
									<div className="right-col-inner mt-2">
										<div className="partners-logo text-center">
											<a href=""><img src="images/amazon.png" alt="" /></a>
											<a href=""><img src="images/aliexpress.png" alt="" /></a>
											<a href=""><img src="images/gearbest.png" alt="" /></a>
											<a href=""><img src="images/wish.png" alt="" /></a>
											<a href=""><img src="images/esty.png" alt="" /></a>
											<a href=""><img src="images/ebay.png" alt="" /></a>
											<a href=""><img src="images/rakuten.png" alt="" /></a>
										</div>
										<Slider {...settings}>
											<div>
												<div className="landing-heading">
													<h1 className="text-white text-center mb-0 colfax-bold">“The best products, from the best sites, all in one app.”</h1>
												</div>
											</div>
											<div>
												<div className="landing-heading">
													<h1 className="text-white text-center mb-0 colfax-bold">“It’s one of the best places on the web to find product ideas.”</h1>
												</div>
											</div>
											<div>
												<div className="landing-heading">
													<h1 className="text-white text-center mb-0 colfax-bold">“I created three 6-figure stores from products i found here.”</h1>
												</div>
											</div>
											<div>
												<div className="landing-heading">
													<h1 className="text-white text-center mb-0 colfax-bold">“It saves me so much time. I couldn’t dropship without it.”</h1>
												</div>
											</div>
											<div>
												<div className="landing-heading">
													<h1 className="text-white text-center mb-0 colfax-bold">“I use it everyday to find the best products to sell.”</h1>
												</div>
											</div>
										</Slider>
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
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="auth-page-footer text-center">
						<Container>
							<Row>
								<Col xl="6" lg="6" md="6" xs="12" sm="6">
									<div className="shopify-logo">
										<img className="img-fluid" src="images/shopyfy-logo.png" alt="" />
									</div>
								</Col>
								<Col xl="6" lg="6" md="6" xs="12" sm="6" className="position-relative">
									<div className="bottom-image">
										<img className="img-fluid" src={slideProducts} alt="" /> 
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

export default FormSignUpComponent;
