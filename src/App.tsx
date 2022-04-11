import React from 'react';
import { Col, Grid, Row } from './layout/flex';
import { Input } from './components/form/input'


function App() {
  return (
    <div className="App">
      <Grid>
        <Row stack="sm">
          <Col size={1}>111111111111111</Col>
          <Col size={1}>kkkkkkkkkkkkkk</Col>
          <Col size={3}>gggggggggggg</Col>
        </Row>
        <div className='test-form'>
          <Input id='test-input' label='Test Input:'/>
        </div>
      </Grid>
    </div>
  );
}

export default App;
