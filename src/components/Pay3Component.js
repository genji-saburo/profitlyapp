import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Switch from "react-switch";
import { 
	Container, 
	Row, 
	Col, 
	Button,
	Modal, 
	ModalBody, 
	ModalFooter,
	Input
  } from 'reactstrap';

import circleCheck from "../styles/images/circle-check.png";
import iconPageClose from "../styles/images/icon-payment-page-close.png";

import '../styles/components/paymentComponent.css';

class Pay3Component extends Component {

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
		return(
			<Fragment>
				<div className="payment-page-wrp">
					<div className="wrp-page-inner">
						<a href="#" className="btn-page-close"><img src={iconPageClose} alt="" /></a>
						<div className="main-content text-center">
							<Row className="justify-content-center">
								<Col xl={7} lg={7} md={7} xs={12} sm={7}>
									<div className="inner-body">
										<div className="icon-box mb-3">
											<img src={circleCheck} alt="" />
										</div>
										<div className="top-title">
											<h1>Thank You!</h1>
											<p>Enjoy unlimited access.</p>
										</div>
										<dv className="order-number-wrp">
											<div className="order-number">
												ORDER: <span>P241245</span>
											</div>
										</dv>
										<div className="payment-button mt-5">
											<Row className="justify-content-center">
												<Col xl={4} lg={4} md={4} xs={12} sm={4}>
													<Link className="btn btn-block btn-white avenir-black" to="/">Enter Trendy</Link>
												</Col>
											</Row>
										</div>
									</div>
								</Col>
							</Row>							
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
};

export default Pay3Component;
