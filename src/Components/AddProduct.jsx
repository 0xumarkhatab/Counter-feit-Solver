import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

function AddProduct() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {}, []);
  function submitHandler() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let personId = document.getElementById("personId").value;
    //resetting
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("personId").value = "";

    console.log("Submitted", {
      name,
      price,
      personId,
    });

    let newState = state;
    newState.Pool[personId].addProductViaParameters(name, price);

    console.log(newState);
    dispatch({
      type: "SET_POOL",
      Pool: newState.Pool,
    });
  }

  return (
    <div className="addProduct">
      <h1>Add Product</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicProduct Name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            placeholder="Enter Product Name"
          />
          <Form.Text className="text-muted">
            Enter Product Name to store on Blockchain
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" id="price" placeholder="e.g 34$" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Person's Public ID</Form.Label>
          <Form.Control type="text" id="personId" placeholder="123" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I want to store on Blockchain" />
        </Form.Group>

        <Button variant="success" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddProduct;
