import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Carousel from 'react-bootstrap/lib/Carousel'
import {getBooks} from '../actions/booksActions';
import {getCart} from "../actions/cartActions";
import BookItems from './bookItems';
// import BooksForm from './booksForm';

class Bookslist extends React.Component {

  componentDidMount() {
    //dispatch getbooks
    this.props.getBooks();
    this.props.getCart();
  }

  render() {
    const booklist = this.props.books.map(function(BookArr) {
      return (
        <Col xs={12} sm={6} md={4} key={BookArr._id}>
          <BookItems _id={BookArr._id} title={BookArr.title} description={BookArr.description} price={BookArr.price} image={BookArr.image}/>
        </Col>
      )
    })
    return (
      <Grid>
        <Row>
          <Carousel
            // style={{height:'450px'}}
            >
            <Carousel.Item>
              <img
                // width={"100%"}
                height={250}
                alt="900x300" src="http://www.cmis-int.org/wp-content/uploads/2014/10/documentos2.jpg"/>
              <Carousel.Caption>
                <h3>Writing a book of poetry is like dropping a rose petal down the Grand Canyon and waiting for the echo.</h3>
                <p>-Don Marquis</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                // width={1200}
                // height={450}
                alt="900x300" src="http://companies.naukri.com/depusa-careers/wp-content/uploads/sites/7784/2016/09/b5.jpg"/>
              <Carousel.Caption>
                <h3>A book is a gift you can open again and again.</h3>
                <p>-Garrison Keillor</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                // width={1200}
                // height={450}
                alt="900x300" src="http://www.einformr.com/images/book.jpg"/>
              <Carousel.Caption>
                <h3>Whenever you read a good book, somewhere in the world a door opens to allow in more light.</h3>
                <p>-Vera Nazarian</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row style={{marginTop:'50px'}}>
          {booklist}
        </Row>
      </Grid>
    )
  }
}
function mapStateToProps(state) {
  return {books: state.books.books}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBooks: getBooks, getCart: getCart
    //OtherActions: xxxx
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Bookslist)
