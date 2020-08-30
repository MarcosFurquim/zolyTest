import React, { Component } from 'react';
import { Container} from 'react-bootstrap'
import logo from '../../logo-company-name.svg';
import styled from 'styled-components'


const HeaderStyled = styled.header`
background-color:#0045BF;
height:83px;
display: flex;
align-items: center;
flex-wrap: wrap;
`
const LogoStyled = styled.img`
  width: 165px;
  height:49px;
`


export default class Header extends Component {

  render() {
    return (
      <HeaderStyled>
        <Container>
          <LogoStyled src={logo} />
        </Container>
      </HeaderStyled>
    );
  }
}