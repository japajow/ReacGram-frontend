import React from "react";
import "./Navbar.css";

//components
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";

//Hooks
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);
  return (
    <nav id="nav">
      <Link to={"/"}>ReactGram</Link>
      <form id="search-form">
        <BsSearch />
        <input type="text" placeholder="pesquisar..." />
      </form>
      <ul id="nav-links">
        {auth ? (
          <>
            <li>
              <NavLink to={"/"}>
                <BsHouseDoorFill />
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to={`/users/${user.id}`}>
                  <BsFillCameraFill />
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to={"/profile"}>
                <BsFillPersonFill />
              </NavLink>
            </li>
            <li>
              <span>Sair</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to={"/login"}>Entrar</NavLink>
            </li>
            <li>
              <NavLink to={"/register"}>Cadastrar</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
