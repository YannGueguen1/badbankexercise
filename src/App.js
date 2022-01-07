import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Link, HashRouter } from "react-router-dom";
// import { BrowserRouter as Route, Link, HashRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import AllData from "./Components/alldata";
import Balance from "./Components/balance";
import BankForm from "./Components/context";
// import Card from './Components/context';
import CreateAccount from "./Components/createaccount";
import Deposit from "./Components/deposit";
import Home from "./Components/home";
import Login from "./Components/login";
import NavBar from "./Components/navbar";
import Withdraw from "./Components/withdraw";
import { UserContext } from "./Components/context";
import Route from "./Components/Route";

function App() {
  return (
    <HashRouter>
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Abel",
              email: "abel@mit.edu",
              password: "secret",
              balance: 100,
            },
            // {
            //   name: "Hannah",
            //   email: "hannah@mit.edu",
            //   password: "hello",
            //   balance: 850,
            // },
            // {
            //   name: "Bob",
            //   email: "bob@mit.edu",
            //   password: "notSoSecret",
            //   balance: 220,
            // },
          ],
          accountCreated:false
        }}
      >
      <NavBar />
        <div className="container" style={{ padding: "20px" }}>
          <Route path="">
            <Home />
          </Route>
          <Route path="#/CreateAccount/">
            <CreateAccount/>
          </Route>
          {/* <Route path="#/login/">
            <Login/>
          </Route> */}
          <Route path="#/deposit/">
            <Deposit/>
          </Route>
          <Route path="#/withdraw/">
            <Withdraw/>
          </Route>
          {/* <Route path="#/balance/">
            <Balance/>
          </Route> */}
          <Route path="#/alldata/">
            <AllData/>
          </Route>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
