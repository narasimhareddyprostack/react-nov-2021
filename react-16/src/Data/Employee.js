import React, { Component } from "react";
import Employees from "./Data";
class Employee extends Component {
  render() {
    console.log(Employees);
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-10">
              <table className="table table-hover">
                <thead className="bg-info">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                  </tr>
                </thead>
                <tbody>
                  {Employees.map((emp) => {
                    return (
                      <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.country}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Employee;
