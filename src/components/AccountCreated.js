import React from "react";

const AccountCreated = ({ toggleFormAndReset }) => {
  return (
    <div>
      <h1>Success!</h1>
      <h2>Your details have been submitted.</h2>
      <div className="text-backing2">
      <h2>Your Hometree Account number is: 3746</h2>
      <h2>Your Hometree Contract number is: 4234</h2>
      </div>
      <h2>
        You will recieve a confirmation email in the next 24 hours with all of your
        new account and contract details.
      </h2>
      <h2>
        If you have any queries, please contact our customer help line on 0800
        368 9881 quoting your account number and we will be sure to
        help.
      </h2>
      <h2>Enjoy our services!</h2>
      <button className="select" onClick={(toggleFormAndReset)}>Done</button>
    </div>
  );
};

export default AccountCreated;
