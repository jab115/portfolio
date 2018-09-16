import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import axios from 'axios'


export class NewPost extends Component {
    state = {
      blog: {
        title : null,
        author: null,
        body : null,
        src : null
      }
      
    }
   
    // componentDidMount(){
    //   const blog = this.state.blog
    //   axios.post(`https://blog-cd980.firebaseio.com/blogs.json`, blog)
    //         .then(response => console.log(response))
    //         .catch(error => console.log(error))
    // }
    submit = (event) =>{
      let newblog = {
        title: event.target.value.title,
        author: event.target.value.author,
        body : event.target.value.body
      }
      this.setState({
          blog: newblog
      });
      console.log(this.state.blog.title)
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
              <Input type="text"  value={title}  placeholder="Title" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">author</Label>
              <Input type="text" value={author}  placeholder="Author" />
            </FormGroup>
              <FormGroup>
              <Label for="exampleText">body</Label>
              <Input type="textarea" value={body}  />
            </FormGroup>
            <Button onClick = {this.submit()}>Submit</Button>
          </Form>
          </Col>
          <Col sm = '3'></Col>
          </Row>
          </Container>
        )
    }
}

