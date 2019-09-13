import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/components/footerInner.css';

import logo from "../styles/images/footer-inner-logo.png";

class FooterInnerComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {

		}
	}
	render() {
		return(
			<Fragment>
				<div className="footer-inner">
					<Container fluid={true}>
						<Row>
							<Col xl={4} lg={4} md={6} xs={12} sm={6}>								
								<ul className="footer-links">
									<li><a href="">Pricing</a></li>
									<li><a href="">Affiliates</a></li>
									<li><a href="">Press</a></li>
									<li><a href="">About Profitly</a></li>
								</ul>								
							</Col>
							<Col xl={4} lg={4} md={6} xs={12} sm={6}>
								<div className="inner-logo text-center">
									<img className="img-fluid" src={logo} alt="" />
								</div>
							</Col>
							<Col xl={4} lg={4} md={6} xs={12} sm={6}>
								<ul className="footer-links right">
									<li><a href="">Cookies</a></li>
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

export default FooterInnerComponent;
