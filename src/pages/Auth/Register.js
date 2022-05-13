import React from "react";
import "./Auth.css";

//components

import { Link } from "react-router-dom";

// Hooks

import { useState, useEffect } from "react";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    console.log(user);
  };
  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirme a Senha"
          value={confirmPassword || ""}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Ja tem conta? <Link to={"/login"}>clique aqui</Link>
      </p>
    </div>
  );
};
