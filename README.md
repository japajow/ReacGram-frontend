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
