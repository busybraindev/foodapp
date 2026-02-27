import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";
import Footer from "./components/footer/Footer";
import Log from "./components/Log/Log";

const App = () => {
  const [sh, ssh] = useState(false);
  return (
    <>
      {sh ? <Log ssh={ssh}></Log> : <></>}
      <div className="app">
        <Nav ssh={ssh}></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/ct" element={<Cart></Cart>}></Route>
          <Route path="/od" element={<Order></Order>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
