import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

function TransactionHistory() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="heading">
        <h1>Transaction History</h1>
      </div>
      <hr />
      <Table responsive>
        <thead>
          <tr>
            <th>Transaction ID#</th>

            <th key="s"> Sender</th>
            <th key="r"> Receiver</th>
            <th key="tt"> Transaction Time</th>
          </tr>
        </thead>
        <tbody>
          {state?.Ledger?.map((tran) => {
            return (
              <tr key={tran?.transactionTime}>
                <td key="s">{tran?.sender}</td>
                <td key="d">{tran?.destinationKey}</td>
                <td key="tt">{tran?.transactionTime}</td>
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

export default TransactionHistory;
