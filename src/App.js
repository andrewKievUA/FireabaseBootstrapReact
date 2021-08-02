import { Container,Navbar,Nav } from 'react-bootstrap';

import { Route, NavLink } from 'react-router-dom';
import './App.css';


import {Component} from "react"

import CardGroups from "./component/CardGroup.jsx"
import SoloCard from "./component/SoloCard.jsx"
import Main from "./component/Main.jsx"




export default class App extends Component {
state ={
 goods: []
}
  render() {
    return (
<>



<Navbar bg="light" expand="sm" >
  <Container>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="me-auto">
      <NavLink to="/" className=" btn nav-link" exact>Дом</NavLink>
      <NavLink to="/swimwear" className=" btn nav-link" exact>Купальники</NavLink>
      <NavLink to="/genskie-sarafani" className="btn  nav-link" exact>Сарафаны</NavLink> 

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>




<Route path="/genskie-sarafani/solo/" render={()=> 
 <SoloCard/> 

}/>

<Route path="/" exact={true} render={()=> 
 <Main/> 

}/>


<Route path="/swimwear"  render={()=> 
 <CardGroups/> 

}/>

<Route path="/genskie-sarafani" exact={true} render={()=> 
  <CardGroups/>
}/>

      </>
    );
  }
}

