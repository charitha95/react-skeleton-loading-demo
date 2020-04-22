import React from 'react';
import './style.css';
import { Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'

const Controlers = props => <div className='controlers'>
  <Form>
    <Form.Group as={Row} controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Circle
    </Form.Label>
      <Col sm="10" className='checkbox-wrapper'>
        <Form.Check
          type="switch"
          id="custom-switch"
          label=""
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Width
    </Form.Label>
      <Col sm="10">
        <Form.Control type="number" placeholder="75" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Height
    </Form.Label>
      <Col sm="10">
        <Form.Control type="number" placeholder="75" />
      </Col>
    </Form.Group>
    <hr></hr>
    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Color
    </Form.Label>
      <Col sm="10">
        <Form.Control type="text" placeholder="pulse: #f2f2f2" />
        <Form.Control className='mt-1' type="text" placeholder="background: grey" />
      </Col>
    </Form.Group>
    <hr></hr>
    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Width
    </Form.Label>
      <Col sm="10">
        <Form.Control type="number" placeholder="100" />
      </Col>
    </Form.Group>
    <hr></hr>
    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Count
    </Form.Label>
      <Col sm="10">
        <Form.Control type="number" placeholder="5" />
      </Col>
    </Form.Group>
    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        margin
    </Form.Label>
      <Col sm="10">
        <Form.Control type="number" placeholder="5" />
      </Col>
    </Form.Group>
    <hr></hr>
    <Row>
      <Col>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">Timeout</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

      </Col>
      <Col>
        <Button variant="primary" className='btn-apply'>Apply</Button>
      </Col>
    </Row>
  </Form>
</div>

export default Controlers;