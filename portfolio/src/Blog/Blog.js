import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


const blog = (props) => {
    return (
        <div>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>Jon Blow</CardSubtitle>
            <CardText>{props.body.substring(0,50)}</CardText>
            <Button  color = "danger" onClick={props.clicked}>expand</Button>
          </CardBody>
        </Card>
        </div>
    
    )
}

export default blog;