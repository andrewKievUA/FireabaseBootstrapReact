import {Component} from 'react';
import { Row,Container,Col,Accordion,Card,Badge } from 'react-bootstrap';
import {Carousel } from 'react-bootstrap';

import axios from "axios"

export default class CardGroups extends Component{
  state ={
    goods:[]
  }
  componentDidMount(){
      {console.log(window.location.pathname.slice(23))}

    if (window.location.pathname.slice(23)<=99){
    axios.get(`https://shoppromo-default-rtdb.europe-west1.firebasedatabase.app/1/-Mg4zSL7NknOGeF476El/${window.location.pathname.slice(23)}.json`).then(response =>{
    //   console.log(response.data,"from axios")
      
      this.setState(this.state.goods = response.data)
    })}

    if (window.location.pathname.slice(23)>=100){
        axios.get(`https://shoppromo-default-rtdb.europe-west1.firebasedatabase.app/3/-Mg6cHyu_3zXFFbNEWO_/${window.location.pathname.slice(23)-100}.json`).then(response =>{
          console.log(response.data,"from axios")
          
          this.setState(this.state.goods = response.data)
        })}
  }
    render() {
    //   {console.log(window.location.pathname.slice(23), "this stae")}
      const str = 'The quick brown fox jumps over the lazy dog.';
  
return(

<Container>

  <Row>
  
    <Col xs={11} sm={11} md={8}  lg={6} xl={5} xxl={4}>

    <Carousel slide={true}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.goods.url}  
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.goods.url1}  
      alt="Second slide"
    />

  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.goods.url2}  
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>


<h3>
    <Badge bg="secondary">{this.state.goods.price} ₴</Badge>
  </h3>

      <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
  
 







    <Accordion.Header> Описание</Accordion.Header>
    <Accordion.Body>{this.state.goods.description} <br/>
    Производитель {this.state.goods.country}


    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </Col>

  </Row>
</Container>
)}}

