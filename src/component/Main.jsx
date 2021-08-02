import {  NavLink } from 'react-router-dom';
import { Button,Accordion,Col } from 'react-bootstrap';


export default function name(params) {
    return(
    <>
<Col xs={11} sm={11} md={8}  lg={6} xl={5} xxl={4}>
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Скрыть</Accordion.Header>
    <Accordion.Body>
     В Учебном проекте  был использован React,  Firebase, Bootstrap, React-Bootsrap <br/>
     Все товары реальные и  были взяты с Розекти  <br/>
     Много чего  в проекте нету и врят ли появятся. <br/>
      На телефоне отображатся корректно<br/>
      От цен я тоже в шоке
      <NavLink to="/swimwear" className=" btn nav-link" exact><Button variant="secondary">Купальники</Button>{' '}</NavLink>
    <NavLink to="/genskie-sarafani" className=" btn nav-link" exact>{<Button variant="secondary">Сарафаны</Button>}</NavLink>

    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>

 
 


</Col>

    </>
    )
}