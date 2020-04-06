import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


class AccountForm extends React.Component {

  render() {
      const {toggleCreateAccountForm, payYearly, product, yearlyPrice} = this.props
    return (
    <div className="form-position">
         <button className="x-btn" onClick={toggleCreateAccountForm}>x</button>
         <h4>Let us take some details from you so we can create your account..</h4>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
      </Grid>
    <div className="details-position">
      <h2>You chose the product:</h2>
      <div className="details-chosen">
      <div >
    <h2><u>{product.name} - Pay {payYearly ? "Yearly" : "Monthly" } - {payYearly ? `£${(yearlyPrice() / 100).toFixed(2)}`: `£${(product.price / 100).toFixed(2)}`}</u></h2>
      </div>
      <button className="select" onClick={toggleCreateAccountForm}>Choose a different product</button>
      </div>
      </div>
    </div>
    );
  }
}

export default AccountForm;
