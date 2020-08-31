import React, { Component } from 'react';
import { Container} from 'react-bootstrap'
import styled from 'styled-components'


const BreadCrumbStyled = styled.div`
    background-color:#FFF;
    ol {
        display: flex;
        flex-wrap: wrap;
        padding: 0.75rem 1rem;
        margin:0;
        list-style: none;
        counter-reset: zoly-breadcrumb;
        li {
            counter-increment: zoly-breadcrumb;
            color: #343A40;
            opacity: 0.5;
            position: relative;
            padding-left: 25px;
            &.active {
                opacity:1;
            }
            &:before {
                content: counter(zoly-breadcrumb);
                font-size: 10px;
                position: absolute;
                left: 0;
                background: #0045BF;
                color:#FFF;
                --size:20px;
                line-height: var(--size);
                width: var(--size);
                height: var(--size);
                border-radius: 50%;
                text-align: center;
            }
            &:not(:last-of-type) {
                &:after {
                    display: inline-block;
                    padding-left: .5rem;
                    padding-right: .5rem;
                    color: #000;
                    content: "›";
                }
            }
            @media (max-width: 991px) {
                font-size: 0;
                &:not(:last-of-type):after {
                    font-size: 16px;
                    padding-left: 2rem;
                    padding-right: 2rem;
                }
            }
        }
    }
    
`

export default class BreadCrumb extends Component {

    render() {
      return (
        <BreadCrumbStyled>
        <Container>
            <ol>
                <li className="active">Dados pessoais</li>
                <li>Confirmação</li>
            </ol>
        </Container>    
        </BreadCrumbStyled>
      );
    }
  }

