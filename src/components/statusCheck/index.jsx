
import React, { Component } from 'react';
import styled from 'styled-components'

const StatusCheckStyled = styled.div`
    position:relative;
    vertical-align: middle;
    background-color: #136FE0;
    border-radius:50%;
    display: inline-block;
    --size:49px;
    line-height: var(--size);
    width: var(--size);
    height: var(--size);
    margin-right:24px;
    @media (max-width: 991px) {
        display: block;
        margin: 0 auto 12px;
    }
`
const SVGCheck = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`

export default class StatusCheck extends Component {

    render() {
        return (
            <StatusCheckStyled>
                <SVGCheck width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.92932 8.31849L3.59091 8.00736L3.2525 8.31849L1.66159 9.78118L1.26125 10.1493L1.66159 10.5173L8.02523 16.3681L8.36364 16.6792L8.70205 16.3681L22.3384 3.83076L22.7388 3.46269L22.3384 3.09461L20.7475 1.63193L20.4091 1.32079L20.0707 1.63193L8.36364 12.3954L3.92932 8.31849Z" fill="white" stroke="white"/>
                </SVGCheck>
            </StatusCheckStyled>
           
        );
    }
    
}

