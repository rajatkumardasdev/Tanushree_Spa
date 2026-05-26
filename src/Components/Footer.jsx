function Footer() {

  return (
    <footer className="bg-dark text-white pt-5 pb-3">

      <div className="container">

        <div className="row gy-4">

          {/* About */}

          <div className="col-lg-4 col-md-6">

            <h2 className="fw-bold text-warning mb-3">
              Ayurvedic Spa
            </h2>

            <p className="text-light-emphasis">
              Relax your body and refresh your mind
              with authentic Ayurvedic therapies and
              wellness treatments.
            </p>

          </div>

          {/* Quick Links */}

          <div className="col-lg-2 col-md-6">

            <h4 className="fw-semibold mb-3">
              Quick Links
            </h4>

            <ul className="list-unstyled">

              <li className="mb-2">
                <a
                  href="/"
                  className="text-decoration-none text-light footer-link"
                >
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/services"
                  className="text-decoration-none text-light footer-link"
                >
                  Services
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/about"
                  className="text-decoration-none text-light footer-link"
                >
                  About
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/gallery"
                  className="text-decoration-none text-light footer-link"
                >
                  Gallery
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/contact"
                  className="text-decoration-none text-light footer-link"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div className="col-lg-3 col-md-6">

            <h4 className="fw-semibold mb-3">
              Services
            </h4>

            <ul className="list-unstyled text-light-emphasis">

              <li className="mb-2">
                Body Massage
              </li>

              <li className="mb-2">
                Herbal Therapy
              </li>

              <li className="mb-2">
                Stress Relief
              </li>

              <li className="mb-2">
                Relax Therapy
              </li>

              <li className="mb-2">
                Wellness Treatment
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-3 col-md-6">

            <h4 className="fw-semibold mb-3">
              Contact
            </h4>

            <p className="text-light-emphasis mb-2">
              Balasore, Odisha
            </p>

            <p className="text-light-emphasis mb-2">
              +91 9876543210
            </p>

            <p className="text-light-emphasis mb-4">
              spa@gmail.com
            </p>

            {/* Social */}

            <div className="d-flex gap-3">

              <button className="btn btn-warning rounded-circle social-icon">
                F
              </button>

              <button className="btn btn-warning rounded-circle social-icon">
                I
              </button>

              <button className="btn btn-warning rounded-circle social-icon">
                T
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <hr className="border-secondary my-2" />

        <div className="text-center">

          <p className="mb-0 text-light-emphasis">
            © 2026 Ayurvedic Spa. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer