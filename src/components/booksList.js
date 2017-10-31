import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {getBooks} from '../actions/booksActions';
import {getCart} from "../actions/cartActions";
import BookItems from './bookItems';
// import BooksForm from './booksForm';

class Bookslist extends React.Component{

  componentDidMount(){
    //dispatch getbooks
    this.props.getBooks();
    this.props.getCart();
  }

  render(){
    const booklist = this.props.books.map(function(BookArr){
      return(
        <Col xs={12} sm={6} md={4} key={BookArr._id}>
          <BookItems
            _id={BookArr._id}
            title={BookArr.title}
            description={BookArr.description}
            price={BookArr.price}
            image={BookArr.image}
          />
        </Col>
      )
    })
    return (
      <Grid>
        <Row>
          {/* <Col xs={12} sm={6} md={4}>
            <BooksForm/>
          </Col> */}
          {booklist}
        </Row>
      </Grid>
    )
  }
}
function mapStateToProps(state){
  return{
    books: state.books.books
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getBooks: getBooks,
    getCart:getCart
    //OtherActions: xxxx
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps,null, {pure:false})(Bookslist)
