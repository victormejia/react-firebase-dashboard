import React from 'react';

function Signup() {
  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className="ui form">
            <div className="two fields">
              <div className="field">
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                  />
                </label>
              </div>
              <div className="field">
                <label>
                  Last Name
                  <input type="text" name="lastName" placeholder="Last Name" />
                </label>
              </div>
            </div>
            <div className="field">
              <label>
                Email
                <input type="email" name="email" placeholder="Email" />
              </label>
            </div>
            <div className="field">
              <label>
                Password
                <input type="password" name="password" placeholder="Password" />
              </label>
            </div>
            <button className="ui primary button login" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;