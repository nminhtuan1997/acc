import React, { useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Hometext1 from './home/Hometext1'
import Header from './header/Header'
import Singleproduct from './Singleproduct/Singleproduct'
import Cart from './header/Cart'
import Footer from './footer/Footer'
import Product from './product/Product'


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Hometext1/>}></Route>
      <Route path="/product/:id" element={<Singleproduct/>}></Route>
      <Route path="/checkcart" element={<Cart/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
