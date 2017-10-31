import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import BooksForm from "./booksForm.js"

class Admin extends React.Component{
  render(){
    return(
        <Grid>
          <Col>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <BooksForm/>
              </Col>
            </Row>
          </Col>
        </Grid>
    );
  }
}

export default Admin;
