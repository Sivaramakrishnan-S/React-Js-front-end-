import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
export class Daythree extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "--->DayGlow Cafe",
      }
    }
    styles = {
        fontStyle: 'Italic',
        color: 'Purple',
        fontSize: '28px',
      };
      
render() {
    return (
      <center>
      <div>
        <h1 style={this.styles}>{this.state.message}</h1>
        <h6> “ May your coffee be strong and your Monday be short.”</h6>
        <div className='Cafe'><Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.justdial.com/Coimbatore/Coffee-Shops/nct-10104727">Cofee</Nav.Link>
            <Nav.Link href="https://www.justdial.com/Coimbatore/Tea-Stalls/nct-10853304">Tea</Nav.Link>
            <Nav.Link href="#https://www.justdial.com/Coimbatore/Pastry-Shops/nct-10355951">Pastries</Nav.Link>
            <Nav.Link href="#Cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      </div>
      </center>
    )
}
}
export default Daythree;
