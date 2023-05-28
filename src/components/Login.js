import React, { useState } from "react";
import "../components/Login.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [val, setVal] = useState({
    user: "",
    pass: "",
  });

  const username = "demo@coralmango.com";
  const password = "demo123";
  let navigate = useNavigate();

  function inputChange(e) {
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    if (!val.user || !val.pass) {
      toast.error("Some fields are missing")
    } else if (val.user !== username || val.pass !== password) {
      toast.error("Invalid credentials");
    } else {
		navigate("/home");
		toast.success("Login Sucessful",{
			position: toast.POSITION.TOP_RIGHT,}
		  )
    }
  }

  return (
    <div className="login_container">
      <div className="auth-form-container">
        <h2>Welcome to Coral mango solutions</h2>
        <form className="login-form">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            name="user"
            id="user"
            value={val.user}
            placeholder="Enter your username"
            onChange={inputChange}
          />

          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={val.pass}
            placeholder="*******"
            onChange={inputChange}
          />
          <button type="submit" onClick={handleLogin}>
            Log In
          </button>
        </form>
      </div>
     
    </div>
  );
};

export default Login;
