import React, { useState } from "react";
import "./index.css";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let savetoken = (value) => {
    console.log("session saved");
    sessionStorage.setItem("token", JSON.stringify(value));
  };
  const handleLogin = () => {
    const data = {
      identifier: userName,
      password: password,
    };

    fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        savetoken(res);
      });
  };

  return (
    <div className="container">
      <div className="login__form">
        <div className="login__input__list">
          <h3 className="login__header ">User: Login</h3>
          <input
            type="text"
            placeholder="User Name"
            className="login__input__item"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login__input__item"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__input__item btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
