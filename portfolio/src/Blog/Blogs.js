import React,{Component} from 'react';
import Blog from './Blog';
import { Row, Col, Container } from 'reactstrap';
import ExpanedPost from '../Components/ExpandedPost/ExpandedPost'
import axios from 'axios'

//component contains the list of blog cards, dynamically rendered.

class Blogs extends Component {

    state = {
        blogs:[],
        selectedPost: null,
        showBlogs: false
    }

    componentDidMount(){
        const show = !this.state.showBlogs
        this.setState({showBlogs: show});
        if (show){
          axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(res => {
            const resultBlogs = res.data.slice(0, 5);
            this.setState({ blogs: resultBlogs});
          });
        } else {
          this.setState({blogs: []});
        }
    }

    postSelectedHandler = (id) => {
         axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
                 .then(response => {
                     this.setState({blogs: [response.data], selectedPost: true})
                 })
    }

    render(){
        var posts;
    if (this.state.blogs.length === 1 && this.state.selectedPost === true){
            var blog = this.state.blogs[0]
             posts = <ExpanedPost title = {blog.title}
            body = {blog.body} />
    } else {
         posts = this.state.blogs.map(blog => {
            return (<Col sm= "3" key = {blog.id}><Blog
            id = {blog.id}
            title = {blog.title}
            body = {blog.body}
            clicked = {() => this.postSelectedHandler(blog.id)}
             /></Col>)  
            })
        }
        
        
     return ( 
        <div>
        <Container>
            <Row>
                { posts }
            </Row>
        </Container>
        </div>
        )
    
        



        
    }


}

export default Blogs;