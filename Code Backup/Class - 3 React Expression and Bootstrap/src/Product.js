import React from "react";
class Product extends React.Component {
  car = {
    name: "Evoque",
    price: 6000000,
    brand: "Tata",
    image:
      "data:image/jpeg;base64,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",
  };
  render() {
    return (
      <div>
        <img src={this.car.image} alt="RangeRover Evoque" />
        <h3>{this.car.name}</h3>
        <h3>{this.car.brand}</h3>
        <h3>{this.car.price}</h3>
        <hr />
        <button className="btn btn-danger">Test</button>
      </div>
    );
  }
}
export default Product;
