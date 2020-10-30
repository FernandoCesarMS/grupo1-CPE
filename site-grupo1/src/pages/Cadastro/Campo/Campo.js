import React from "react";
import { Form, Col } from "react-bootstrap";

function Campo(props) {
    if(props.col === 0){
        return (
            <Form.Group controlId={props.id}>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control placeholder={props.label} />
            </Form.Group>
        );
    } else {
        return (
            <Form.Group as={Col} controlId={props.id}>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control placeholder={props.label} />
            </Form.Group>
        );
    }
}
export default Campo; 