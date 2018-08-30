import React,{Component} from 'react';
import Blog from './Blog';
import { Row, Col, Container } from 'reactstrap';

//component contains the list of blog cards, dynamically rendered.

class Blogs extends Component {

    state = {
        loadedPost: null
    }

    postSelectedHandler = (id) => {
        this.setState({loadedPost: id})
    }

    render(){
        const posts = this.props.blogs.map(blog => {
            return (<Col sm= "3" key = {blog.id}><Blog
            id = {blog.id}
            title = {blog.title}
            body = {blog.body}
            clicked = {() => this.postSelectedHandler(blog.id)}
            blogSelection = {this.props.singleBlogSelected}
             /></Col>)
        }
    )
     return ( 
        <div>
        <Container>
            <Row>
                {posts}
            </Row>
        </Container>
        </div>
        )
    
        



        
    }


}

export default Blogs;