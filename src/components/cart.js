import React from 'react';
import {connect} from 'react-redux';
import Panel from "react-bootstrap/lib/Panel"
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import Label from 'react-bootstrap/lib/Label'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import Modal from 'react-bootstrap/lib/Modal'
import {bindActionCreators} from 'redux';
import {deleteCartItem, updateCartQuantity } from "../actions/cartActions"

class Cart extends React.Component{
  constructor(){
    super();
    this.state={
      showModal:false
    }
  }

  close(){
    this.setState({showModal: false})
  }

  open(){
    this.setState({showModal: true})
  }

  onDelete(_id){
    // console.log(_id);
    // create copy of current cart
      const currentBooktoDelete= this.props.cart;
      const indexToDelete = currentBooktoDelete.findIndex(
        function(cart){
          return cart._id === _id;
        }
      )
      let cartAfterDelete = [...currentBooktoDelete.slice(0,indexToDelete),
      ...currentBooktoDelete.slice(indexToDelete +1)]

    this.props.deleteCartItem(cartAfterDelete);
  }

  render(){
    if (this.props.cart[0]){
      return this.renderCart();
    }
    else{
      return this.emptyCart();
    }
  }


  emptyCart(){
    return (
      <Panel header='CART' bsStyle="primary">
        <Row>
          <Col xs={12}>
            <h6>Your Shopping Cart is Empty.</h6>
          </Col>
        </Row>
      </Panel>


    )
  }
  IncreQuantity(_id){
    this.props.updateCartQuantity(_id, 1, this.props.cart)
  }
  DecreQuantity(_id, quantity){
    if (quantity>1){
      this.props.updateCartQuantity(_id, -1, this.props.cart)
    }
  }

  renderCart(){
    const cartItemsList= this.props.cart.map(function(cartArr){
      return(
        <Panel
          key={cartArr._id}
          >
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartArr.title}</h6>
              <h6>price:{cartArr.price}$</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>qty. <Label bsStyle="success">{cartArr.quantity}</Label></h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{minWidth:'300px'}}>
                <Button bsStyle="default" bsSize="small" onClick={this.DecreQuantity.bind(this,cartArr._id, cartArr.quantity)}>_</Button>
                <Button bsStyle="default" bsSize="small" onClick={this.IncreQuantity.bind(this,cartArr._id)}>+</Button>
                <span></span>
                <Button onClick={this.onDelete.bind(this, cartArr._id)} bsStyle="danger" bsSize="small">Delete</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>

      )
    }, this)
    return(
      <Panel header='CART' bsStyle="primary">
        {cartItemsList}
        <Row>
          <Col xs={12}>
            <h6>Total amount: {this.props.totalAmount}$</h6>
            <Button bsStyle='success' bsSize="small" onClick={this.open.bind(this)}>
              PROCEED TO CHECKOUT
            </Button>
          </Col>
        </Row>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
         <Modal.Header closeButton>
           <Modal.Title>Thank You!</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <h3>Your order has been saved.</h3>
         </Modal.Body>
         <Modal.Footer>
           <Col xs={6}>
             <h6>Your total $ :{this.props.totalAmount}</h6>
           </Col>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
       </Modal>
       </Panel>
    )
  }
}
function mapStateToProps(state){
  return{
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount

  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    deleteCartItem:deleteCartItem,
    updateCartQuantity:updateCartQuantity
    //OtherActions: xxxx
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
