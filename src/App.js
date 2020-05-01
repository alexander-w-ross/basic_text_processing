import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from "./components/AppNavBar";
import styles from "./topics.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  ListGroupItem,
  ListGroup,
  Row,
  Col,
} from "reactstrap";

// "proxy": "http://localhost:5000"
function App() {
  const [textValue, setTextValue] = useState("");
  const [returnText, setReturnText] = useState("");

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { text: textValue };
    fetch("https://next-knowledge-api-hbkwxcntvq-ue.a.run.app/api/", {
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setReturnText(data);
      })
      .catch((e) => {
        console.log("Looks like there was a problem: ", e);
      });
  };

  const displayText = () => {
    var keys = Object.keys(returnText);
    console.log(keys);
    let arr = [];

    for (var i = 0, len = keys.length; i < len; i++) {
      arr.push(returnText[keys[i]].map((id, text) => <Col>{id}</Col>));
    }
    return arr.map((id, name) => (
      <Row
        xs="8"
        style={{
          fontSize: 25,
          color: "white",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        {id}
      </Row>
    ));
  };

  return (
    <div className="App">
      <div className="center">
        <Container>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "white" }}>Topic Extraction Tool</h1>
            <p style={{ color: "white" }}>&mdash;</p>
          </div>
          <Form onSubmit={handleSubmit} style={{ width: "600px" }}>
            <FormGroup>
              <Input
                type="text"
                name="text"
                id="exampleText"
                onChange={handleChange}
                value={textValue}
                style={{ width: "100%" }}
                placeholder="Text Goes Here..."
              />
            </FormGroup>
            <Button
              color="primary"
              style={{ marginBottom: "2rem", width: "100%", fontSize: 20 }}
            >
              Submit
            </Button>
          </Form>
          {returnText === "" ? (
            ""
          ) : (
            <div>
              <h1
                style={{
                  color: "white",
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                Topics
              </h1>{" "}
              {displayText()}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}
// const stylesheet = StyleSheet.create({
//   textBox: {
//     width: 100%
//   }
// })
export default App;
