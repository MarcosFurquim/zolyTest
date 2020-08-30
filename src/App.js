import React from 'react';
import Header from './components/header'
import './App.scss';
import BreadCrumb from './components/breadcrumb';
import {Container} from 'react-bootstrap';
import Home from './components/home';



function App() {
  return (
    <div className="zoly">
        <Header/>
        <BreadCrumb/>
        <main>
        <Container>
            <Home/>
           </Container>
        </main>
    </div>
  );
}

export default App;
