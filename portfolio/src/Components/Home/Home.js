import React from 'react';
import {Jumbotron,Container} from 'reactstrap'
import './Home.css'

const Home = () => {
    return (
        <div className ="Home">
        <Jumbotron fluid>
          <Container fluid>
            
            <h1 className="display-3"> blogging </h1>
            <p className="lead">- jonathan blow</p>
          
          </Container>
        </Jumbotron>
      </div>
    )
};

export default Home;