import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../styles/components/headerComponent.css';

class HeaderComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {

		}
	}
	render() {
		return(
			<Fragment>
				<div className="header">
					<Container>
						<Row className="justify-content-center">
							<Col xl={4}>
								<div className="header-logo text-center">
									<img className="img-fluid" src="images/footer-logo.png" alt="" />
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</Fragment>
		)
	}
};

export default HeaderComponent;
