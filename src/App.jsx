import { useState } from 'react'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header  from './pages/Header';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import Success from './pages/Success';
import Canceled from './pages/Canceled';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/success" element={<Success />} />
            <Route path="/canceled" element={<Canceled />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
