import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Well from 'react-bootstrap/lib/Well';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBooks, deleteBooks, getBooks} from '../actions/booksActions';
import {findDOMNode} from 'react-dom'


class BooksForm extends React.Component{
  constructor(props){
  super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){
    if ((findDOMNode(this.refs.title).value=="")||
    (findDOMNode(this.refs.description).value=="")||
    (findDOMNode(this.refs.price).value=="")){
      alert("There was an error while posting")

    }else{
      const books=[{
        title:findDOMNode(this.refs.title).value,
        description:findDOMNode(this.refs.description).value,
        price:findDOMNode(this.refs.price).value,
        image: findDOMNode(this.refs.image).value
      }]
      this.props.postBooks(books)
    }

  }
  deleteBooks(){
    let bookID= findDOMNode(this.refs.delete).value;
    console.log(bookID);
    this.props.deleteBooks(bookID)
    this.props.getBooks();
  }
  render(){

    const bookList = this.props.books.map(function(booksArr){
      return(
        // <option key={booksArr._id} value={booksArr.title}>{booksArr.title}</option>
        <option key={booksArr._id} value={booksArr._id}>{booksArr.title}</option>

      )
    })

    return(
      <Well>
        <Panel header='* (required)'>
          <FormGroup controlId="title">
            <ControlLabel>Title *</ControlLabel>
            <FormControl type="text"
                        placeholder="Enter Title"
                        ref="title"
                      />
          </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel>Description *</ControlLabel>
            <FormControl type="text"
                        placeholder="Enter Description"
                        ref="description"/>
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>Price *</ControlLabel>
            <FormControl type="text"
                        placeholder="Enter Price"
                        ref="price"/>
          </FormGroup>
          <FormGroup controlId="Image URL">
            <ControlLabel>Image</ControlLabel>
            <FormControl type="text"
                        placeholder="Enter URL"
                        ref="image"/>
          </FormGroup>
          <Button bsStyle="primary" onClick={this.handleSubmit}>Save Book</Button>
        </Panel>
        <Panel style={{marginTop:'25px'}}>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>SELECT A BOOK TO DELETE</ControlLabel>
            <FormControl ref='delete' componentClass="select" placeholder="select">
              <option value="select">select</option>
              {bookList}
            </FormControl>
          </FormGroup>
          <Button bsStyle='danger' onClick={this.deleteBooks.bind(this)}>
            Delete Book
          </Button>
        </Panel>
      </Well>
    )
  }
}
function mapStateToProps(state){
  return {
    books: state.books.books
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      getBooks,
      postBooks,
      deleteBooks
    },dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
