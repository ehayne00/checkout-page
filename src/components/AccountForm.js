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
  };

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

  componentDidMount() {
    this.props.payYearly ?
    this.setState({
      price: this.props.yearlyPrice()
    })
    : this.setState({
      price: this.props.product.price
    })
  }

  createAccount = () => {

    API.post("http://api.example.com/accounts", {
      account: {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email_address: this.state.email
      }
    })
    .then(account => {
      if (account.error) throw Error(account.error)
      this.createContract(account)})
    .catch(error => alert(error))
  }

  createContract = (account) => {
    API.post(`http://api.example.com/accounts/${account.id}/contracts`, {
      contract: {
        account_id: account.id,
        product_id: this.props.product.id,
        price: this.state.price
      }
    })
    .then(contract => {
      if (contract.error) throw Error(contract.error)
    })
    .catch(error => alert(error))
  }

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
      toggleReviewShowing,
      toggleAccountCreatedShowing,
      resetAllToggles,
      toggleInputShowing,
    } = this;
    const {
      toggleCreateAccountForm,
      payYearly,
      product,
      yearlyPrice,
    } = this.props;

    return (
      <div className="form-position">
        <button
          className="x-btn"
          onClick={(toggleCreateAccountForm, resetAllToggles)}
        >
          x
        </button>
        {inputShowing && (
          <div>
            <h1>Enter your details to set up your account:</h1>
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
                <button
                  className="select"
                  onClick={(toggleCreateAccountForm, resetAllToggles)}
                >
                  Choose a different product
                </button>
              </div>
              <h3>
                Let us take some details from you so we can create your
                account..
              </h3>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={updateFormData}
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="fname"
                    value={firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={updateFormData}
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="lname"
                    value={lastName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={updateFormData}
                    required
                    id="email"
                    name="email"
                    label="email"
                    fullWidth
                    autoComplete="email"
                    value={email}
                  />
                </Grid>
              </Grid>
              <button onClick={(toggleInputShowing, toggleReviewShowing)}>
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
            toggleReviewShowing={toggleReviewShowing}
            toggleAccountCreatedShowing={toggleAccountCreatedShowing}
            toggleInputShowing={toggleInputShowing}
          />
        )}
        {accountCreatedShowing && (
          <AccountCreated
            toggleCreateAccountForm={toggleCreateAccountForm}
            resetAllToggles={resetAllToggles}
          />
        )}
      </div>
    );
  }
}

export default AccountForm;
