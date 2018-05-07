import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Mandracchia Law</h2>
          </Col>
          <Link to={'/'}>
            <Button color="primary" className="buttons">
              Home
            </Button>
          </Link>
          <Link to={'/AboutUs'}>
            <Button color="primary" className="buttons">
              About Us
            </Button>
          </Link>
          <Link to={'/AttProf'}>
            <Button color="primary" className="buttons">
              Attorney Profiles
            </Button>
          </Link>
          <Link to={'/AoP'}>
            <Button color="primary" className="buttons">
              Areas of Practice
            </Button>
          </Link>
          <Link to={'/FAQ'}>
            <Button color="primary" className="buttons">
              FAQ
            </Button>
          </Link>
        </Row>
      </Container>
    );
  }
}

export default NavBar;
