import React from 'react';
import { Col, Grid, Row } from './layout/flex';


function App() {
  return (
    <div className="App">
      <Grid>
        <Row stack="sm">
          <Col size={1}>111111111111111</Col>
          <Col size={1}>kkkkkkkkkkkkkk</Col>
          <Col size={3}>gggggggggggg</Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
