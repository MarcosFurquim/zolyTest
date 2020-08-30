import React, { Component } from 'react';
import styled from 'styled-components';
import {cpfMask,celMask} from '../../utils/masks'
import MaskedInput from 'react-text-mask'
import InputMask from 'react-input-mask'

const GroupField = styled.div`
    margin-bottom: 22px;
`

const LabelField = styled.label`
    font-size: 14px;
    line-height: 19px;
    display: block;
`

const InputField = styled.input`
    background: #F2F2F2;
    border-radius: 8px;
    border: none;
    display:block;
    width: 100%;
    height:48px;
    padding: 15px;
`

const MaskedInputStyled = styled(MaskedInput)`
background: #F2F2F2;
border-radius: 8px;
border: none;
display:block;
width: 100%;
height:48px;
padding: 15px;
`

export default class FormField extends Component {
    constructor(props) {
        super(props);
        this.state = { maskedValue: '', required:'' }
       
    }
    componentDidMount () {
        this.required()
    }


    onChangeData(e) {
        this.setState({ maskedValue: e.target.value});
        if(e.target.name =='cpf') {
            this.setState({ maskedValue: cpfMask(e.target.value) });
        }
        if(e.target.name =='celphone') {
            this.setState({ maskedValue: celMask(e.target.value) });

        }
       

    }

     required() {
        this.setState({required: this.props.required ? 'required' : ''}) ;
      }

    render() {
        const { maskedValue,required } = this.state
        return (
                <GroupField>
                    <LabelField>{this.props.label}</LabelField>
                    <InputField placeholder={this.props.placeholder} name={this.props.name} onChange={this.onChangeData.bind(this)} value={maskedValue} type={this.props.type || 'text'} required={required}/>
                </GroupField>
        )
    }
}