import  'react'
// import Navbar from "./Components/Navbar.jsx"
// import Footer from "./Components/Footer.jsx"

import {Routes,Route} from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
// import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";

function App() {

  return (
    <>
    <Routes>

      <Route path="/" element={<MainLayout />}>

        <Route index element={<Home/>} />

        <Route
          path="services"
          element={<Services />}
        />

        <Route
          path="about"
          element={<About />}
        />

        {/* <Route
          path="gallery"
          element={<Gallery />}
        /> */}

        <Route
          path="contact"
          element={<Contact />}
        />

      </Route>

    </Routes>
    </>
  )
}

export default App
