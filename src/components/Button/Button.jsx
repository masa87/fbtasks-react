import React from "react";

const Button = ({ funct, txt }) => {
  return (
    <div>
      <button type="button" onClick={funct}>
        {txt}
      </button>
    </div>
  );
};

export default Button;
