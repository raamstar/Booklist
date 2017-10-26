import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions';
import {bindActionCreators} from 'redux';

class bookItem extends React.Component{

  handleCart(){
    const book=[...this.props.cart,{
      _id: this.props._id,
      title: this.props.title,
      description: this.props.description,
      price: this.props.price
    }]
    this.props.addToCart(book)
  }

  render(){
    return(
      <Well>
        <Row>
          <Col xs={12}>
            <h2>{this.props.title}</h2>
            <h3>{this.props.description}</h3>
            <h3>USD:{this.props.price}$</h3>
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
    addToCart:addToCart
  },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(bookItem);
