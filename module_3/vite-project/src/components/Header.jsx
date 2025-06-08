import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

const Header = ({ theme, name, getUserState }) => {
  const [login, setLogin] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        background: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
      }}
    >
      Xin chào, {name}!
      <button
        onClick={() => {
          getUserState(true);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Header;
