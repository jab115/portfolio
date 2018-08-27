import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const blog = (props) => {
    return (
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>{props.author}</CardSubtitle>
            <CardText>{props.body.substring(0,50)}</CardText>
            <Button color = "link">expand</Button>
          </CardBody>
        </Card>

    )
}

export default blog;