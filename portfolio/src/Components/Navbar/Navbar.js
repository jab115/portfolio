import React, {Component} from 'react';
import { Nav, Button} from 'reactstrap';
import {NavLink, Route, Switch} from 'react-router-dom'
import { NewPost } from '../NewPost/NewPost'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav pills horizontal= "center">
        <Button color="link" tag={NavLink} onClick = {this.props.showBlogs} to = '/' > {this.props.btnMessage} </Button>
        <Button color = "link" tag={NavLink} to="/new" > new </Button>
        <Button color="link" onClick = {this.props.showBlogs}> delete </Button>
        {this.props.showSelected?
        <Button color="primary" onClick = {this.props.showBlogs}> Expand Blog </Button>:
        null}          
        </Nav>
        <Switch>
        <Route path = "/" exact component = {null} />
        <Route path = "/new" exact component = {NewPost} />
        </Switch>
      </div>
      
    );
  }
}