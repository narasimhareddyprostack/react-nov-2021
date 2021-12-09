import React, { Component } from "react";

class PreferredLocEx extends Component {
  state = {
    cityBangalore: false,
    cityChennai: false,
    cityNewyork: false,
  };
  updatePrefferedLoc = (event) => {
    this.setState({
      [event.target.name]: event.target.checked,
    });
  };
  render() {
    return (
      <div>
        <div className="container mt-5">
          <pre>{JSON.stringify(this.state)}</pre>
          <div className="row">
            <div className="col-md-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={this.updatePrefferedLoc}
                  name="cityBangalore"
                />
                <label className="form-check-label"> Bangalore </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={this.updatePrefferedLoc}
                  name="cityChennai"
                />
                <label className="form-check-label"> Chennai </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={this.updatePrefferedLoc}
                  name="cityNewyork"
                />
                <label className="form-check-label"> NewYork </label>
              </div>
            </div>
            <div className="col-md-10">
              {this.state.cityBangalore ? (
                <>
                  <div className="card">
                    <div className="card-body bg-primary">
                      <p>
                        Bengaluru (also called Bangalore) is the capital of
                        India's southern Karnataka state. The center of India's
                        high-tech industry, the city is also known for its parks
                        and nightlife. By Cubbon Park, Vidhana Soudha is a
                        Neo-Dravidian legislative building.
                      </p>
                    </div>
                  </div>
                </>
              ) : null}
              {this.state.cityChennai ? (
                <>
                  {" "}
                  <div className="card">
                    <div className="card-body bg-danger">
                      <p>
                        Chennai, on the Bay of Bengal in eastern India, is the
                        capital of the state of Tamil Nadu. The city is home to
                        Fort St. George, built in 1644 and now a museum
                        showcasing the city’s roots as a British military
                        garrison and East India Company trading outpost, when it
                        was called Madras. Religious sites include
                        Kapaleeshwarar Temple, adorned with carved and painted
                        gods, and St. Mary’s, a 17th-century Anglican church.
                      </p>
                    </div>
                  </div>
                </>
              ) : null}
              {this.state.cityNewyork ? (
                <>
                  <div className="card">
                    <div className="card-body bg-success">
                      <p> Need to know</p>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PreferredLocEx;
