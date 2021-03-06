import React,{Component} from 'react';
import Blog from './Blog';
import { Row, Col, Container, Button } from 'reactstrap';
import ExpanedPost from '../Components/ExpandedPost/ExpandedPost'
import axios from 'axios'

//component contains the list of blog cards, dynamically rendered.

class Blogs extends Component {

    state = {
        blogs:[],
        selectedPost: null,
        showBlogs: false,
        retrievedBlogs: [],
        currentBlogHead: 0,
        numberOfBlogs: 4
    }

    componentDidMount(){
        const show = !this.state.showBlogs
        this.setState({showBlogs: show});
        if (show){
          axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(res => {
            this.setState({retrievedBlogs: res.data})
            this.setState({ blogs: 
                this.state.retrievedBlogs.slice(this.state.currentBlogHead, this.state.currentBlogHead + this.state.numberOfBlogs)});
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
    loadBlogsHandler = (event) => {
        let current = this.state.currentBlogHead;
        let increment = this.state.numberOfBlogs;
        this.setState({
            currentBlogHead: current + increment
        }, () =>{
            this.setState({blogs: this.state.retrievedBlogs.slice( this.state.currentBlogHead, this.state.currentBlogHead + this.state.numberOfBlogs)});
        }
    );        
    }


    render(){
        var posts;
    if (this.state.blogs.length === 1 && this.state.selectedPost === true){
            var blog = this.state.blogs[0];
             posts = <ExpanedPost title = {blog.title}
                     body = {blog.body} />
    } else {
         posts = this.state.blogs.map(blog => {
            return (<Col sm= "3" key = {blog.id}>
            <Blog
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
            <Row> n </Row>
            <Row>
            {this.state.blogs.length === 1 && this.state.selectedPost === true ? 
            null : 
            <Button  outline block onClick = {() => this.loadBlogsHandler()}>load more </Button>}
            </Row>
            
        </Container>
        </div>
        )
    
        



        
    }


}

export default Blogs;