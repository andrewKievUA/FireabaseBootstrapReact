import { Card } from 'react-bootstrap';

import "./cardGoodsSqare.css"
import { NavLink } from 'react-router-dom';

import "./cardGoodsSqare.css"
export default function  dd (props) {
  
   //console.log(props.toProps)


    return (
      
     
      <>
       
 <Card>
    
    <NavLink to={"/genskie-sarafani/solo/"+props.toProps.id} className="btn  nav-link" exact>
      
    <Card.Img variant="top"  src={props.imgSrc}  />
      </NavLink> 
    <Card.Body>
     {props.toProps.name}
      <Card.Text>
        id= {props.toProps.id} <br/> 
        

      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Title>  {props.toProps.price} ₴  </Card.Title>

      
      
    </Card.Footer>
  </Card>


</>
    );
  }