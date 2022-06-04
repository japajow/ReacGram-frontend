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
      <form id="search-form">
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

## Criando formulário de cadastro

Register.js

```tsx
import React from "react";
import "./Auth.css";

//components

import { Link } from "react-router-dom";

// Hooks

import { useState, useEffect } from "react";

export const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos </p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme a Senha" />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Ja tem conta? <Link to={"/login"}>clique aqui</Link>
      </p>
    </div>
  );
};
```

## CSS Global

index.css

```css
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #121212;
  color: #fafafa;
}

a {
  color: #fafafa;
  text-decoration: none;
}

.active {
  font-weight: bold;
}

ul {
  list-style: none;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label span {
  font-weight: bold;
  margin-bottom: 0.5em;
  color: #aaa;
  font-size: 0.7em;
}

input {
  background-color: #3b3b3b;
  color: #aaa;
  border: 1px solid #555;
  border-radius: 2px;
  padding: 10px 8px;
  outline: none;
  margin-bottom: 0.6em;
}

input::placeholder {
  color: #333;
}

.btn,
button,
input[type="submit"] {
  background-color: #0094f6;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 8px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.8;
  font-size: 1em;
}

input[type="submit"] {
  margin-top: 1em;
}

input:disabled {
  cursor: not-allowed;
  background-color: #000;
}

button:hover,
input[type="submit"]:hover {
  opacity: 1;
}

.cancel-btn {
  background-color: #ccc;
}

.hide {
  display: none;
}
```

## CSS form de autenticação

Auth.css

```css
#login,
#register {
  border: 1px solid #363636;
  background-color: #000;
  padding: 1.5em 2em;
  max-width: 33%;
  margin: 2em auto;
}

#login h2,
#register h2 {
  font-size: 2em;
  text-align: center;
  margin-top: 0;
}

.subtitle {
  font-weight: bold;
  color: #999;
  margin-bottom: 1.5em;
}

#login form,
#register form {
  padding-bottom: 1.5em;
  margin-bottom: 1.5em;
  border-bottom: 1px solid #363636;
}

#login p,
#register p {
  text-align: center;
}

#login p a,
#register p a {
  font-weight: bold;
  color: #0084f6;
}
```

## Criando o state do form de cadastro

Resgister.js

```tsx
//Criamos os estados do inputs

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

//dentro do handleSubmit criamos o user com os estados

const user = {
  name,
  email,
  password,
  confirmPassword,
};

//Incluímos o value e o onChange nos inputs
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
```

## Instalando o Redux no projeto frontend

npm i react-redux

Vamos no index.js e implementar o redux

```tsx
//Redux
// importamos o Provider , ele guarda os dados e compartilha ao projeto como todo
import { Provider } from "react-redux";
//Aonde guardamos os dados ? criamos um arquivo único e trabalhamos com ele
```

Criamos um arquivo na raiz chamado store.js

store.js

```tsx
import { ConfigureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

Voltamos pro index.js e importamos o store.js

```tsx
import { store } from "./store";

//envolvemos nossa aplicacao no Provider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider
      store={store} //aqui compartilhamos todos context
    >
      <App />
    </Provider>
  </React.StrictMode>
);
```

Criamos 2 pastas services e slices

//criamos 1 arquivo para cada contexto no services
//trabalha direto com a API
services/

//no slices criamos arquivos na base das acoes que criamos no serviço
teremos uma ação de registro estado de loading estado de sucesso etc
//Trabalhamos com estados
slices/

## Configurando requisições HTTP

Criamos uma pasta chamada utils;config.js

```tsx
// fixamos http api na variável api
export const api = "http://localhost:5000/api";
// fixamos uploads para variável uploads de imagens
export const uploads = "http://localhost:5000/uploads";

// criamos a funcao requestConfig contendo parâmetros method , data , token iniciando como nulo e image
export const requestConfig = (method, data, token = null, image = null) => {
  // variável config que altera conforme a requisição
  let config;

  // se for imagem
  if (image) {
    // config com method, body com a data e o headers vazio
    config = {
      method,
      body: data,
      headers: {},
    };
    //se for DELETE ou nao tem dados
  } else if (method === "DELETE" || data === null) {
    // funcao de like nao tem dado, mas precisamos enviar algo
    config = {
      method,
      headers: {},
    };
  } else {
    // Quando vem dados , method que vem na requisição , body com JSON com stringify
    config = {
      method,
      body: JSON.stringify(data),
      headers: { "Content-type": "application-json" },
    };
  }

  // verificamos se veio o token , se vier colocamos no headers
  if (token) {
    // colocar o token no headers no Authorization colocamos o Bearer com token
    config.headers.Authorization = `Bearer ${token}`;
  }

  // retornamos nosso config
  return config;
};
```

## Criando service de autenticação

No services/authService.js

```tsx
// importamos nosso api e a funcao requestConfig
import { api, requestConfig } from "../utils/config";

//criamos as funções HTTP registro do usuário
const register = async (data) => {
  //recebe os dados
  // criamos a variável config chamando nosso requestConfig
  // method POST com os dados
  const config = requestConfig("POST", data);

  // criamos o try catch para ver se deu erro ou nao na requisição
  try {
    // criamos a variável que pega a resposta  com método fetch
    const res = await fetch(api + "/users/register", config)
      .then((res) => res.json()) // se for sucesso transformamos a resposta em json
      .catch((err) => err); // se der erro ele cai no catch

    // Se receber uma resposta
    if (res) {
      // guardamos os dados na localStorage chamamos de user e transformamos em string
      localStorage.setItem("user", JSON.stringify(res));
    }
  } catch (error) {
    console.log(error);
  }
};

