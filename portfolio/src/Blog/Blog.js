import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {NavLink, Route} from 'react-router-dom'
import ExpandedPost from '../Components/ExpandedPost/ExpandedPost'

const blog = (props) => {
    return (
        <div>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>Jon Blow</CardSubtitle>
            <CardText>{props.body.substring(0,50)}</CardText>
            <Button  color = "link" tag={NavLink} to = {'/' + props.id} onClick={function(event){ props.clicked; props.blogSelection}}>expand</Button>
          </CardBody>
        </Card>
        <Route path = "/:id" exact component = {ExpandedPost} />
        </div>
    
    )
}

export default blog;