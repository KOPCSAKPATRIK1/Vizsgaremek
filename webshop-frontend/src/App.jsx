import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, Router } from "react-router-dom";
function App() {
  return (
    <>

      <Routes>
        <Route  path="/" component={<Home />}></Route>
        <Route path="/login" component={<Login />}></Route>
     
     
      </Routes>
      <Home/>
     
   
    </>
  );
}

export default App;
