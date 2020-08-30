
import React, { Component } from 'react';
import Plan from '../plan';
import FormZoly from '../form';
import { Row, Col } from 'react-bootstrap';

export default class Home extends Component {

  render() {
    return (
        <Row>
        <Col>
          <Plan/>
        </Col>
        <Col>
          <FormZoly/>
        </Col>
      </Row>
    )
  }
}