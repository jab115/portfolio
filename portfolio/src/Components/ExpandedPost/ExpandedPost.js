import React, { Component } from 'react';
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
                <h1>Jon Blow</h1>
                <p>{this.props.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick = {this.deletePostHandler}>Delete</button>
                </div>
            </div>

        );
    
        return post;
    }
}


export default expandedPost;