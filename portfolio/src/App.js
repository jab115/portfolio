import React, { Component } from 'react';
import './App.css';
import { Row, Container } from 'reactstrap';
import Navbar from '../src/Components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogs:[],
      showBlogs: false,
      buttonMessage: "show",
      postSelected: false,
      selectedPostId: null
    }
  }

  render() {
    
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar showBlogs = {() => this.loadBlogs()} 
                btnMessage = {this.state.buttonMessage}
                showSelected = {this.state.postSelected}
                id = {this.state.selectedPostId}
        />
        <Container>  
        <Row>
        {/* <Blogs /> */}
        </Row>
        </Container>
       
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
