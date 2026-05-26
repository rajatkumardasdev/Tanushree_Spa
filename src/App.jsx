import 'react'

import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
// import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";

function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />

          <Route path="services" element={<Services />} />

          <Route path="about" element={<About />}/>

          <Route path="contact" element={<Contact />}/>

          <Route path='products' element={<Products />} />

        </Route>

      </Routes>
    </>
  )
}

export default App
