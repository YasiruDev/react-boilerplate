import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <div className="header">
          <Container className="container">
            <Row>Header</Row>
          </Container>
        </div>
      </>
    );
  }
}
export default withRouter(Header);
