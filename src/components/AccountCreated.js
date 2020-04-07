import React from "react";

const AccountCreated = () => {
  return (
    <div>
      <h1>Success!</h1>
      <h2>Your details have been submitted.</h2>
      <h2>Your processing reference number is: 37468647</h2>
      <h2>
        You will recieve a confirmation email in the next 24 hours with your new
        account details.
      </h2>
      <h2>
        If you have any queries, please contact our customer help line on 0800
        368 9881 quoting your processing reference number and we will be sure to
        help.
      </h2>
      <h2>Enjoy our services!</h2>
      <button onClick={toggleCreateAccountForm, resetAllToggles}>Done</button>
    </div>
  );
};

export default AccountCreated;
