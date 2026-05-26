import 'react'
function Home() {
  return (
    <>

      {/* Hero Section */}

      <section className="hero-section d-flex align-items-center">

        <div className="container">

          <div className="row align-items-center">

            {/* Left Content */}

            <div className="col-lg-6 text-white">

              <h1 className="display-2 fw-bold hero-title">
                Ayurvedic <span className="text-warning">Healing</span> & Spa
              </h1>

              <p className="lead mt-4 hero-text">
                Relax your body, refresh your mind and
                rejuvenate your soul with natural Ayurvedic therapies.
              </p>

              <div className="d-flex gap-3 mt-4 flex-wrap">

                <button className="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-bold shadow">
                  Book Appointment
                </button>

                <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold">
                  Explore Services
                </button>

              </div>

            </div>

            {/* Right Image */}

            <div className="col-lg-6 text-center mt-5 mt-lg-0">

              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200"
                alt=""
                className="img-fluid hero-img"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold display-5">
              Why Choose Us
            </h2>

            <p className="text-muted">
              Natural wellness treatments with expert therapists
            </p>

          </div>

          <div className="row g-4">

            <div className="col-md-4">

              <div className="card border-0 shadow-lg text-center p-4 h-100 feature-card">

                <h3 className="fw-bold text-success">
                  Herbal Therapy
                </h3>

                <p className="mt-3 text-muted">
                  Authentic Ayurvedic herbal treatments
                  for complete wellness.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="card border-0 shadow-lg text-center p-4 h-100 feature-card">

                <h3 className="fw-bold text-success">
                  Relaxing Spa
                </h3>

                <p className="mt-3 text-muted">
                  Premium spa therapies to relax
                  your body and mind.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="card border-0 shadow-lg text-center p-4 h-100 feature-card">

                <h3 className="fw-bold text-success">
                  Natural Healing
                </h3>

                <p className="mt-3 text-muted">
                  Rejuvenate naturally with ancient
                  Ayurvedic healing methods.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Home