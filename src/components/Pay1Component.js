import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Switch from "react-switch";
import { Row, Col } from 'reactstrap';
  import iconPageClose from "../styles/images/icon-payment-page-close.png";

import '../styles/components/paymentComponent.css';

class Pay1Component extends Component {

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
						<Link className="btn-page-close" to="/home"><img src={iconPageClose} alt="" /></Link>
						<div className="main-content text-center">
							<Row className="justify-content-center">
								<Col xl={8} lg={8} md={8} xs={12} sm={8}>
									<div className="inner-body">
										<div className="top-title">
											<h1>Make More Sales</h1>
											<p>Sell 10x more products by getting access to the full list of best-selling products and suppliers.</p>
										</div>
										<div className="payment-amount">
											<span className="payment-currency">$</span>
											<span className="payment-value">5</span>
											<span className="payment-by">/month</span>
										</div>
										<div className={this.state.checked ? 'payment-period annually' : 'payment-period monthly'}>
											<Row className="align-items-center">
												<Col xl={5} lg={2} md={2} xs={12} sm={2}>
													<h5>Billed Monthly</h5>
													<p>Cancel Anytime</p>
												</Col>
												<Col xl={2} lg={2} md={2} xs={12} sm={2}>
													<Switch
														onChange={this.handleChange}
														checked={this.state.checked}
														offColor="#000e9f"
														onColor="#000e9f"
														offHandleColor="#0beb9f"
														onHandleColor="#0beb9f"
														height={40}
														width={85}
														uncheckedIcon={false}
														checkedIcon={false}
														className="react-switch"
													/>
												</Col>
												<Col xl={5} lg={2} md={2} xs={12} sm={2}>
													<h5>Billed Annually</h5>
													<p>at $60 (Save 50%)</p>
												</Col>
											</Row>				
										</div>
										<div className="payment-button">
											<Row className="justify-content-center">
												<Col xl={4} lg={4} md={4} xs={12} sm={4}>
													<Link className="btn btn-block btn-white avenir-black" to="/pay2">Continue</Link>
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

export default Pay1Component;
