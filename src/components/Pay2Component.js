import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Switch from "react-switch";
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import ReactStars from 'react-stars';
import iconPageClose from "../styles/images/icon-payment-page-close.png";

import '../styles/components/paymentComponent.css';

class Pay2Component extends Component {

	constructor(props) {
		super(props);   	

		this.state = {
			checked: false
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(checked) {
		this.setState({ checked });
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
				<div className="payment-page-wrp">
					<div className="wrp-page-inner">
						<Link className="btn-page-close" to="/pay1"><img src={iconPageClose} alt="" /></Link>
						<div className="main-content text-center">
							<Row className="justify-content-center">
								<Col xl={9} lg={9} md={9} xs={12} sm={9}>
									<div className="inner-body">
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
						</div>
					</div>
					<div className="payment-page-footer text-center">
						<Container>
							<Row>
								<Col xl="12" lg="12" md="12" xs="12" sm="12">
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

export default Pay2Component;
