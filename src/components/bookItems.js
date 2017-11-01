import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import Image from 'react-bootstrap/lib/Image'

import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions';
import {bindActionCreators} from 'redux';
import {updateCartQuantity} from "../actions/cartActions"


class bookItem extends React.Component{
  constructor(){
    super();
    this.state={
      isClicked:false
    };
  }

  onReadMore(){
    this.setState({
      isClicked:true
    })
  }

  handleCart(){
    const book=[...this.props.cart,{
      _id: this.props._id,
      title: this.props.title,
      description: this.props.description,
      author: this.props.author,
      price: this.props.price,
      quantity: 1
    }]
    //Check if cart is empty.

    if (this.props.cart.length > 0){
      //if cart is not empty, check if there are products with same _id.
      let _id = this.props._id;
      let cart_index= this.props.cart.findIndex(function(cart){
        return (cart._id===_id)
      })
      //if there are no multiple same items in the cart, just add the product
      if (cart_index === -1){
        this.props.addToCart(book)
      }else{
        this.props.updateCartQuantity(_id, 1,this.props.cart)
        ///add +1 quantity if item already in the cart.
      }
    }
    else{
      //cart is empty, we can just add the book in the cart
      this.props.addToCart(book)
    }
  }

  render(){
    return(
      <Well style={{backgroundColor:"#161416", border:"none"}}>
        <Row>
          <Col xs={6} md={4}>
            <Image src={this.props.image}  width="250px" height="350px" />
          </Col>
          <Col xs={12}>
            <h2 style={{color:'white'}}>{this.props.title}</h2>
            <h4 style={{color:'white'}}><small>by</small> {this.props.author}</h4>
            <h4 style={{color:"#727073"}}>
              {(this.props.description.length>50 && this.state.isClicked===false)?(this.props.description.substring(0,100)):(this.props.description)}
              <button className="description_button" onClick={this.onReadMore.bind(this)}>
                {(this.state.isClicked===false && this.props.description !== null && this.props.description.length>50)?("...read more"):("")}
              </button>
            </h4>
            <h4 style={{color:'white'}}>USD:{this.props.price}$</h4>
            <Button onClick={this.handleCart.bind(this)} bsStyle='primary'>Buy Now</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}
function mapStateToProps(state){
  return{
    cart:state.cart.cart
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addToCart:addToCart,
    updateCartQuantity:updateCartQuantity
  },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(bookItem);
