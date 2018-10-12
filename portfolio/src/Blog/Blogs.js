import React,{Component} from 'react';
import Blog from './Blog';
import { Row, Col, Container, Button } from 'reactstrap';
import ExpanedPost from '../Components/ExpandedPost/ExpandedPost'
import axios from 'axios'
import './Blogs.css'

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
          axios.get(`https://blog-cd980.firebaseio.com/blogs.json`)
          .then(res => {
              const fetchedBlogs = [];
              for (let key in res.data){
                    fetchedBlogs.push({
                        ...res.data[key],
                        id: key
                    })
              }
            this.setState({retrievedBlogs: fetchedBlogs})
            this.setState({ blogs: 
                this.state.retrievedBlogs.slice(this.state.currentBlogHead, this.state.currentBlogHead + this.state.numberOfBlogs)});
          });
        } else {
          this.setState({blogs: []});
        }
    }

    postSelectedHandler = (id) => {
        for (let index in this.state.retrievedBlogs){
            let blog = this.state.retrievedBlogs[index]
            if (blog.id === id){
                this.setState({blogs: [blog], selectedPost: true})
            }
        }  
    }

    loadBlogsHandler = (direction) => {
        let increment = this.state.numberOfBlogs;
        let current = this.state.currentBlogHead;
        if (direction === "backward"){
            increment = -1 * increment;
        }
        this.setState({
            currentBlogHead: current + increment
        }, () =>{
                this.setState({blogs: this.state.retrievedBlogs.slice( this.state.currentBlogHead, this.state.currentBlogHead + this.state.numberOfBlogs)});
                });        
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
            src = {blog.src}
            clicked = {() => this.postSelectedHandler(blog.id)}
             /></Col>)  
            });
        }

        var buttons = {
            margin: "auto",
            width: "50%",
            padding: "10px"
          };
        
     return ( 
        <div className= "Blogs">
        <Container>
            <Row>
                { posts }
            </Row>
            <Row style = {{padding: "10px"}}/>  
            <Row>
            {this.state.blogs.length === 1 && this.state.selectedPost === true ? 
            null : 
            <div style = {buttons}>
            <Button  outline onClick = {() => this.loadBlogsHandler("backward")}>  {"<"} </Button>
            <Button  outline onClick = {() => this.loadBlogsHandler("forward")}> {">"} </Button>
            </div>}
            </Row>
            
        </Container>
        </div>
        )
    
        



        
    }


}

export default Blogs;