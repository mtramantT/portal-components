import React from 'react';
import { Col, Grid, Row } from './layout/flex';


function App() {
  return (
    <div className="App">
      <Grid>
        <Row>
          <Col stack="sm" size={1}>gfghfjhfjhfh</Col>
          <Col stack="sm" size={1}>kkkkkkkkkkkkkk</Col>
          <Col stack="sm">gggggggggggg</Col>
        </Row>
        <Row style={{padding: '50px'}}>
          <Col size={1} stack="sm"></Col>
          <Col size={1} stack="sm">kkkkkkkkkkkkkk</Col>
          <Col stack="sm"></Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
