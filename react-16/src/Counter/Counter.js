import React, { Component } from "react";

class Counter extends Component {
  state = {
    name: "Macbook pro",
    counter: 1,
    price: 120000,
    image:
      "https://rukminim1.flixcart.com/image/224/224/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90",
  };
  incrHanlder = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrHanlder = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <table className="table table-hover  table-info">
                <thead>
                  <th>Name</th>
                  <th>image</th>
                  <th>price</th>
                  <th>QTY</th>
                  <th>Total Price</th>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.name}</td>
                    <td>
                      <img src={this.state.image} height="50px" />
                    </td>
                    <td>{this.state.price}</td>
                    <td>
                      <i
                        class="fa fa-minus-circle"
                        onClick={this.decrHanlder}
                      ></i>
                      {this.state.counter}
                      <i
                        class="fa fa-plus-circle"
                        onClick={this.incrHanlder}
                      ></i>
                    </td>
                    <td>{this.state.price * this.state.counter}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
