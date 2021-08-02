import {Component} from 'react';
import { CardGroup,Row } from 'react-bootstrap';
import CardGoodsSqare from './CardGoodsSqare';
import axios from "axios"

export default class CardGroups extends Component{
  state ={
    goods:[]
  }

  componentDidMount(){


    // {console.log(window.location.pathname.slice(0), "this stae")}



     if (window.location.pathname === "/genskie-sarafani"){
    axios.get("https://shoppromo-default-rtdb.europe-west1.firebasedatabase.app/1/-Mg4zSL7NknOGeF476El.json").then(response =>{
      //console.log(response.data[0].url,"from axios")
      this.setState(this.state.goods = response.data)
    })}


    if (window.location.pathname === "/swimwear"){
      axios.get("https://shoppromo-default-rtdb.europe-west1.firebasedatabase.app/3/-Mg6cHyu_3zXFFbNEWO_.json").then(response =>{
        
      
      //console.log(response.data[0].url,"from axios")
        this.setState(this.state.goods = response.data)
      })}



  }

//   componentDidMount (){
//     axios.post("https://shoppromo-default-rtdb.europe-west1.firebasedatabase.app/3.json",[])
         
//  .then(response=>{console.log(response)})
//  .catch(error=>{console.log(error)})
// console.log("added")
 
// }

    render() {
      // {console.log(this.state, "this stae")}  
return(

<CardGroup>
<Row xs={1} sm={2} md={3}  lg={4} xl={5} xxl={5}  className="g-13">

{ this.state.goods.map((el,index)=>{
   // console.log(el.id,"inside map")
   return(
 
   <CardGoodsSqare toProps={el}   key={index} imgSrc={el.url} 
  
  />
   
  )
})}

  </Row>
</CardGroup>
)}}








