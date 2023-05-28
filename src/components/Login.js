import React, { useContext, useEffect, useState } from "react";
import "../components/Login.css";
import "react-toastify/dist/ReactToastify.css";
import { userCont } from "../Usecontext/Logincontext";

const Login = () => {
	const {val, handleLogin, inputChange} = useContext(userCont)


 
   return (
    <div className="login_container">
      <div className="auth-form-container">
        <h2>Welcome to Coral Mango Solutions</h2>
        <form className="login-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="user"
            id="username"
             value={val.user}
            placeholder="Enter your username"
            onChange={inputChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="pass"
            id="password"
            value={val.pass}
            placeholder="*******"
            onChange={inputChange}
          />
          <button className="login_btn" type="submit" onClick={handleLogin}>
            Log In
          </button>
        </form>
      </div>
     
    </div>
  );
};

export default Login;
