import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactStars from 'react-stars';
import '../styles/components/FooterComponent.css';
import '../styles/index.css';

class FooterComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {

		}
	}
	render() {
		return(
			<Fragment>
				<div className="footer bg-blue">
					<Container>
						<Row>
							<div className="footer-widget">
								<div className="footer-logo">
									<img className="img-fluid" src="images/footer-logo.png" alt="" />
								</div>
								<ul>
									<li>
										Profitly is the best way for anyone to find the best products to sell online. The future of eCommerce.
									</li>
									<li className="mt-3"><img className="img-fluid" src="images/powered-by.png" alt="" /></li>
								</ul>
							</div>
							<div className="footer-widget">
								<h4 className="text-white colfax-bold">PROFITLY</h4>
								<ul>
									<li><a href="">Pricing</a></li>
									<li><a href="">About Us</a></li>
									<li><a href="">Press</a></li>
								</ul>
							</div>
							<div className="footer-widget">
								<h4 className="text-white colfax-bold">SITEMAP</h4>
								<ul>
									<li><a href="">Home</a></li>
								</ul>
							</div>
							<div className="footer-widget">
								<h4 className="text-white colfax-bold">PROFITLY INC.</h4>
								<ul>
									<li>75 Broadway <br /> San Francisco, CA <br /> 94441</li>
								</ul>
							</div>
							<div className="footer-widget">
								<div className="rating-star">
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
								<ul>
									<li>
										Find the best products to sell online with Profitly.
									</li>
								</ul>
								<Row>
									<Col xl="9">
										<a href="" className="btn btn-block btn-white avenir-black">Affiliates</a>
									</Col>
								</Row>
							</div>
						</Row>
					</Container>
				</div>
				<div className="copyright">
					<Container>
						<Row>
							<Col xl="5" lg="5" md="5" xs="12" sm="5">
								<p className="mb-0">Copyright &copy; 2019 Profitly. All rights reserved.</p>
							</Col>
							<Col xl="2" lg="2" md="2" xs="12" sm="2">
								<div className="shopify-logo">
									<img className="img-fluid" src="images/shopyfy-logo.png" alt="" />
								</div>
							</Col>
							<Col xl="5" lg="5" md="5" xs="12" sm="5">
								<ul className="footer-links mb-0">
									<li><a href="">Contact Us</a></li>
									<li><a href="">Terms of Service</a></li>
									<li><a href="">Privacy Policy</a></li>
								</ul>
							</Col>
						</Row>
					</Container>
				</div>
			</Fragment>
		)
	}
};

export default FooterComponent;
