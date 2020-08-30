import React, { Component } from 'react';
import PlanBox from '../planBox';
import styled from 'styled-components'

const WarningHeader = styled.h3`
    color: #004691;
    margin-top:42px;
`

export default class Plan extends Component {

    render() {
        return (
            <div>
                 <h1>Plano Escolhido</h1>
                <PlanBox/>
                <WarningHeader>Fique atento!</WarningHeader>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non neque massa. Vestibulum porta, dolor nec pellentesque elementum, sem lorem eleifend est, quis congue tellus risus non massa. Nam sagittis dolor commodo lacus tristique, sit amet efficitur odio tincidunt.</p>
            </div>
           
        );
    }
    
}