import React from 'react';
import { useContext } from "react";
import { UserContext } from "./context";

function Balance() {
  const ctx = useContext(UserContext);

  return (
    <div>
      <h1>Balance</h1>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}
export default Balance;
