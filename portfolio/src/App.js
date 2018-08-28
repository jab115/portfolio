import React, { Component } from 'react';
import './App.css';
import Blogs from '../src/Blog/Blogs'
import axios from 'axios'
import { Row, Container } from 'reactstrap';
import Navbar from '../src/Components/Navbar/Navbar'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogs:[],
      showBlogs: false,
      buttonMessage: "show"
    }
  }

  loadBlogs = (event) => {
    const show = !this.state.showBlogs
    this.setState({showBlogs: show});
    let message = null;
    if (show){
       message = "hide"
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const resultBlogs = res.data;
        this.setState({ blogs: resultBlogs,
                        buttonMessage: message
                       });
      });
    } else {
      message = "show"
      this.setState({blogs: [],
                    buttonMessage: message 
                    });
    }
    

  }

  render() {
    
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar showBlogs = {() => this.loadBlogs()} 
                btnMessage = {this.state.buttonMessage}
        />
        <Container>  
        <Row>
        <Blogs blogs = {this.state.blogs}/>
        </Row>
        </Container>
       
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
