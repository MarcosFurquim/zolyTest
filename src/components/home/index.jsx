
import React, { Component } from 'react';
import Plan from '../plan';
import FormZoly from '../form';
import { Row, Col, } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
        <Row>
        <Col md="6">
          <Plan/>
        </Col>
        <Col md="6">
          <FormZoly handler={this.props.handler}/>
        </Col>
      </Row>
    )
  }
}