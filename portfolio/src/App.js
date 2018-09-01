import React, { Component } from 'react';
import './App.css';
import {Container} from 'reactstrap'
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
      
      <div >
      <Container className = "App">
        <BrowserRouter>
          <div>
            <Navbar />
          </div>
        </BrowserRouter>
      </Container>
      </div>
    );
  }
}

export default App;
