import { useState } from "react";

function Products() {

  const [openIndex, setOpenIndex] = useState(null);

  const products = [

    {
      title: "Herbal Oil",

      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200",

      description:
        "Natural Ayurvedic massage oil for relaxation and stress relief.",

      ingredients:
        "Tulsi, Neem Oil, Ashwagandha",

      benefits:
        "Stress Relief, Better Sleep"
    },

    {
      title: "Spa Cream",

      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200",

      description:
        "Premium herbal cream for glowing and healthy skin.",

      ingredients:
        "Aloe Vera, Coconut Oil",

      benefits:
        "Soft Skin, Deep Moisture"
    },

    {
      title: "Face Pack",

      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200",

      description:
        "Natural face pack for healthy glowing skin.",

      ingredients:
        "Neem, Turmeric",

      benefits:
        "Glow, Acne Control"
    },

    {
      title: "Hair Oil",

      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200",

      description:
        "Ayurvedic herbal oil for healthy and strong hair.",

      ingredients:
        "Amla, Bhringraj",

      benefits:
        "Hair Growth, Shine"
    },

     {
      title: "Hair Oil",

      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200",

      description:
        "Ayurvedic herbal oil for healthy and strong hair.",

      ingredients:
        "Amla, Bhringraj",

      benefits:
        "Hair Growth, Shine"
    },

     {
      title: "Hair Oil",

      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200",

      description:
        "Ayurvedic herbal oil for healthy and strong hair.",

      ingredients:
        "Amla, Bhringraj",

      benefits:
        "Hair Growth, Shine"
    },

     {
      title: "Hair Oil",

      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200",

      description:
        "Ayurvedic herbal oil for healthy and strong hair.",

      ingredients:
        "Amla, Bhringraj",

      benefits:
        "Hair Growth, Shine"
    }

  ];

  const toggleDropdown = (index) => {

    if(openIndex === index){
      setOpenIndex(null);
    }
    else{
      setOpenIndex(index);
    }

  };

  return (

    <section className="products-section py-5 mt-5">

      <div className="container">

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="fw-bold display-5">
            Our Products
          </h1>

          <p className="text-muted">
            Premium Ayurvedic wellness products
          </p>

        </div>

        {/* Products */}

        <div className="row g-4">

          {products.map((item, index) => (

            <div
              className="col-xl-3 col-lg-4 col-md-6"
              key={index}
            >

              <div className="card border-0 h-100 product-card">

                {/* Product Image */}

                <img
                  src={item.image}
                  alt=""
                  className="product-img"
                />

                {/* Card Body */}

                <div className="card-body p-4">

                  <h4 className="fw-bold text-success">
                    {item.title}
                  </h4>

                  <p className="text-muted small mt-3">
                    {item.description}
                  </p>

                  {/* Button */}

                  <button
                    className="btn btn-success rounded-pill px-4 mt-3 fw-semibold"
                    onClick={() => toggleDropdown(index)}
                  >
                    {openIndex === index
                      ? "Hide Details"
                      : "View Details"}
                  </button>

                  {/* Dropdown */}

                  <div
                    className={`details-box ${
                      openIndex === index
                        ? "show-details"
                        : ""
                    }`}
                  >

                    {/* Ingredients */}

                    <div className="mt-4">

                      <h6 className="fw-bold">
                        Ingredients
                      </h6>

                      <p className="small text-muted">
                        {item.ingredients}
                      </p>

                    </div>

                    {/* Benefits */}

                    <div className="mt-3">

                      <h6 className="fw-bold">
                        Benefits
                      </h6>

                      <p className="small text-muted">
                        {item.benefits}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Products;