import React from 'react'
import { Row, Col, Stack, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NoteList = () => {
  return (
    <>
      <Row>
        <Col><h1>Notes</h1></Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to="/new">
              <Button variant='primary'>Create</Button>
              <Button variant='outline-secondary'>Edit Tags</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <Form>
        <Row className='mb-4'>
          <Col>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default NoteList; 