import React from "react";
import Table from "react-bootstrap/Table";
import "./ShowProducts.css";
import { useSelector, useDispatch } from "react-redux";

function ShowProducts() {
  let state = useSelector((state) => state);
  console.log(state);

  return (
    <div className="showProducts">
      <div className="heading">
        <h1>Persons and Products</h1>
      </div>
      <hr />
      <Table responsive>
        <thead>
          <tr>
            <th>Public Key#</th>

            {Array.from({ length: 3 }).map((_, index) => (
              <th key={index}> ProductName,SNo </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {state?.Pool?.map((person) => {
            return (
              <tr key={person.getPublicKey()}>
                <td key={"publicKey" + person.getPublicKey()}>
                  {person.getPublicKey()}
                </td>
                {person.products?.map((item, index) => {
                  return (
                    <td key={person.getPublicKey() + "item" + index}>
                      {item.getName()}, {item.getSerialNumber()}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          {/* {state?.map((person) => {
            return (
              <tr key={person.getPublicKey()}>
                <td key={"publicKey" + person.getPublicKey()}>
                  {person.getPublicKey()}
                </td>
              </tr>
            );
          })}
           */}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowProducts;
