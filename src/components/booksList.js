import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {getBooks} from '../actions/booksActions';
import BookItems from './bookItems';
import BooksForm from './booksForm';

class Bookslist extends React.Component{

  componentDidMount(){
    //dispatch getbooks
    this.props.getBooks();
  }

  render(){
    const booklist = this.props.books.map(function(BookArr){
      return(
        <Col xs={12} sm={6} md={4}>
          <BookItems
            id={BookArr.id}
            title={BookArr.title}
            description={BookArr.description}
            price={BookArr.price}/>
        </Col>
      )
    })
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <BooksForm/>
          </Col>
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
    getBooks: getBooks
    //OtherActions: xxxx
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Bookslist)
