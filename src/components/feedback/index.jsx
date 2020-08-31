
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components'
import StatusCheck from '../statusCheck';

const HeaderStyled = styled.h1`
    margin-bottom:41px;
    text-align:center;
`;

const NameField = styled.span`
    font-size:14px;
    display:block;
`
const ValueField = styled.span`
    font-size:14px;
    font-weight:700;
    display:block;
`
const Link = styled.a`
    display:block;
    text-align:center;
    margin-top:35px;
    font-weight: bold;
    font-size: 18px;
    color: #004691;
    text-decoration: none;
`
const BoxStyled = styled.div`
    background-color:#FFF;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    max-width:480px;
    padding: 25px 20px 28px;
    margin: 0 auto;
`;

export default class Feedback extends Component {



  render() {
    return (
        <Row className="align-items-center justify-content-center">
            <Col>
                <HeaderStyled><StatusCheck/>Tudo Certo, {this.props.name}</HeaderStyled>
                <BoxStyled>
                    <NameField>E-mail</NameField>
                    <ValueField>{this.props.email}</ValueField>
                    <NameField>Celular</NameField>
                    <ValueField>{this.props.celphone}</ValueField>
                </BoxStyled>
                <Link>Fique atento ao seu e-mail para os próximos passos!</Link>
            </Col>
      </Row>
    )
  }
}