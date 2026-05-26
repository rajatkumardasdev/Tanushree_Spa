import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const closeMenu = () => setNav(false);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top custom-navbar ${
        scrolled ? "navbar-scroll" : ""
      }`}
    >
      <div className="container">

        {/* Logo */}

        <Link
          to="/"
          className="navbar-brand logo"
          onClick={closeMenu}
        >
          Tanushree Spa
        </Link>

        {/* Toggle */}

       <button
  className="navbar-toggler custom-toggler border-0 shadow-none"
  type="button"
  onClick={() => setNav(!nav)}
>
  <span className="navbar-toggler-icon"></span>
</button>

        {/* Menu */}

        <div
          className={`collapse navbar-collapse ${
            nav ? "show" : ""
          }`}
        >

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4 text-center">

            <li className="nav-item">
              <Link
                to="/"
                className="nav-link nav-link-custom"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="services"
                className="nav-link nav-link-custom"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                className="nav-link nav-link-custom"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
                <Link
                to="/products"
                className="nav-link nav-link-custom"
                onClick={closeMenu}
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link nav-link-custom"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>

            {/* Button */}

            <li className="nav-item ms-lg-3">

              <button className="btn spa-btn px-4 py-2">
                Book Now
              </button>

            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;