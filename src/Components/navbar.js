import "./navbar.css";
import { useContext, useState } from "react";
import { UserContext } from "./context";

function NavBar({ isLoggedIn }) {
  const ctx = useContext(UserContext);

  const [isActive1, setIsActive1] = useState("");
  const [isActive2, setIsActive2] = useState("");
  const [isActive3, setIsActive3] = useState("");
  const [isActive4, setIsActive4] = useState("");

  let renderedTab = isLoggedIn ? "" : "disabled";

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand ms-2"
          href="#"
          onClick={(e) => {
            setIsActive1("");
            setIsActive2("");
            setIsActive3("");
            setIsActive4("");
          }}
        >
          Bad Bank - Home
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
          <ul className="navbar-nav nav-pills ms-auto mb-2 mb-lg-0 me-2">
            <li
              className="nav-item hovertext"
              data-hover="Create a new account"
            >
              <a
                className={`nav-link ${isActive1}`}
                href="#/CreateAccount/"
                onClick={(e) => {
                  setIsActive1("active");
                  setIsActive2("");
                  setIsActive3("");
                  setIsActive4("");
                }}
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
              <a
                className={`nav-link ${renderedTab} ${isActive2}`}
                href="#/deposit/"
                onClick={(e) => {
                  setIsActive1("");
                  setIsActive2("active");
                  setIsActive3("");
                  setIsActive4("");
                }}
              >
                Deposit
              </a>
            </li>
            <li
              className="nav-item hovertext"
              data-hover="Withdraw money from your account"
            >
              <a
                className={`nav-link ${renderedTab} ${isActive3}`}
                href="#/withdraw/"
                onClick={(e) => {
                  setIsActive1("");
                  setIsActive2("");
                  setIsActive3("active");
                  setIsActive4("");
                }}
              >
                Withdraw
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#/balance/">
                Balance
              </a>
            </li> */}
            <li className="nav-item hovertext" data-hover="View all users">
              <a
                className={`nav-link ${isActive4}`}
                href="#/alldata/"
                onClick={(e) => {
                  setIsActive1("");
                  setIsActive2("");
                  setIsActive3("");
                  setIsActive4("active");
                }}
              >
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
