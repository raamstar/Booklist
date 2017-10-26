import React from 'react';
import {connect} from 'react-redux';
import Panel from "react-bootstrap/lib/Panel"
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import Label from 'react-bootstrap/lib/Label'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import {bindActionCreators} from 'redux';
import {deleteCartItem} from "../actions/cartActions"

class Cart extends React.Component{

  onDelete(_id){
    // console.log(_id);
    // create copy of current cart
      const currentBooktoDelete= this.props.cart;
      const indexToDelete = currentBooktoDelete.findIndex(
        function(cart){
          console.log('cart_id',cart._id);
          console.log('_id',_id);
          return cart._id === _id;
        }
      )
      let cartAfterDelete = [...currentBooktoDelete.slice(0,indexToDelete),
      ...currentBooktoDelete.slice(indexToDelete +1)]
      console.log("after",cartAfterDelete);

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
    return (<div></div>)
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
                <Button bsStyle="default" bsSize="small">_</Button>
                <Button bsStyle="default" bsSize="small">+</Button>
                <span></span>
                <Button onClick={this.onDelete.bind(this, cartArr._id)} bsStyle="danger" bsSize="small">Delete</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>

      )
    }, this)
    return(
      <Panel header='Cart' bsStyle="primary">
        {cartItemsList}
      </Panel>
    )
  }
}
function mapStateToProps(state){
  return{
    cart: state.cart.cart
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    deleteCartItem:deleteCartItem
    //OtherActions: xxxx
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
