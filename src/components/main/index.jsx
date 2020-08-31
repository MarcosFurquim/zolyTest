

import React, { Component } from 'react';
import Header from '../header'
import BreadCrumb from '../breadcrumb';
import {Container} from 'react-bootstrap';
import Home from '../home';
import Feedback from '../feedback';

export default class Main extends Component {

    constructor(props) {
        super(props)
        this.state ={}
    }

    handler = (data) => {
        console.log('here main',data);
        this.setState({
            submitted: true,
            data: data
        })
    }

  render() {
    let componentToRender;
    if (this.state.submitted) {
        const data = this.state.data
        console.log(data)
        componentToRender = <Feedback name={data.name} email={data.email} celphone={data.celphone}/>
    } else {
        componentToRender =  <Home handler={this.handler}/>
    }
    return (
        <div className="zoly">
        <Header/>
        <BreadCrumb/>
        <main>
          <Container>
              {componentToRender}
          </Container>
        </main>
    </div>
    )
  }
}