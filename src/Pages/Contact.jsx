function Contact() {

  return (
    <section className="py-5 mt-5">

      <div className="container">

        <h1 className="text-center fw-bold mb-5">
          Contact Us
        </h1>

        <div className="row justify-content-center">

          <div className="col-lg-8">

            <form className="shadow p-4 rounded bg-light">

              <div className="mb-3">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />

              </div>

              <div className="mb-3">

                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />

              </div>

              <div className="mb-3">

                <textarea
                  rows="5"
                  className="form-control"
                  placeholder="Message"
                ></textarea>

              </div>

              <button className="btn btn-success w-100">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;