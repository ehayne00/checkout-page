import React from "react";

const ReviewDetails = ({
  firstName,
  lastName,
  email,
  toggleInputShowing,
  toggleReviewShowing,
  toggleAccountCreatedShowing,
}) => {
  return (
    <div>
      <h1>Please review your details before creating account:</h1>
      <h2>First name: {firstName}</h2>
      <h2>Last name: {lastName}</h2>
      <h2>Email address: {email}</h2>
      <h3>If you're happy that the details above are correct, then go ahead and create your account.</h3>
      <button onClick={(toggleReviewShowing, toggleInputShowing)}>
        Go Back And Edit Details
      </button>
      <button onClick={(toggleReviewShowing, toggleAccountCreatedShowing)}> 
      {/* change these - put them in the fetch method in then */}
        Create Account
      </button>
    </div>
  );
};

export default ReviewDetails;
