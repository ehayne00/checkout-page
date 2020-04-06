import React from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";

import "./App.css";

class App extends React.Component {
  state = {
    payYearly: false,
  };

  togglePayYearly = () => {
    this.setState({
      payYearly: !this.state.payYearly,
    });
  };

  render() {
    const {payYearly} = this.state
    const {togglePayYearly} = this
    return (
      <div className="App">

        <NavBar />
        <h1 className="products-head text-font">Products</h1>
        <p className="text-font p-color">Select a product and sign up online with the ideal contract to suit you</p>
        <div className="line2"></div>

        <div className="radio-buttons">
        <strong className="spacearound text-font">Pay:</strong>
        <label>
          <input className="spacearound text-font"
            type="radio"
            value="Monthly"
            checked={!payYearly}
            onChange={togglePayYearly}
          />
          Monthly
        </label>
        <label>
          <input className="spacearound text-font"
            type="radio"
            value="Yearly"
            checked={payYearly}
            onChange={togglePayYearly}
          />
          Yearly
        </label>
        </div>
        <div className="cards-position">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
