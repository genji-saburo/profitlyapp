import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import '../styles/components/authComponent.css';

class FormSignUpComponent extends Component {

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
									<Form className="w-100 form-wrp">
										<Row className="justify-content-center">
											<Col xl="7" md="7" lg="7" xs="12" sm="7">
												<FormGroup className="mb-0">
													<Label for="first_name">Enter your first and last name:</Label>
												</FormGroup>
												<Row>
													<Col xl="6" md="6" lg="6" xs="12" sm="6">
														<FormGroup>
															<Input type="text" name="first_name" id="first_name" placeholder="First Name" />
														</FormGroup>
													</Col>
													<Col xl="6" md="6" lg="6" xs="12" sm="6">
														<FormGroup>
															<Input type="text" name="last_name" id="last_name" placeholder="Last Name" />
														</FormGroup>
													</Col>
													<Col xl="12" md="12" lg="12" xs="12" sm="12">
														<FormGroup>
															<Label for="email">Enter your email address:</Label>
															<Input type="email" name="email" id="email" placeholder="johnsmith@gmail.com" />
														</FormGroup>
													</Col>
													<Col xl="12" md="12" lg="12" xs="12" sm="12">
														<FormGroup>
															<Label for="new_password">New Password</Label>
															<Input type="password" name="new_password" id="new_password" placeholder="New Password" />
														</FormGroup>
													</Col>
													<Col xl="12" md="12" lg="12" xs="12" sm="12">
														<FormGroup>
															<Label for="confirm_password">Confirm Password</Label>
															<Input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" />
														</FormGroup>
													</Col>
													<Col xl="12" md="12" lg="12" xs="12" sm="12" className="mt-3">
														<Button className="btn btn-block btn-green avenir-black">Submit</Button>
													</Col>
												</Row>
											</Col>											
										</Row>
										<Row className="justify-content-center">
											<Col xl="9" md="9" lg="9" xs="12" sm="9">
												<div className="auth-link mt-2 text-center">
													<p>By continuing, you agree to Profitly’s Terms of Service and Privacy Policy, and to receiving marketing emails from Profitly.</p>
												</div>
											</Col>
										</Row>
									</Form>
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

export default FormSignUpComponent;
