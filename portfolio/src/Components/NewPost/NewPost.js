import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

export class NewPost extends Component {
    render(){
        return(
            <Row>
            <Col sm = '3'></Col>
            <Col sm = '6'>
            <Form>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input type="text" name="email" id="exampleEmail" placeholder="Title" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Author</Label>
              <Input type="text" name="password" id="examplePassword" placeholder="Author" />
            </FormGroup>
              <FormGroup>
              <Label for="exampleText">Blog</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          </Col>
          <Col sm = '3'></Col>
          </Row>
        )
    }
}

