import React from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import RadioButtons from "./components/RadioButtons";

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
    const { payYearly } = this.state;
    const { togglePayYearly } = this;
    return (
      <div className="App">
        <NavBar />
        <h1 className="products-head text-font">Products</h1>
        <p className="text-font p-color">
          Select a product and sign up online with the ideal contract for
          you
        </p>
        <p className="text-font p-color">Pay annually and save 5%</p>
        <div className="line2"></div>
        <RadioButtons payYearly={payYearly} togglePayYearly={togglePayYearly} />

        <div className="cards-position">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} payYearly={payYearly}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
