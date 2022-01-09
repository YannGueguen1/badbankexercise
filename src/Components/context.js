import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as ReactRouterDOM } from "react-router-dom";
import { createContext, useContext, useState } from "react";

export const Route = ReactRouterDOM.Route;
export const Link = ReactRouterDOM.Link;
export const HashRouter = ReactRouterDOM.HashRouter;
export const UserContext = createContext(null);

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "18rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {/* {props.status && <div id="createStatus">{props.status}</div>} */}
      </div>
    </div>
  );
}

function BankForm(props) {
  const ctx = useContext(UserContext);

  let numberOfUsers = ctx.users.length;
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState(ctx.users[numberOfUsers - 1].balance);
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const [isDisabled, setIsDisabled] = useState("disabled");

  function validate(field, label) {
    if (!field) {
      // setStatus("Error: " + label + " can't be empty");
      alert("Error: " + label + " can't be empty");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function EmailValidation(enteredEmail) {
    const mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (enteredEmail.match(mail_format)) {
      // console.log("Yeah! A valid email!");
      return true;
    } else {
      // alert("Sorry! An invalid email!");
      return false;
    }
  }

  function PasswordValidation(password) {
    const password_format = "^(?=.*?[a-z]).{8,}$";
    if (password.match(password_format)) {
      // console.log("Yeah! A valid password!");
      return true;
    } else {
      // alert(
      //   "Sorry! An invalid password! Password must be at least 8 characters long"
      // );
      return false;
    }
  }

  function onChangeValidation() {
    if (props.showEmail && props.showPassword) {
      // if (!validate(name, "name")) return;
      // if (!validate(email, "email")) return;
      // if (!validate(password, "password")) return;
      // if (!EmailValidation(email)) return;
      // if (!PasswordValidation(password)) return;
      // if (
      //   validate(name, "name") &&
      //   validate(email, "email") &&
      //   validate(password, "password") &&
      //   EmailValidation(email) &&
      //   PasswordValidation(password)
      // ) {
      if (
        name &&
        email &&
        password &&
        EmailValidation(email) &&
        PasswordValidation(password)
      ) {
        setIsDisabled("");
      } else {
        setIsDisabled("disabled");
        return;
      }
    }
  }

  function handleCreate() {
    if (props.showDeposit) {
      if (parseInt(deposit) <= 0) {
        alert("Deposit amount must be greater than 0.");
        return;
      }
      if (isNaN(Number(deposit))) {
        alert("Please enter numerical values only.");
        return;
      }
      ctx.users[numberOfUsers - 1].balance =
        ctx.users[numberOfUsers - 1].balance + parseInt(deposit);
    } else if (props.showWithdraw) {
      if (parseInt(withdraw) <= 0) {
        alert("Withdrawal amount must be greater than 0.");
        return;
      }
      if (isNaN(Number(withdraw))) {
        alert("Please enter numerical values only.");
        return;
      }
      if (ctx.users[numberOfUsers - 1].balance - parseInt(withdraw) >= 0) {
        ctx.users[numberOfUsers - 1].balance =
          ctx.users[numberOfUsers - 1].balance - parseInt(withdraw);
      } else {
        alert("Transaction failed! Withdrawal amount is greater than balance.");
        return;
      }
    } else if (props.showEmail && props.showPassword) {
      if (
        !validate(name, "name") ||
        !validate(email, "email") ||
        !validate(password, "password")
      )
        return;
      // if (!validate(email, "email")) return;
      // if (!validate(password, "password")) return;
      if (!EmailValidation(email)) {
        alert("Sorry! An invalid email!");
        return;
      } else {
        console.log("Yeah! A valid email!");
      }
      if (!PasswordValidation(password)) {
        alert(
          "Sorry! An invalid password! Password must be at least 8 characters long"
        );
        return;
      } else {
        console.log("Yeah! A valid password!");
      }
      ctx.users.push({ name, email, password, balance: 100 });
      alert("Successfully Created Account!");
    }

    setShow(false);
    console.log("ruel");
    props.handle({ name, email, password, balance });
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor={props.bgcolor}
      header={props.label}
      txtcolor={props.txtcolor}
      status={status}
      body={
        show ? (
          <>
            {props.showName && (
              <>
                Name
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                <br />
              </>
            )}
            {props.showEmail && (
              <>
                Email address
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <br />
              </>
            )}
            {props.showPassword && (
              <>
                Password
                <br />
                <input
                  type="password"
                  // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  // required
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.currentTarget.value);
                    onChangeValidation();
                  }}
                />
                <br />
              </>
            )}
            {props.showBalance && (
              <>
                Balance:
                <span> ${balance}</span>
                <br />
                <br />
              </>
            )}
            {props.showDeposit && (
              <>
                Deposit Amount
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="deposit"
                  placeholder="Deposit Amount"
                  value={deposit}
                  onChange={(e) => setDeposit(e.currentTarget.value)}
                  // onChange={(e) =>
                  //   setBalance(balance + Number(e.currentTarget.value))
                  // }
                />
                <br />
              </>
            )}
            {props.showWithdraw && (
              <>
                Withdraw Amount
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="withdraw"
                  placeholder="Withdraw Amount"
                  value={withdraw}
                  onChange={(e) => setWithdraw(e.currentTarget.value)}
                />
                <br />
              </>
            )}
            <button
              type="submit"
              className={`btn btn-light ${isDisabled}`}
              onClick={handleCreate}
              // onClick={props.handle}
            >
              {props.submitButton}
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              {props.successButton}
            </button>
          </>
        )
      }
    />
  );
}

export { Card, BankForm };
