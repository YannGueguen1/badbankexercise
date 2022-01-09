import React from "react";
import { Card } from "./context";
import bankLogo from "./bank.png";

function Home() {
  return (
    <Card
      txtcolor="dark"
      bgcolor="light"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text={
        <>
          <>You can move around using the navigation bar.</>
          <br />
          <br />
          <>
            To get started, please create an account; this will unlock the
            option to Deposit and Withdraw money.
          </>
        </>
      }
      body={<img src={bankLogo} className="img-fluid" alt="Responsive image" />}
    />
  );
}
export default Home;
