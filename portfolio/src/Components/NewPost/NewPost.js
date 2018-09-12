import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import axios from 'axios'


export class NewPost extends Component {
    state = {
      blog: {
        title : "some blog title",
        author: "Jonathan Blow",
        body : "Some really long blog body idk",
        src : "https://picsum.photos/318/180/?random"
      }
      
    }
    handleChange = (e, field) =>{ 
      this.setState({field: e.target.value});
    }
    componentDidMount(){
      const blog = this.state.blog
      axios.post(`https://blog-cd980.firebaseio.com/blogs.json`, blog)
            .then(response => console.log(response))
            .catch(error => console.log(error))
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
              <Input type="text"  value={this.state.title}  placeholder="Title" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">author</Label>
              <Input type="text" value={this.state.author}  placeholder="Author" />
            </FormGroup>
              <FormGroup>
              <Label for="exampleText">body</Label>
              <Input type="textarea" value={this.state.body}  />
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

