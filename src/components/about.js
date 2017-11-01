import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import TypeWriter from 'react-typewriter';

class About extends React.Component{
  render(){
    return(
      <div style={{textAlign:"center", margin:' 50px 50px'}}>
        <Grid>
          <Row className="show-grid">
            <br/>
            <Col>The is a mock example of a bookstore with the ability to upload book info and add it to cart. </Col>
            <Col>Technologies I used in this application includes, HTML, CSS, Javascript, Node.js, Express, MongoDB, React.js, Redux, Bootstrap.</Col>
          </Row>
          <hr/>
          <Row className="show-grid">
            <Col >What is React JS?<br/><br/>ReactJS basically is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. It’s used for handling view layer for web and mobile apps. React also allows us to create reusable UI components.<br/><br/>React allows developers to create large web applications which can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in application.</Col>
          </Row>
          <br/>
          <Row className="show-grid">
            <Col ><bold>Redux</bold> is an open-source JavaScript library designed for managing application state. It is primarily (but not mandatorily) used together with React for building user interfaces.</Col>
          </Row>
        </Grid>
      </div>
    )
  }
}


export default About;
