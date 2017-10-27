import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import Badge from 'react-bootstrap/lib/badge';


class Menu extends React.Component{

  render(){
    return(
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink exact to ="/">BookStore</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem><NavLink exact to ="/"> Home </NavLink></NavItem>
              <NavItem><NavLink exact to ="/contact"> Contact </NavLink></NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="/admin">Admin</NavItem>
              <NavItem eventKey={2} href="/cart">Your Cart&nbsp;&nbsp;
                { (this.props.totalQTY > 0) ? (<Badge className="badge">{this.props.totalQTY}</Badge>):('')}
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    totalQTY: state.cart.totalQTY
  }
}
export default connect(mapStateToProps)(Menu);
