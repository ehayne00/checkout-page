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

        <div className="radio-buttons">
        <strong className="spacearound">Pay:</strong>
        <label>
          <input
            type="radio"
            value="Monthly"
            checked={payYearly}
            onChange={togglePayYearly}
          />
          Monthly
        </label>
        <label>
          <input
            type="radio"
            value="Yearly"
            checked={!payYearly}
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
