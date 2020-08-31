import React, { Component } from 'react';
import styled from 'styled-components'

const BoxStyled = styled.div`
    background-color:#FFF;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    max-width:480px;
    padding: 25px 20px 28px;
`;


export default class Box extends Component {

    render() {
      return (
        <BoxStyled></BoxStyled>
      );
    }
  }
