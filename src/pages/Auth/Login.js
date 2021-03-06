import "./Auth.css";

//COmponentes
import { Message } from "../../components/Message/Message";
import { Link } from "react-router-dom";

//Hooks
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

//Redux

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p className="subtitle">Faça o login para ver o que há de novo</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email || ""}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password || ""}
        />
        <input type="submit" value="Entrar" />
      </form>
      <p>
        Não tem uma conta ? <Link to={"/register"}>Clique aqui</Link>
      </p>
    </div>
  );
};
