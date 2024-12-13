import React, { useState } from "react";

const SigninForm = ({ closeSigninPopup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.json();

      // Handle success (e.g., save token, navigate to another page)
      console.log("Login successful:", data);
    } catch (error) {
      // Handle error
      setError(error.message);
    }
  };

  return (
    <div className="account-popup">
      <span className="close-popup" onClick={closeSigninPopup}>
        <i className="la la-close"></i>
      </span>
      <h3>User Login</h3>
      <span>Click To Login With Demo User</span>
      <form onSubmit={handleSubmit}>
        <div className="cfield">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <i className="la la-user"></i>
        </div>
        <div className="cfield">
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="la la-key"></i>
        </div>
        <p className="remember-label">
          <input type="checkbox" name="cb" id="cbw2" />
          <label htmlFor="cbw2">Remember me</label>
        </p>
        <a href="#" title="">
          Forgot Password?
        </a>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <div className="extra-login">
        <span>Or</span>
        <div className="login-social">
          <a className="fb-login" href="#" title="">
            <i className="la la-facebook"></i>
          </a>
          <a className="tw-login" href="#" title="">
            <i className="la la-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export { SigninForm };