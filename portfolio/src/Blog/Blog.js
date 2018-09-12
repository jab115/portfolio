import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck } from 'reactstrap';


const blog = (props) => {
    return (
        <div>
        <CardDeck>
        <Card>
          <CardImg top width="100%" src={props.src} alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>Jon Blow</CardSubtitle>
            <CardText>{props.body.substring(0,50)}</CardText>
            <Button   color = "success" onClick={props.clicked}>expand</Button>
          </CardBody>
        </Card>
        </CardDeck>
        </div>
    
    )
}

export default blog;