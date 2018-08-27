import React, { Component } from 'react';
import './App.css';
import Blogs from '../src/Blog/Blogs'
import axios from 'axios'
import { Row, Container } from 'reactstrap';
import Navbar from '../src/Components/Navbar/Navbar'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // blogs: [
      //   {title: "Jon is cool", author: "Jon Blow", body: "Some text."},
      //   {title: "Jon is the coolest", author: "Jen", body: "Some text."},
      //   {title: "I love Jon", author: "Cooper", body: "Some text."}
      // ]
      blogs:[],
      showBlogs: false,
      buttonMessage: "show"
    }
  }


  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts`)
  //     .then(res => {
  //       const resultBlogs = res.data;
  //       this.setState({ blogs: resultBlogs });
  //     })
  // }

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
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple Blogging App</h1>
        </header> */}

        <Navbar showBlogs = {() => this.loadBlogs()} 
                btnMessage = {this.state.buttonMessage}
        />
     
        <Container>  
        <Row>
        <Blogs blogs = {this.state.blogs}/>
        </Row>
        </Container>
       
      </div>
    );
  }
}

export default App;
