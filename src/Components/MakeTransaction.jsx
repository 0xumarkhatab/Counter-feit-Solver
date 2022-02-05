import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { getLedger } from "../script";

function MakeTransaction() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function submitHandler() {
    let sendId = document.getElementById("sendId").value;
    let sno = document.getElementById("sno").value;
    let destId = document.getElementById("destId").value;
    //resetting
    document.getElementById("sendId").value = "";
    document.getElementById("sno").value = "";
    document.getElementById("destId").value = "";

    console.log("Submitted", {
      sender: sendId,
      transactionTime: Number(new Date()),
      destinationKey: destId,
      data: "hidden",
    });

    state.Pool[sendId].sendItemViaSerialNumber(sno);
    let ledger = getLedger();

    console.log(ledger);

    dispatch({
      type: "SET_LEDGER",
      Ledger: ledger,
    });
  }

  return (
    <div>
      <h1>Make Transaction</h1>
      <Form className="p-3">
        <Form.Group className="mb-3" controlId="formBasicSender's Public ID">
          <Form.Label>Sender's Public ID</Form.Label>
          <Form.Control
            type="text"
            id="sendId"
            placeholder="Enter Sender's Public ID"
          />
          <Form.Text className="text-muted">Enter Sender's Public ID</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Product Serial Number</Form.Label>
          <Form.Control type="number" id="sno" placeholder="e.g 3211" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Destination's Public ID</Form.Label>
          <Form.Control type="text" id="destId" placeholder="123" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I Confirm to Make a Transaction" />
        </Form.Group>

        <Button variant="success" onClick={submitHandler}>
          Transfer
        </Button>
      </Form>
    </div>
  );
}

export default MakeTransaction;
