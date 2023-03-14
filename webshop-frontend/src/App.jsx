import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, Router } from "react-router-dom";
import ReleasesPage from "./pages/ReleasesPage";

function App() {
  return (
    <>
  
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element = {<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/product" element={<SingleProduct/>}></Route>
        <Route exact path="/*" element={<Home />}></Route>
        <Route exact path="/releases" element={<ReleasesPage/>}></Route>
      </Routes>
     
     
   
    </>
  );
}

export default App;
