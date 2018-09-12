import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';

export class NewPost extends Component {
    state = {
      title : null,
      author: null,
      body : null,
      imageLink : null
    }
    handleChange = (e, field) =>{ 
      this.setState({field: e.target.value});
    }

    render(){
        return(
            <Container>
            <Row>
            <Col sm = '3'></Col>
            <Col sm = '6'>
            <Form className = "form">
            <FormGroup>
              <Label for="exampleEmail">title</Label>
              <Input type="text"  value={this.state.title} onChange={this.handleChange( "title")} placeholder="Title" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">author</Label>
              <Input type="text" value={this.state.author} onChange={this.handleChange( "author")} placeholder="Author" />
            </FormGroup>
              <FormGroup>
              <Label for="exampleText">body</Label>
              <Input type="textarea" value={this.state.body} onChange={this.handleChange("body")} />
            </FormGroup>
            <Button onClick = {alert(this.title)}>Submit</Button>
          </Form>
          </Col>
          <Col sm = '3'></Col>
          </Row>
          </Container>
        )
    }
}

