import React,{Component} from 'react';
import Blog from './Blog';
import { Row, Col, Container } from 'reactstrap';

//component contains the list of blog cards, dynamically rendered.

class Blogs extends Component {

    render(){
        const posts = this.props.blogs.map(blog => {
            return (<Col sm= "3"><Blog
            key = {blog.title}
            title = {blog.title}
            author =  {blog.author}
            body = {blog.body}
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