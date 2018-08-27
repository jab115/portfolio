import React, {Component} from 'react';
import { Nav, Button } from 'reactstrap';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav pills horizontal= "center">
        <Button color="link" onClick = {this.props.showBlogs}> {this.props.btnMessage} </Button>
        <Button color="link" onClick = {this.props.showBlogs}> new </Button>
        <Button color="link" onClick = {this.props.showBlogs}> delete </Button>          
        </Nav>
      </div>
    );
  }
}