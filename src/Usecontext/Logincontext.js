import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const userCont = createContext(null)
const Logincontext = ({children}) => {

    const [val, setVal] = useState({
        user: "",
        pass: "",
      });
    
      const username = "demo";
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
    <userCont.Provider value={{val,setVal,inputChange, handleLogin}}>
      {children}
    </userCont.Provider>
  )
}

export default Logincontext
