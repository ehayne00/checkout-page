import React from "react";

const ReviewDetails = ({
  firstName,
  lastName,
  email,
  createAccount,
  toggleInputAndReview,
  toggleReviewAndCreated,
  product,
  yearlyPrice,
  payYearly,
}) => {
  return (
    <div>
      <h1>Please review your details before completion:</h1>
      <div className="text-backing2">
        <h2>Contract Choice:</h2>
        <h3 className="set-answers">
          <u>
            {product.name} - Pay {payYearly ? "Yearly" : "Monthly"} -{" "}
            {payYearly
              ? `£${(yearlyPrice() / 100).toFixed(2)}`
              : `£${(product.price / 100).toFixed(2)}`}
          </u>
        </h3>
        <h2>Account Details:</h2>
        <h3 className="set-answers">First name: {firstName}</h3>
        <h3 className="set-answers">Last name: {lastName}</h3>
        <h3 className="set-answers">Email address: {email}</h3>
      </div>
      <h3>
        If you're happy that the details above are correct, then go ahead and
        submit to create your account, contract and make payment. We will send all your
        details across in an email. You will have a 14 day cooling off period
        after submission.
      </h3>
      <div className="button-placement">
        <button className="select" onClick={toggleInputAndReview}>
          ⬅ Edit Details
        </button>
        <button
          className="select"
          type="submit"
          onClick={toggleReviewAndCreated}
        >
          Submit & Pay
        </button>
      </div>
      {/* <button onClick={createAccount}> 
        Submit & Pay
      </button> */}
    </div>
  );
};

export default ReviewDetails;
