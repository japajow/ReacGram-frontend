## Frontend React Gram

Instalando os pacotes no projeto

npm i react-icons react-router-dom @reduxjs/toolkit

npm start

## limpando e colocando fonts

instalando google fonts roboto

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

estilo global index.css

```css
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #121212;
  color: #fafafa;
}
```

## Configurando React Router

no App.js importamos BrowserRouter , Routes, Route , Navigate

```tsx
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

//router
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```

Criamos o components/Home/Home.js Home/Home.css Auth/Login.js Auth/Register.js Auth/Auth.css

configuramos as rotas no App.js

```tsx
import "./App.css";

//router
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//Pages
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```

Criando components e Navbar
components/Navbar/Navbar.js Navbar/Navbar.css

Criando tambem o Footer/Footer.js Footer/Footer.css

Agora importamos eles na App.js

```tsx
import "./App.css";

//router
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//Pages
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
```

Estruturando o Footer

```tsx
import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer id="footer">
      <p>ReactGram &copy; 2002</p>
    </footer>
  );
};
```

Estruturando o Navbar

```tsx
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

export const Navbar = () => {
  return (
    <nav id="nav">
      <Link to={"/"}>ReactGram</Link>
      <form>
        <BsSearch />
        <input type="text" placeholder="pesquisar..." />
      </form>
      <ul id="nav-links">
        <li>
          <NavLink to={"/"}>
            <BsHouseDoorFill />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Entrar</NavLink>
        </li>
        <li>
          <NavLink to={"/register"}>Cadastrar</NavLink>
        </li>
      </ul>
    </nav>
  );
};
```

## Estilizando o navbar e footer

Footer.css

```css
#footer {
  background-color: #121212;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #363636;
}
```

no App.js aonde tem o Routes vamos fazer um wrap nele com uma div

```tsx
import "./App.css";

//router
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//Pages
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";

//components

import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
```

No App.css

```css
.container {
  min-height: 70vh;
}
```

estilizando a navbar
Navbar.css

```css
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  border-bottom: 1px solid #363636;
  padding: 1em 1em;
}

#search-form {
  position: relative;
  width: 20%;
}

#search-form svg {
  position: absolute;
  top: 10px;
  left: 9px;
}

#search-form input {
  padding-left: 2.5em;
  border: none;
  border-radius: 5px;
  width: 100%;
  margin: 0;
}

#nav-links {
  display: flex;
  align-items: center;
}

#nav-links li {
  margin-right: 1em;
  
}

#nav-links span {
  cursor: pointer;
}

#nav-links svg {
  font-size: 1.5em;
}
```
