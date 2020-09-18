import React, { Component } from 'react';
import Utama from './components/utama';
import {Link} from 'react-router-dom';
import Header from './Header';
import Jumbo from './Jumbo'
import Beranda from './components/beranda'
import Protokol from './components/protokol'
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavLink
} from 'react-bootstrap';


class App extends React.Component{
  render(){
    return(
      <div>
     <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/beranda"><h4>About Covid</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav class="navbar-nav ml-auto" className="justify-content-end" activeKey="/home"> 
            <Nav.Link href="/beranda">Beranda</Nav.Link>
            <Nav.Link href="/protokol">Protokol</Nav.Link>
            <Nav.Link href="/data">Data</Nav.Link>
       </Nav>
       </Navbar.Collapse>
       </Navbar> 
      <Utama />
      </div>
   
    )
  }
}
export default App;

