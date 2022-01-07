import React from "react";
import { useState, useEffect, useRef } from "react/cjs/react.development";

const Dropdown = ({ label, users, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedUsers = users.map((user) => {
    if (user.email === selected.email) {
      return null;
    }

    return (
      <div
        key={user.email}
        className="item"
        onClick={() => onSelectedChange(user)}
      >
        {user.name}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.name}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedUsers}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
