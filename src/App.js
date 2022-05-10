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
