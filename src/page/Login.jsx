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
          Войти
        </h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-box animation" style={{ "--i": 1, "--j": 22 }}>
            <input type="text" required />
            <label>Имя пользователя </label>
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box animation" style={{ "--i": 2, "--j": 23 }}>
            <input type="password" required />
            <label>Пароль</label>
            <i className="bx bxs-lock-alt"></i>
          </div>

          <button
            type="submit"
            className="btn animation btn1"
            style={{ "--i": 3, "--j": 24 }}
          >
            Войти
          </button>
          <div className="linkTxt animation" style={{ "--i": 5, "--j": 25 }}>
            <p>
              Нет аккаунта?
              <a
                href="#"
                onClick={handleRegisterClick}
                className="register-link"
              >
                {" "}
                Зарегистрироваться
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-text login">
        <h2 className="animation" style={{ "--i": 0, "--j": 20 }}>
          Рады видеть вас снова!
        </h2>
        <p className="animation" style={{ "--i": 1, "--j": 21 }}>
          Войдите в свой аккаунт, чтобы продолжить работу с нами.
        </p>
      </div>

      {/* Register Form */}
      <div className="form-box register">
        <h2 className="title animation" style={{ "--i": 17, "--j": 0 }}>
          Зарегистрироваться
        </h2>
        <form onSubmit={handleRegisterSubmit}>
          <div className="input-box animation" style={{ "--i": 18, "--j": 1 }}>
            <input type="text" required />
            <label>Имя пользователя </label>
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box animation" style={{ "--i": 19, "--j": 2 }}>
            <input type="email" required />
            <label>Электронная почта </label>
            <i className="bx bxs-envelope"></i>
          </div>

          <div className="input-box animation" style={{ "--i": 20, "--j": 3 }}>
            <input type="password" required />
            <label>Пароль</label>
            <i className="bx bxs-lock-alt"></i>
          </div>

          <button
            type="submit"
            className="btn animation btn1"
            style={{ "--i": 21, "--j": 4 }}
          >
            Зарегистрироваться
          </button>

          <div className="linkTxt animation" style={{ "--i": 22, "--j": 5 }}>
            <p>
              У вас уже есть аккаунт?
              <a href="#" onClick={handleLoginClick} className="login-link">
                {" "}
                Войти
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-text register">
        <h2 className="animation" style={{ "--i": 17, "--j": 0 }}>
          Рады видеть вас снова!
        </h2>
        <p className="animation" style={{ "--i": 18, "--j": 1 }}>
          Войдите в свой аккаунт, чтобы продолжить работу с нами.
        </p>
      </div>
    </div>
  );
}

export default Login;
