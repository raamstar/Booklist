import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Well from 'react-bootstrap/lib/Well';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBooks} from '../actions/booksActions';
import {findDOMNode} from 'react-dom'


class BooksForm extends React.Component{
  constructor(props){
  super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){
    const books=[{
      title:findDOMNode(this.refs.title).value,
      description:findDOMNode(this.refs.description).value,
      price:findDOMNode(this.refs.price).value
    }]
    this.props.postBooks(books)
  }

  render(){

    return(
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl type="text"
                        placeholder="Enter Title"
                        ref="title"
                      />
          </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl type="text"
                        placeholder="Enter Description"
                        ref="description"/>
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl type="text"
                        placeholder="Enter Price"
                        ref="price"/>
          </FormGroup>
          <Button bsStyle="primary" onClick={this.handleSubmit}>Save Book</Button>
        </Panel>
      </Well>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({postBooks},dispatch)

}
export default connect(null, mapDispatchToProps)(BooksForm);
