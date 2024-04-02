import logo from "./logo.svg";
import "./App.css";
import Adv from "./components/adv/Adv";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <div className="App">
      <Adv />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
