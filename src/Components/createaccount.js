import React from "react";
import { useContext, useState } from "react";
import { BankForm, UserContext, Card } from "./context";

function CreateAccount() {
  const ctx = useContext(UserContext);
  let numberOfUsers = ctx.users.length;
  const [selected, setSelected] = useState(ctx.users[numberOfUsers-1]);

  function handle({ name, email, password }) {
    numberOfUsers = ctx.users.length;
    ctx.accountCreated=true;
    setSelected(ctx.users[numberOfUsers - 1]);
    return true;
  }

  return (
    <>
      <Card
        txtcolor="light"
        bgcolor="secondary"
        header="User currently signed in"
        title={<>Name: {selected.name}</>}
        text={
          <>
            <>Balance: ${selected.balance}</>
          </>
        }
      />
      <BankForm
        bgcolor="primary"
        label="Create Account"
        handle={handle}
        showName={true}
        showEmail={true}
        showPassword={true}
        showDeposit={false}
        showWithdraw={false}
        showBalance={false}
        submitButton="Create Account"
        successButton="Add another account"
      />
    </>
  );
}
export default CreateAccount;
