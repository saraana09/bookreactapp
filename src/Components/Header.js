import React from "react";

const Header = (props) => {
  return (
    <div className="head">
      <h1>{props.header}</h1>
    </div>
  );
};

export default Header;
