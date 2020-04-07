import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ReviewDetails from "./ReviewDetails";
import AccountCreated from "./AccountCreated";
import API from "../API";

class AccountForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    price: "",
    inputShowing: true,
    reviewShowing: false,
    accountCreatedShowing: false,
    touched: {
      email: false,
      firstName: false,
      lastName: false,
    },
  };

  handleBlur = (field) => (e) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  canBeSubmitted() {
    const errors = this.validate(this.state.email, this.state.firstName, this.state.lastName);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  validate(email, firstName, lastName) {
    // true means invalid, so our conditions got reversed
    return {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false,
      firstName: firstName.length === 0,
      lastName: lastName.length === 0
    };
  }

  updateFormData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleInputShowing = () => {
    this.setState({
      inputShowing: !this.state.inputShowing,
    });
  };

  toggleReviewShowing = () => {
    this.setState({
      reviewShowing: !this.state.reviewShowing,
    });
  };

  toggleAccountCreatedShowing = () => {
    this.setState({
      accountCreatedShowing: !this.state.accountCreatedShowing,
    });
  };

  resetAllToggles = () => {
    this.setState({
      inputShowing: true,
      reviewShowing: false,
      accountCreatedShowing: false,
    });
  };

  toggleFormAndReset = () => {
    this.props.toggleCreateAccountForm();
    this.resetAllToggles();
  };

  toggleInputAndReview = () => {
    this.toggleInputShowing();
    this.toggleReviewShowing();
  };

  toggleReviewAndCreated = () => {
    this.toggleReviewShowing();
    this.toggleAccountCreatedShowing();
  };

  componentDidMount() {
    this.props.payYearly
      ? this.setState({
          price: this.props.yearlyPrice(),
        })
      : this.setState({
          price: this.props.product.price,
        });
  }

  createAccount = () => {
    API.post("http://api.example.com/accounts", {
      account: {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email_address: this.state.email,
      },
    })
      .then((account) => {
        if (account.error) throw Error(account.error);
        this.createContract(account);
      })
      .catch((error) => alert(error));
  };

  createContract = (account) => {
    API.post(`http://api.example.com/accounts/${account.id}/contracts`, {
      contract: {
        account_id: account.id,
        product_id: this.props.product.id,
        price: this.state.price,
      },
    })
      .then((contract) => {
        if (contract.error) throw Error(contract.error);
        this.sendEmail(account, contract);
      })
      .catch((error) => alert(error));
  };

  sendEmail = (account, contract) => {
    API.post("http://api.example.com/email/confirmation", {
      email: {
        account_id: account.id,
        contract_number: contract.id,
        full_name: `${this.state.firstName} ${this.state.lastName}`,
        email_address: this.state.email,
      },
    })
      .then((email) => {
        if (email.error) throw Error(email.error);
        this.toggleReviewShowing();
        this.toggleAccountCreatedShowing();
      })
      .catch((error) => alert(error));
  };

  render() {
    const {
      inputShowing,
      reviewShowing,
      accountCreatedShowing,
      firstName,
      lastName,
      email,
    } = this.state;
    const {
      updateFormData,
      createAccount,
      toggleInputAndReview,
      toggleFormAndReset,
      toggleReviewAndCreated,
      handleBlur,
      validate
    } = this;
    const { payYearly, product, yearlyPrice } = this.props;
    const errors = validate(email, firstName, lastName);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
  
      return hasError ? shouldShow : false;
    };

    return (
      <div className="form-position">
        <button className="x-btn" onClick={toggleFormAndReset}>
          x
        </button>
        {inputShowing && (
          <div>
            <h1>Account and contract set-up:</h1>
            <div className="details-position">
              <h2>You chose the product:</h2>
              <div className="details-chosen">
                <div>
                  <h2>
                    <u>
                      {product.name} - Pay {payYearly ? "Yearly" : "Monthly"} -{" "}
                      {payYearly
                        ? `£${(yearlyPrice() / 100).toFixed(2)}`
                        : `£${(product.price / 100).toFixed(2)}`}
                    </u>
                  </h2>
                </div>
                <button className="select3" onClick={toggleFormAndReset}>
                  Choose a different product
                </button>
              </div>
              <h2>
                Let us take some details from you so we can create your
                account..
              </h2>
              <div className="text-backing">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={shouldMarkError("firstName") ? "error" : ""}
                      onChange={updateFormData}
                      required
                      id="firstName"
                      name="firstName"
                      label="First name"
                      fullWidth
                      autoComplete="fname"
                      value={firstName}
                      onBlur={handleBlur("firstName")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={shouldMarkError("lastName") ? "error" : ""}
                      onChange={updateFormData}
                      required
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      fullWidth
                      autoComplete="lname"
                      value={lastName}
                      onBlur={handleBlur("lastName")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={shouldMarkError("email") ? "error" : ""}
                      onChange={updateFormData}
                      required
                      id="email"
                      name="email"
                      label="email"
                      fullWidth
                      autoComplete="email"
                      value={email}
                      onBlur={handleBlur("email")}
                    />
                  </Grid>
                </Grid>
              </div>
              <button
                disabled={isDisabled}
                type="submit"
                className="select2"
                onClick={toggleInputAndReview}
              >
                Submit Details
              </button>
            </div>
          </div>
        )}
        {reviewShowing && (
          <ReviewDetails
            firstName={firstName}
            lastName={lastName}
            email={email}
            createAccount={createAccount}
            toggleInputAndReview={toggleInputAndReview}
            toggleReviewAndCreated={toggleReviewAndCreated}
            product={product}
            yearlyPrice={yearlyPrice}
            payYearly={payYearly}
          />
        )}
        {accountCreatedShowing && (
          <AccountCreated toggleFormAndReset={toggleFormAndReset} />
        )}
      </div>
    );
  }
}

export default AccountForm;
