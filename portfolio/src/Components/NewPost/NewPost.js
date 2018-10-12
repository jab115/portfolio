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
    //   
    // }
     submit = () =>{
       let newblog = {
         title: this.state.title,
         author: this.state.author,
         body : this.state.body
       }
       axios.post(`https://blog-cd980.firebaseio.com/blogs.json`, newblog)
           .then(response => console.log(response))
           .catch(error => console.log(error))
       
       
     }

    getTitle(e) {
      this.setState({ title : e.target.value });
    }
    getAuthor(e) {
      this.setState({ author : e.target.value });
    }
    getBody(e) {
      this.setState({ body : e.target.value });
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
              <Input type="text"  value={this.state.title}  placeholder="Title" onChange = {this.getTitle.bind(this)} />
            </FormGroup>
             <FormGroup>
              <Label for="examplePassword">author</Label>
              <Input type="text" value={this.state.author}  placeholder="Author" onChange = {this.getAuthor.bind(this)} />
            </FormGroup>
              <FormGroup>
              <Label for="exampleText">body</Label>
              <Input type="textarea" value={this.state.body} onChange = {this.getBody.bind(this)} />
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