// criamos um objeto e colocamos a funcao
const authService = {
  register,
};

// exportamos esse authService
export default authService;
```

## Criando slice de autenticação

slice/authSlices.js

```tsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

// criamos a variável user e pegamos o usuário salvo no localStorage
const user = JSON.parse(localStorage.getItem("user"));

// criamos o estado inicial
const initialState = {
  user: user ? user : null, // se tiver usuário seta o usuário
  error: false,
  success: false,
  loading: false,
};

// Register an user and Sign In
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    const data = await authService.register(user);

    //check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
```

Vamos no store.js e importamos o authSlice

```tsx
import { configureStore, ConfigureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlices";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
```

## Conectando formulário ao Reducer

Vamos unir tudo que criamos register e slice

Vamos no Auth/Register.js

```tsx
//importamos o hook
import { useSelector, useDispatch } from "react-redux";
// Redux
import { register, reset } from "../../slices/authSlices";

// criamos  dispatch com a funcao useDispatch()
const dispatch = useDispatch();
//pegamos o estado do loading e error usando o useSelector do redux
const { loading, error } = useSelector((state) => state.auth);

// adicionamos no dispatch o register com user
dispatch(register(user));

// criamos o useEffect para sempre atualizar o dispatch resetar tudo
useEffect(() => {
  dispatch(reset());
}, [dispatch]);
```

## Criando componente de mensagem

componente/Message/Message.js Message.css

```tsx
import React from "react";
import "./Message.css";

export const Message = ({ msg, type }) => {
  return (
    <div className={`message ${type}`}>
      <p>{msg}</p>
    </div>
  );
};
```

Message.css

```css
.message {
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
}

.message.error {
  color: #721c24;
  background-color: #f8d7da;
  border: #f5c6cb;
}

.message.success {
  color: #155724;
  background-color: #d4edda;
  border: #c3e6cb;
}
```

## Exibindo validação do usuário

No Register.js

```tsx
//importamos o componente Message
import { Message } from "../../components/Message/Message";

// utilizamos o loading e o error
{
  !loading && <input type="submit" value="Cadastrar" />;
}
{
  loading && <input type="submit" value="Aguarde..." disabled />;
}
{
  error && <Message msg={error} type="error" />;
}
```

Ja no authService esquecemos de retornar return res;

```tsx
import { api, requestConfig } from "../utils/config";

//criamos as funções HTTP

//Register an user
// const register = async (data) => {
//   const config = requestConfig("POST", data);

//   try {
//     const res = await fetch(api + "/users/register", config)
//       .then((result) => {
//         return result.json();
//       })
//       .catch((err) => err);

//     if (res) {
//       localStorage.setItem("user", JSON.stringify(res));
//     }

return res;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const authService = {
//   register,
// };

// export default authService;
```

## Hook verificação de autenticação

Criamos a pasta hooks/useAuth.js

```tsx
// useState e useEffect  e useSelector

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user } = useSelector((state) => state.auth);

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setAuth(true);
    } else {
      setAuth(false);
    }

    setLoading(false);
  }, [user]);

  return { auth, loading };
};
```

## Verificando se o usuário esta autenticado

No App.js

```tsx
//importamos nosso hook useAuth
import { useAuth } from "./hooks/useAuth";

//extraímos dentro de App na funcao dele o loading e o auth
const { auth, loading } = useAuth();

// se o loading for true  colocamos carregando
if (loading) {
  return <p>Carregando...</p>;
}

//ja no JSX
//modificamos a rota
<Routes>
  <Route path="/" element={auth ? <Home /> : <Navigate to={"/login"} />} />
  <Route path="/login" element={!auth ? <Login /> : <Navigate to={"/"} />} />
  <Route
    path="/register"
    element={!auth ? <Register /> : <Navigate to={"/"} />}
  />
</Routes>;
```

## Navbar para usuários autenticados

//Navbar tambem tem alterações dependendo se estiver logado ou nao

Navbar.js

```tsx
//importamos os Hooks que vamos utilizar
//Hooks
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

// chamamos os use
//verificar se esta logado ou nao
const { auth } = useAuth();
const { user } = useSelector((state) => state.auth);

// JSX
{
  auth ? (
    <>
      <li>
        <NavLink to={"/"}>
          <BsHouseDoorFill />
        </NavLink>
      </li>
      // verifica se o usuário esta logado primeiro
      {user && (
        <li>
          <NavLink to={`/users/${user.id}`}></NavLink>
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
  );
}

//adicionamos novos links quando estamos logado
```

## Funcao logout

services/authService.js

```tsx

  Criamos a funcao logout
  // logout and user
const logout = () => {
  localStorage.removeItem("user");
};

exportamos ele
const authService = {
  register,
  logout,
};

```

Agora no slices/authSlice.js

```tsx

  Chamamos o logout usando createAsyncThunk e nomeando ele

  //logout and user
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

// Criamos um status
 .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = null;
      });

```
