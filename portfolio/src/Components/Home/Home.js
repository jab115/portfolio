import React from 'react';
import {Jumbotron,Container} from 'reactstrap'

const Home = () => {
    return (
        <div>
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