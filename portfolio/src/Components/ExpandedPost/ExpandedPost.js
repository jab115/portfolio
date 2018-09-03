import React, { Component } from 'react';
import {Row, Col, Container} from 'reactstrap'
import axios from 'axios';

import './ExpandedPost.css';

class expandedPost extends Component {


    deletePostHandler =() => {
            axios.delete('/posts/'+ this.props.id)
                .then( response =>{
                    console.log(response)
                })
    }

    render () {
       
       const post = (
            <div className="ExpandedPost">
                <Container>
                <img src="https://picsum.photos/318/180/?random" alt = ""/>
                <div>   
                    <h1>{this.props.title}</h1>
                </div>
                <Row>
                    <Col sm = "2">
                        <h6><emp>jonathan blow</emp></h6>
                    </Col>
                </Row>
                <Row>
                    <Col sm = "12">
                    <p>{this.props.body}</p>
                    </Col>
                </Row>
                
                <div className="Edit">
                    <button className="Delete" onClick = {this.deletePostHandler}>Delete</button>
                </div>
                </Container>
            </div>

        );
    
        return post;
    }
}


export default expandedPost;