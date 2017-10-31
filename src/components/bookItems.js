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

  handleCart(){
    const book=[...this.props.cart,{
      _id: this.props._id,
      title: this.props.title,
      description: this.props.description,
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
      <Well>
        <Row>
          <Col xs={6} md={4}>
            <Image src={this.props.image}  width="200px" />
          </Col>
          <Col xs={12}>
            <h2>{this.props.title}</h2>
            <h4>{this.props.description}</h4>
            <h4>USD:{this.props.price}$</h4>
            <Button style={{"textAlign": "center"}} onClick={this.handleCart.bind(this)} bsStyle='primary'>Buy Now</Button>
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
