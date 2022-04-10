import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    // console.log(password.current.value);
    // console.log(passwordConfirmation.current.value);

    //パスワードと確認用パスワードが合っているかどうか確認
    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity("パスワード違います");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        //registerAPIを叩く
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">本格的なSNSを、自分の手で。</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleClick(e)}>
            <p className="loginMsg">新規登録はこちら</p>
            <input
              type="text"
              className="loginInput"
              placeholder="ユーザー名"
              required
              ref={username}
            />
            <input
              type="email"
              className="loginInput"
              placeholder="Eメール"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="パスワード"
              required
              minLength="6"
              ref={password}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="確認用パスワード"
              required
              minLength="6"
              ref={passwordConfirmation}
            />
            <button className="loginButton" type="submit">
              サインアップ
            </button>
            <button className="loginRegisterButton">ログイン</button>
          </form>
        </div>
      </div>
    </div>
  );
}
