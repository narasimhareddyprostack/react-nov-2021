import React, { useState } from "react";
let Login = () => {
  let [user, setUser] = useState({ email: "", password: "" });
  let updateFormHanlder = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  let submitHandler = (event) => {
    alert(JSON.stringify(user));
    event.preventDefault();
  };
  return (
    <>
      <div className="container mt-5">
       {/*  <pre>{JSON.stringify(user)}</pre> */}
        <div className="row">
          <div className="col-md-4">
            <form action="" onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter Email"
                  name="email"
                  onChange={updateFormHanlder}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please Enter Password"
                  name="password"
                  onChange={updateFormHanlder}
                />
              </div>
              <input type="submit" value="login" className="btn btn-success" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
