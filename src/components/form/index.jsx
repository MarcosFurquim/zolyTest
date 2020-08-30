import React, { Component } from 'react';
import styled from 'styled-components'
import FormField from '../field';

const FormStyled = styled.form`
    background: #FFF;
    border-radius: 12px;
    padding: 22px 30px 36px;
`;
const ButtonSubmitStyled = styled.input`
   background: #509E30;
   border-radius: 4px;
   padding: 13px 0;
   text-transform:uppercase;
   color: #FFF;
   display:block;
   width:100%;
   height:50px;
   border:none;
   font-weight:700;
`;



export default class FormZoly extends Component {
    constructor(props) {
        super(props)
        this.state = {} 
      }
    handleData = formData => {
        var obj = {};
        for (var key of formData.keys()) {
            obj[key] = formData.get(key);
        }
        return obj;
    }
    submitForm = e => {
    e.preventDefault();
    console.log(this,e.target);
    var data = this.handleData(new FormData(e.target));
    console.log(data);
    fetch(`https://api-modelo-teste.tkoa.me/customer`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error("Error:", err));
    }
    render() {
        return (
            <FormStyled method="post" onSubmit={this.submitForm.bind(this)}>
                <h2>Olá! Preencha seus dados</h2>
                <p>Preencha o formulário abaixo para registrar seu interesse neste produto</p>
                <FormField label="Nome completo*" name="nome" required pattern="^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,40}(?: +[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,40})+$"></FormField>
                <FormField label="Seu e-mail*" name="email" required type="mail"></FormField>
                <FormField label="Seu celular*" name="celphone" maxLength='13' placeholder="(00) 00000 0000"  required></FormField>
                <FormField label="CPF*" name="cpf" maxLength='14'  placeholder="000.000.000-00"  required ></FormField>
                <ButtonSubmitStyled type="submit" value="continuar" />
            </FormStyled>
        )
    }
}