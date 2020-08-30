import React, { Component } from 'react';
import styled from 'styled-components'



const ButtonStyled = styled.form`
   background: #509E30;
   border-radius: 4px;
   padding: 13px 0;
   text-transform:uppercase;
`;
export default class FormZoly extends Component {
    render() {
        return (
            <FormStyled>
                <h2>Olá! Preencha seus dados</h2>
                <p>Preencha o formulário abaixo para registrar seu interesse neste produto</p>
                <FormField label="Nome completo*" name="nome"></FormField>
                <FormField label="Seu e-mail*" name="email"></FormField>
                <FormField label="Seu celular*" name="celphone"></FormField>
                <FormField label="CPF*" name="cpf"></FormField>
            </FormStyled>
        )
    }
}