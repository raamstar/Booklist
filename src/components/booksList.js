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
import TypeWriter from 'react-typewriter';


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
          <BookItems _id={BookArr._id} title={BookArr.title} description={BookArr.description} price={BookArr.price} image={BookArr.image} author={BookArr.author}/>
        </Col>
      )
    })
    return (
      <Grid>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                style={{minHeight:'250px'}}
                alt="1300x400" src="https://mistressofspiceandeverythingnicee.files.wordpress.com/2017/05/20150903173413-books-shop-fair-library-used-bookshelf-literature-study-textbooks.jpeg?w=1300&h=400&crop=1"/>
              <Carousel.Caption>
                <TypeWriter typing={1.7}>
                  <h3 id="carousel_caption">Writing a book of poetry is like dropping a rose petal down the Grand Canyon and waiting for the echo.</h3>
                  <p id="carousel_caption">-Don Marquis</p>
                </TypeWriter>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{minHeight:'250px'}}
                alt="1300x400" src="https://i.imgur.com/y6PGWWb.jpg"/>
              <Carousel.Caption>
                <TypeWriter typing={1.7}>
                  <h3 id="carousel_caption">A book is a gift you can open again and again.</h3>
                  <p id="carousel_caption">-Garrison Keillor</p>
                </TypeWriter>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{minHeight:'250px'}}
                alt="1300x400" src="http://assets.signature-reads.com/wp-content/uploads/2016/03/kids-reading-shutterstock.jpg"/>
              <Carousel.Caption>
                <TypeWriter typing={1.7}>
                  <h3 id="carousel_caption">Whenever you read a good book, somewhere in the world a door opens to allow in more light.</h3>
                  <p id="carousel_caption">-Vera Nazarian</p>
                </TypeWriter>
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
