import React from "react";
import { useContext } from "react";
import {BankForm, UserContext} from "./context";

function Login() {
  const ctx = useContext(UserContext);
  function handle(data) {
    ctx.users.push({
      email: data.email,
      password: data.password,
      balance: 100,
    });
    return true;
  }

  return (
    <BankForm
      bgcolor="warning"
      label="Login"
      txtcolor="black"
      handle={handle}
      showName={false}
      showEmail={true}
      showPassword={true}
      showDeposit={false}
      showWithdraw={false}
      showBalance={false}
      submitButton="Login"
      successButton="Add another account"
    />
  );
}
export default Login;
