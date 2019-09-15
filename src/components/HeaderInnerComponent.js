import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Input,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import '../styles/components/headerInner.css';
import '../styles/index.css';

class HeaderInnerComponent extends Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return(
			<Fragment>
				<div className="header-inner">
					<Container fluid={true}>
						<Row>
							<Col xl={4}>
								<div className="header-search">
									<Form className="form-search">
										<Input type="text" name="search" placeholder="Search all products..." />
									</Form>
								</div>
							</Col>
							<Col xl={4}>
								<div className="top-logo text-center">
									<img className="img-fluid" src="images/footer-logo.png" alt="" />
								</div>
							</Col>
							<Col xl={4}>
								<div className="navigation">
									<Navbar light expand="md">
										<NavbarToggler onClick={this.toggle} />
										<Collapse isOpen={this.state.isOpen} navbar>
											<Nav className="ml-auto" navbar>
											<NavItem>
												<NavLink className="home" href="">Home</NavLink>
											</NavItem>
											<NavItem>
												<NavLink className="like" href="">Like</NavLink>
											</NavItem>
											<NavItem>
												<NavLink className="dashboard" href="">Dashboard</NavLink>
											</NavItem>
											<UncontrolledDropdown nav inNavbar>
												<DropdownToggle nav caret>
													<span className="profile-img"></span>
												</DropdownToggle>
												<DropdownMenu right>
													<NavItem>
														<NavLink href="">About Profitly</NavLink>
													</NavItem>
													<NavItem>
														<NavLink href="">Press</NavLink>
													</NavItem>
													<NavItem>
														<NavLink href="">Affiliates</NavLink>
													</NavItem>
													<NavItem>
														<NavLink href="">Pricing</NavLink>
													</NavItem>
													<NavItem>
														<NavLink href="">My Account</NavLink>
													</NavItem>
													<NavItem>
														<NavLink href="/login">Logout</NavLink>
													</NavItem>
												</DropdownMenu>
											</UncontrolledDropdown>
											</Nav>
										</Collapse>
									</Navbar>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</Fragment>
		)
	}
};

export default HeaderInnerComponent;
