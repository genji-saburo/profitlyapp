import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import '../styles/components/authComponent.css';

import fire from "../helpers/fire";

class FormSignUpComponent extends Component {

	constructor(props) {
		super(props);
		fire.auth().signOut();
		this.state = {
			email : "",
			password : "",
		}
	}

	login = () => {
		console.log(this.state);
		fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
			console.log("success");
			this.props.history.push("/home");
		}).catch((error) =>{
			console.log(error);
		});
		
	}
	handleChange = (e) =>{
		this.setState({[e.target.name]: e.target.value});
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
												<Row>
													<Col xl="12" md="12" lg="12" xs="12" sm="12">
														<FormGroup>
															<Label for="email">Email address:</Label>
															<Input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} placeholder="johnsmith@gmail.com" />
														</FormGroup>
													</Col>
													<Col xl="12" md="12" lg="12" xs="12" sm="12">
														<FormGroup>
															<Label for="password">Password</Label>
															<Input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
														</FormGroup>
													</Col>
													<Col xl="12" md="12" lg="12" xs="12" sm="12" className="mt-3">
														<Button className="btn btn-block btn-green avenir-black" onClick={this.login}>Login</Button>
													</Col>
												</Row>
											</Col>											
										</Row>
										<Row className="justify-content-center">
											<Col xl="9" md="9" lg="9" xs="12" sm="9">
												<div className="auth-link mt-2 text-center">
													<p>Forgot your password?</p>
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
