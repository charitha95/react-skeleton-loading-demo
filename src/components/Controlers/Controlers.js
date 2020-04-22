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
          defaultChecked={true}
          type="switch"
          id="custom-switch"
          label=""
          name='circle'
          onChange={props.imgChangeHandler}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Width
    </Form.Label>
      <Col sm="10">
        <Form.Control type="number" min="0"  name='width' onChange={props.imgChangeHandler} placeholder="75" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Height
    </Form.Label>
      <Col sm="10">
        <Form.Control type="number" min="0" name='height' onChange={props.imgChangeHandler} placeholder="75" />
      </Col>
    </Form.Group>
    <hr></hr>
    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Colors
    </Form.Label>
      <Col sm="10">
        <Form.Control type="text" name='pulse' onChange={props.titleChangeHandler} placeholder="pulse: #8134AF" />
        <Form.Control className='mt-1' type="text" name='background' onChange={props.titleChangeHandler} placeholder="back: #DD2A7B" />
      </Col>
    </Form.Group>
    <hr></hr>
    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Width
    </Form.Label>
      <Col sm="10">
        <Form.Control type="number" min="0" name='width' onChange={props.subChangeHandler} placeholder="100" />
      </Col>
    </Form.Group>
    <Form.Group as={Row} controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Center
    </Form.Label>
      <Col sm="10" className='checkbox-wrapper'>
        <Form.Check
          defaultChecked={true}
          type="switch"
          id="custom-switch-center"
          label=""
          name='center'
          onChange={props.subChangeHandler}
        />
      </Col>
    </Form.Group>
    <hr></hr>
    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Count
    </Form.Label>
      <Col sm="10">
        <Form.Control type="number" min="0" placeholder="5" name='count' onChange={props.bodyChangeHandler} />
      </Col>
    </Form.Group>
    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        margin
    </Form.Label>
      <Col sm="10">
        <Form.Control type="number" min="0" placeholder="5" name='margin' onChange={props.bodyChangeHandler} />
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
            placeholder='3000'
            type='number' 
            min="0"
            onChange={props.timeOutChangeHandler}
          />
        </InputGroup>

      </Col>
      <Col>
        <Button variant="primary" className='btn-apply' onClick={props.apply}>Apply</Button>
      </Col>
    </Row>
  </Form>
</div>

export default Controlers;