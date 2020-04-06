import React from "react";

const RadioButtons = ({ payYearly, togglePayYearly }) => {
  return (
    <div className="radio-buttons">
      <strong className="spacearound text-font">Pay:</strong>
      <label>
        <input
          className="spacearound text-font"
          type="radio"
          value="Monthly"
          checked={!payYearly}
          onChange={togglePayYearly}
        />
        Monthly
      </label>
      <label>
        <input
          className="spacearound text-font"
          type="radio"
          value="Yearly"
          checked={payYearly}
          onChange={togglePayYearly}
        />
        Yearly
      </label>
    </div>
  );
};

export default RadioButtons;
