import "./navbar.css";
import { useContext, useEffect, useState, useRef } from "react";
import { UserContext } from "./context";

function NavBar() {
  const ctx = useContext(UserContext);
  const { accountCreated } = ctx;

  const [activeTab, setActiveTab] = useState();

  let renderedTab = "";
  useEffect(() => {
    console.log("jdks");
    renderedTab = "disabled";
  }, [activeTab]);

  // let renderedTab = accountCreated === false ? "disabled" : "";
  // console.log(renderedTab);
  // console.log("465328790r2u0f");

  // useEffect(() => {
  //   setActiveTab(renderedTab);
  //   console.log("SDFHGJSKDLAMKVJDSAHK");
  // }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand ms-2" href="#">
          Bad Bank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-2">
            <li
              className="nav-item hovertext"
              data-hover="Create a new account"
            >
              <a
                className="nav-link"
                href="#/CreateAccount/"
                onClick={(e) => setActiveTab(e.target)}
              >
                Create Account
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#/login/">
                Login
              </a>
            </li> */}
            <li
              className="nav-item hovertext"
              data-hover="Deposit money into your account"
            >
              <a className={`nav-link ${renderedTab}`} href="#/deposit/">
                Deposit
              </a>
            </li>
            <li
              className="nav-item hovertext"
              data-hover="Withdraw money from your account"
            >
              <a className="nav-link" href="#/withdraw/">
                Withdraw
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#/balance/">
                Balance
              </a>
            </li> */}
            <li className="nav-item hovertext" data-hover="View all users">
              <a className="nav-link" href="#/alldata/">
                AllData
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
