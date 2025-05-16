// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"

// const Login = () => {
//     const [inputData, setInputData] = useState()
//     const navigate = useNavigate()
//     const [name, setName] = useState('')
//     const [password, setPassword] = useState('')

// useEffect(()=>{
//     axios.get('http://localhost:3001/users').
//     then((res)=>
//     {setInputData(res.data[0])
//     console.log(res.data[0]);
//     }).
//     catch((err)=>console.log(err))
// },[])

// const login = (e) => {
//     e.preventDefault()
//     if(inputData.name===name && inputData.password===password){
//         localStorage.setItem('token', name)
//         navigate('/')
//     }else{
//         localStorage.setItem('token', "user")
//         navigate('/')
//     }
// }

//     return(
//         <div className="container w-100 d-flex justify-content-center align-items-center py-5">
//             <div className="card w-50">
//                 <div className="card-header" style={{backgroundColor:"rgb(233, 69, 96)",color:"#fff"}}>
//                     <h3>Login</h3>
//                 </div>
//                 <div className="card-body">
//                     <form onSubmit={login}>
//                         Username <br />
//                         <input onChange={(e)=>setName(e.target.value)} className="form-control mb-2" type="text" />
//                         Password <br />
//                         <input onChange={(e)=>setPassword(e.target.value)} className="form-control mb-2" type="text" />
//                         <div style={{display:"flex",justifyContent:"space-between"}}>
//                             <div>have you not account <a href="/register">register</a></div>
//                             <button className="btn" style={{backgroundColor:"rgb(233, 69, 96)",color:"#fff"}}> Login </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login

import React, { useState } from "react";
import "../Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate(); // React Router navigatsiyasi

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setIsActive(true);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsActive(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Login muvaffaqiyatli bo'lsa, sahifani bosh sahifaga yo'naltirish
    navigate("/");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Sign up muvaffaqiyatli bo'lsa, sahifani bosh sahifaga yo'naltirish
    navigate("/");
  };

  return (
    <div className={`wrapper ${isActive ? "active" : ""}`}>
      <span className="rotate-bg"></span>
      <span className="rotate-bg2"></span>

      {/* Login Form */}
      <div className="form-box login">
        <h2 className="title animation" style={{ "--i": 0, "--j": 21 }}>
          Login
        </h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-box animation" style={{ "--i": 1, "--j": 22 }}>
            <input type="text" required />
            <label>Username</label>
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box animation" style={{ "--i": 2, "--j": 23 }}>
            <input type="password" required />
            <label>Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>

          <button
            type="submit"
            className="btn animation btn1"
            style={{ "--i": 3, "--j": 24 }}
          >
            Login
          </button>
          <div className="linkTxt animation" style={{ "--i": 5, "--j": 25 }}>
            <p>
              Don't have an account?
              <a
                href="#"
                onClick={handleRegisterClick}
                className="register-link"
              >
                {" "}
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-text login">
        <h2 className="animation" style={{ "--i": 0, "--j": 20 }}>
          Welcome Back!
        </h2>
        <p className="animation" style={{ "--i": 1, "--j": 21 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          rem?
        </p>
      </div>

      {/* Register Form */}
      <div className="form-box register">
        <h2 className="title animation" style={{ "--i": 17, "--j": 0 }}>
          Sign Up
        </h2>
        <form onSubmit={handleRegisterSubmit}>
          <div className="input-box animation" style={{ "--i": 18, "--j": 1 }}>
            <input type="text" required />
            <label>Username</label>
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box animation" style={{ "--i": 19, "--j": 2 }}>
            <input type="email" required />
            <label>Email</label>
            <i className="bx bxs-envelope"></i>
          </div>

          <div className="input-box animation" style={{ "--i": 20, "--j": 3 }}>
            <input type="password" required />
            <label>Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>

          <button
            type="submit"
            className="btn animation btn1"
            style={{ "--i": 21, "--j": 4 }}
          >
            Sign Up
          </button>

          <div className="linkTxt animation" style={{ "--i": 22, "--j": 5 }}>
            <p>
              Already have an account?
              <a href="#" onClick={handleLoginClick} className="login-link">
                {" "}
                Login
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-text register">
        <h2 className="animation" style={{ "--i": 17, "--j": 0 }}>
          Welcome Back!
        </h2>
        <p className="animation" style={{ "--i": 18, "--j": 1 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          rem?
        </p>
      </div>
    </div>
  );
}

export default Login;
