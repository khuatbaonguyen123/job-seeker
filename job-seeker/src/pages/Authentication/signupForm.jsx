import React, { useState } from "react";

const SignupForm = ({ closeSignupPopup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email
        }),
      });

      if (!response.ok) {
        throw new Error("Signup failed. Please try again.");
      }

      const data = await response.json();

      // Handle success (e.g., show confirmation, navigate to login page)
      console.log("Signup successful:", data);
    } catch (error) {
      // Handle error
      setError(error.message);
    }
  };

  return (
    <div className="account-popup">
      <span className="close-popup" onClick={closeSignupPopup}>
        <i className="la la-close"></i>
      </span>
      <h3>Sign Up</h3>
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
        <div className="cfield">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="la la-envelope-o"></i>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Signup</button>
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

export { SignupForm };
