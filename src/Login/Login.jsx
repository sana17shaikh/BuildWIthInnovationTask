import React, { useState } from "react";
import { Person, Lock } from "@mui/icons-material";
import "./Login.css";


const Login = ({ onLogin }) => {
  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  }
  return (
    <>
      <div className="container-login">
        <form  className="container-login">
          <div className="header-login">
            <div className="text">Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs-login">
            <div className="input-login">
              <span className="img-login">{<Person />}</span>
              <input
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => SetUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-login">
              <span className="img-login">{<Lock />}</span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="submit-container">
            <button type="submit" className="submit link" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
