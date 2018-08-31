import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'
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
                <Row>
                    <Col md = "6">
                        <Col md = "8">
                            <h1>{this.props.title}</h1>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col sm = "1"></Col>
                    <Col sm = "2">
                        <h6>Jonathan Blow</h6>
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
            </div>

        );
    
        return post;
    }
}


export default expandedPost;