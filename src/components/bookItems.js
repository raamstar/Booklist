import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';

class bookItems extends React.Component{
  render(){
    return(
      <Well>
        <Row>
          <Col xs={12}>
            <h2>{this.props.title}</h2>
            <h3>{this.props.description}</h3>
            <h3>USD:{this.props.price}</h3>
            <Button bsStyle='primary'>Buy Now</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}
export default bookItems;
