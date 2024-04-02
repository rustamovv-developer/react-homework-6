import React, { memo, useEffect, useState } from "react";
import img from "../../assets/images/nav-log.png";
import { Link, useNavigate } from "react-router-dom";
import "../../sass/login.scss";
import axios from "axios";

const url = "https://fakestoreapi.com/auth/login/";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    let user = {
      userEmail: email,
      userPassword: password,
    };

    let navigate = useNavigate;
    axios
      .post(url, user)
      .then((res) => {
        console.log("res=>", res);
        localStorage.setItem("token", res.token);
        navigate("/admin");
      })
      .catch((err) => console.log("error =>", err));
  };
  return (
    <>
      <div className="top">
        <div className="container-fluid">
          <div className="top__info">
            <h2 className="top__title">Login</h2>
            <div className="top__end">
              <Link to={"/"} className="top__link">
                Home -
              </Link>
              <Link to={"#"} className="top__link">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="login">
        <div className="login__info">
          <Link to={"/"}>
            <img src={img} alt="login-img" className="login__img" />
          </Link>
          <form onSubmit={handleSubmit} action="" className="login__form">
            <div className="login__card">
              <label htmlFor="text" className="login__label">
                Email Address*
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login__input"
                id="text"
                type="text"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="login__card">
              <label htmlFor="password" className="login__label">
                Password*
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login__input"
                id="password"
                type="password"
                placeholder="Enter Your password"
              />
            </div>
            <div className="login__box">
              <div className="login__exam">
                <input type="checkbox" className="login__exam__input" />
                <p className="login__text">Remember Me</p>
              </div>
              <p className="login__text">Forgot Password?</p>
            </div>
            <div className="login__bottom">
              <button className="login__btn">Login</button>
              <h3 className="login__h3">Signup?</h3>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default memo(Login);
