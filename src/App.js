import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation,Drawer, Content, Button, Footer, FooterSection} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

 
class App extends Component {
  render() {
    return (
      <div>
    <div style={{height: '500px', position: 'relative'}}>
    <Layout className="grande" style={{background:"url('https://i.imgur.com/AKmuCRr.png') center / cover"}}>
        <Header title="Title" style={{background:'rgba(249,249,249,0.10)', color: 'white'}} >
            <Navigation  >
                <Link to="/projects" className="text-menu">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>


                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>    
            </Navigation>
        </Drawer>
        <div className="banner-text">

<div id="conteudo">
<p id="apresentacao">Oi, tudo bem? Meu nome é <span id="special">Sabrina Andrade</span>, sou apaixonada por desenvolvimento web e estou sempre me atualizando sobre novas tecnologias. Criei este portfólio para você conhecer meu trabalho. Espero que goste!</p>
<div className="btn">
<Link to="/projects" className="btn-portfolio botao">Portfólio</Link>
</div>
</div>

</div>
     
    </Layout>
    </div>
    <Content>
            <div className="page-content" />
            <Main/>
        </Content>   


<Footer >
    <FooterSection type="middle">
            <p className="text-footer">Copyright 2018 Programação: Sabrina Andrade | Design: Sabrina Andrade</p>
    </FooterSection>
</Footer>
           
</div>
    );
  }
}

export default App;
