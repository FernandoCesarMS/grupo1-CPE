import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Cartao(props) {
    return (
        <Card 
        bg="secondary"
        border="danger"
        text="light" 
        style={{ width: props.widthC }}>
        <Card.Img variant="top" src={props.img} height="350"/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <center>
            {props.text}
            </center>
          </Card.Text>
          <Card.Footer>
            <center>
              <Button variant="primary">Escolher</Button>
            </center>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
}
export default Cartao; 