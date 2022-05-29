import { useState } from "react";
import { Form, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { getAmountWithComma, getWordsFromAmount } from "./service";

const Numbers = () => {
  const [amountWithComma, setAmountWithComma] = useState("");
  const [amountInWords, setAmountInWords] = useState("");

  const amountChangedEvent = (e) => {
    let amount = e.target.value;
    let amountWithCommaString = getAmountWithComma(amount);
    setAmountWithComma(amountWithCommaString);
    let wordsFromAmount = getWordsFromAmount(amount);
    setAmountInWords(wordsFromAmount);
  };

  return (
    <Row>
      <Col md={12}>
        <h1>Number to words</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Amount (Without comma)</Form.Label>
            <InputGroup>
              <InputGroup.Text>Rs.</InputGroup.Text>
              <FormControl
                placeholder="Enter Amount"
                onChange={amountChangedEvent}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Amount (with comma)</Form.Label>
            <InputGroup>
              <InputGroup.Text>Rs.</InputGroup.Text>
              <FormControl
                disabled="disabled"
                placeholder="Enter Amount"
                value={amountWithComma}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Amount in words</Form.Label>
            <InputGroup>
              <InputGroup.Text>Rs.</InputGroup.Text>
              <FormControl disabled="disabled" value={amountInWords} />
            </InputGroup>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default Numbers;
