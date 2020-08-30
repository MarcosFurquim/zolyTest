import React, { Component } from 'react';
import styled from 'styled-components'

const PlanDetailStyled = styled.div`
    background-color:#FFF;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    max-width:480px;
    padding: 25px 20px 28px;

    @media (max-width: 991px) {
        flex-direction: column;
    }
`;

const Wrapper = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    max-width: 100%;
    padding:  0px 15px;
    &:first-of-type {
        border-right: 1px solid #DADADA;
    }
    @media (max-width: 991px) {
        &:first-of-type {
            border-right: none;
            border-bottom: 1px solid #DADADA;
            padding-bottom:15px;
        }
        &:last-of-type {
            padding-top:15px;
        }
    }
`;
const NamePlan = styled.span`
    color:#004691;
    display: block;
    font-size: 20px;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
`;

const SizePlan = styled.span`
    color: #51A70D;
    font-weight: bold;
    font-size: 40px;
    line-height: 54px;
`;

const Currency = styled.span``;
const Period = styled.span``;
const PricePlan = styled.span`
    color: #6C757D;
    font-weight: bold;
    font-size: 40px;
    line-height: normal;

    & ${Currency},& ${Period}  {
        display: inline-block;
        font-size:1rem;
    }
   
`;



export default class PlanBox extends Component {

    render() {
      return (
        <PlanDetailStyled>
            <Wrapper>
                <NamePlan>Plano Light</NamePlan>
                <SizePlan>4,5GB</SizePlan>
            </Wrapper>
            <Wrapper>
                <PricePlan>
                    <Currency>R$</Currency>44,99<Period>/mês</Period></PricePlan>
            </Wrapper>
        </PlanDetailStyled>
      );
    }
  }
