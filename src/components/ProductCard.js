import React from "react";
import AccountForm from "./AccountForm";
import boiler from "../media/boiler.png";

class ProductCard extends React.Component {
  state = {
    createAccountFormShowing: false,
  };

  toggleCreateAccountForm = () => {
    this.setState({
      createAccountFormShowing: !this.state.createAccountFormShowing,
    });
  };

  yearlyPrice = () => {
    const { price } = this.props.product;
    const totalMonths = price * 12;
    const discount = totalMonths / 20;
    const discountedTotal = totalMonths - discount;
    return discountedTotal;
  };

  render() {
    const { product, payYearly } = this.props;
    const { yearlyPrice, toggleCreateAccountForm } = this;

    return (
      <div className="card text-font">
        <h1>{product.name}</h1>
        <img alt="oh no!" src={boiler} />
        {payYearly ? (
          <h2>Price: £{(yearlyPrice() / 100).toFixed(2)}</h2>
        ) : (
          <h2>Price: £{(product.price / 100).toFixed(2)}</h2>
        )}
        <p>Item number: {product.id}</p>
        <button className="select" onClick={toggleCreateAccountForm}>
          Select
        </button>
        {this.state.createAccountFormShowing && (
          <div>
            <AccountForm
              toggleCreateAccountForm={toggleCreateAccountForm}
              payYearly={payYearly}
              product={product}
              yearlyPrice={yearlyPrice}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProductCard;
