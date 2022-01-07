import React from "react";
import { useContext, useState } from "react";
import { BankForm, UserContext, Card } from "./context";
import Dropdown from "./Dropdown";

function Withdraw() {
  const ctx = useContext(UserContext);

  let numberOfUsers = ctx.users.length;
  const [selected, setSelected] = useState(ctx.users[numberOfUsers-1]);
  const [balanceSelected, setBalanceSelected] = useState(selected.balance);
  
  function handle(data) {
    setBalanceSelected(selected.balance)
    return true;
  }

  return (
    <>
    {/* <Dropdown
      label="Select a user"
      users={ctx.users}
      selected={selected}
      onSelectedChange={setSelected}
    />
    <br/> */}
    <Card
      txtcolor="light"
      bgcolor="secondary"
      header="User currently signed in"
      title={<>Name: {selected.name}</>}
      text={
        <>
          <>Balance: ${balanceSelected}</>
        </>
      }
    />
      <BankForm
        bgcolor="info"
        label="Withdraw"
        txtcolor="black"
        handle={handle}
        showName={false}
        showEmail={false}
        showPassword={false}
        showDeposit={false}
        showWithdraw={true}
        showBalance={false}
        submitButton="Withdraw"
        successButton="Make another withdrawal"
      />
    </>
  );
}
export default Withdraw;
