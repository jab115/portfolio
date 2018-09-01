import React, {Component} from 'react';
import { Nav, Button} from 'reactstrap';
import {NavLink, Route, Switch} from 'react-router-dom'
import { NewPost } from '../NewPost/NewPost'
import Blogs from '../../Blog/Blogs.js'
import Home from '../Home/Home'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav pills horizontal= "center">
          <Button color="link" tag={NavLink} to = '/' > home </Button>
          <Button color="link" tag={NavLink} to="/load"> load </Button>
          <Button color = "link" tag={NavLink} to="/new" > new </Button>
          <Button color="link" > delete </Button>
          <Button color = "link"> search </Button> 
        </Nav>
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = "/new" exact component = {NewPost} />
          <Route path = "/load" exact component = {Blogs} />
        </Switch>
      </div>
      
    );
  }
}