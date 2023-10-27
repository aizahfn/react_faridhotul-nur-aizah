import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const Navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const dummyUser = { username: "admin", password: "password123" };

    if (username === dummyUser.username && password === dummyUser.password) {
      localStorage.setItem("user", JSON.stringify(dummyUser));
      localStorage.setItem("isLoggedIn", true);

      Navigate("/create");
      window.location.reload();
    } else {
      setErrorMessage("Invalid username or password");
      Navigate("/create");
      window.location.reload();
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
