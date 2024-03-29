import React from "react";
import { Col, Grid, Row } from "./layout/flex";
import { Input } from "./components/form/input";
import SearchBar from "./components/form/SearchBar";
import Modal from "./Modal/Modal";
import useModal from "./Modal/useModal";

function App() {
  const { isOpen, toggle } = useModal();
  return (
    <div className="App">
      <Grid>
        <Row stack="sm">
          <Col size={1}>111111111111111</Col>
          <Col size={1}>kkkkkkkkkkkkkk</Col>
          <Col size={1}>3333333333333333</Col>
          <Col size={3}>gggggggggggg</Col>
        </Row>
        <Row stack="sm">
          <Col size={1}>111111111111111</Col>
          <Col size={1}>kkkkkkkkkkkkkk</Col>
          <Col size={1}>3333333333333333</Col>
          <Col size={3}>gggggggggggg</Col>
        </Row>
        <Row>
          <SearchBar />
        </Row>
        <Row className="test-form">
          <Input id="test-input" label="Test Input:" />
        </Row>
        <Row className="test-form">
          <button onClick={toggle}>modal</button>
          <Modal isOpen={isOpen} toggle={toggle}>
            Hello Wolrd
          </Modal>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
