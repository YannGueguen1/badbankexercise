import React from "react";
import { useContext } from "react";
import { UserContext } from "./context";
import Table from "react-bootstrap/Table";

function AllData() {
  const ctx = useContext(UserContext);
  const { users } = ctx;

  const renderedUsers = users.map((user, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.balance}</td>
      </tr>
    );
  });

  return (
    <>
      <h3>ALL DATA</h3>
      <h4>In JSON format:</h4>
      {JSON.stringify(ctx)}
      <br />
      <h4>In a table:</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>{users[0].name}</td>
            <td>{users[0].email}</td>
            <td>{users[0].password}</td>
          </tr> */}
          {renderedUsers}
        </tbody>
      </Table>
    </>
  );
}
export default AllData;
