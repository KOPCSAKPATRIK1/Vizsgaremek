import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, Router } from "react-router-dom";
import ReleasesPage from "./pages/ReleasesPage";
import Logout from "./pages/Logout";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Info from "./pages/Info";

function App() {
  return (
    <>
  
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element = {<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/product/:id" element={<SingleProduct/>}></Route>
        <Route exact path="/*" element={<Home />}></Route>
        <Route exact path="/releases" element={<ReleasesPage/>}></Route>
        <Route exact path="/logout" element={<Logout/>}></Route>
        <Route exact path="/products/:category" element={<ProductList/>}></Route>
        <Route exact path="/products" element={<ProductList/>}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
        <Route exact path="/profile" element={<Profile/>}></Route>
        <Route exact path="/info" element={<Info/>}></Route>
      </Routes>
     
     
   
    </>
  );
}

export default App;
