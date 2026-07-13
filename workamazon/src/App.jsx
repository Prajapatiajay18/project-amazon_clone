import { useEffect, useState } from "react";

import heroImage from "./assets/hero_image.jpg";
import banner2 from "./assets/hero1.jpg";

import box1 from "./assets/box1_image.jpg";
import box2 from "./assets/box2_image.jpg";
import box3 from "./assets/box3_image.jpg";
import box4 from "./assets/box4_image.jpg";
import box5 from "./assets/box5_image.jpg";
import box6 from "./assets/box6_image.jpg";
import box7 from "./assets/box7_image.jpg";
import box8 from "./assets/box8_image.jpg";

const categoryLinks = [
  "Fresh",
  "MX Player",
  "Sell",
  "Bestsellers",
  "Today's Deals",
  "Mobiles",
  "Prime",
  "Amazon Pay",
  "Electronics",
  "Customer Service",
  "Home & Kitchen",
  "Fashion",
  "Computers",
];

const productCards = [
  {
    id: 1,
    title: "Appliances for your home | Up to 55% off",
    linkText: "See more",
    products: [
      {
        id: 1,
        name: "Clothes",
        image: box1,
      },
      {
        id: 2,
        name: "Air conditioners",
        image: box2,
      },
      {
        id: 3,
        name: "Furniture",
        image: box3,
      },
      {
        id: 4,
        name: "Smartphones",
        image: box4,
      },
    ],
  },
  {
    id: 2,
    title: "Revamp your home in style",
    linkText: "Explore all",
    products: [
      {
        id: 5,
        name: "Cushion covers, bedsheets & more",
        image: box5,
      },
      {
        id: 6,
        name: "Figurines, vases & more",
        image: box6,
      },
      {
        id: 7,
        name: "Home storage",
        image: box7,
      },
      {
        id: 8,
        name: "Lighting solutions",
        image: box8,
      },
    ],
  },
  {
    id: 3,
    title: "Starting ₹49 | Deals on home essentials",
    linkText: "See all deals",
    products: [
      {
        id: 9,
        name: "Cleaning supplies",
        image: box1,
      },
      {
        id: 10,
        name: "Bathroom accessories",
        image: box2,
      },
      {
        id: 11,
        name: "Kitchen accessories",
        image: box3,
      },
      {
        id: 12,
        name: "Home decor",
        image: box4,
      },
    ],
  },
  {
    id: 4,
    title: "Up to 75% off | Deals on headphones",
    linkText: "See all offers",
    products: [
      {
        id: 13,
        name: "Wireless headphones",
        image: box5,
      },
      {
        id: 14,
        name: "Bluetooth headphones",
        image: box6,
      },
      {
        id: 15,
        name: "Gaming headphones",
        image: box7,
      },
      {
        id: 16,
        name: "Premium earphones",
        image: box8,
      },
    ],
  },
];

const slides = [heroImage, banner2];

function Navbar({ cartCount, onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const cleanSearchValue = searchValue.trim();

    if (!cleanSearchValue) {
      document.getElementById("searchInput")?.focus();
      return;
    }

    onSearch(cleanSearchValue, selectedCategory);
    setSearchValue("");
  }

  return (
    <>
      <header className="navbar">
        <a href="#top" className="nav-logo">
          <div className="logo-text">
            amazon<span>.in</span>
          </div>

          <div className="amazon-smile"></div>
        </a>

        <div className="nav-item location-box">
          <i className="fa-solid fa-location-dot location-icon"></i>

          <div>
            <p className="small-text">Delivering to Surat 395007</p>
            <p className="bold-text">Update location</p>
          </div>
        </div>

        <form className="search-container" onSubmit={handleSubmit}>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option value="All">All</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Books">Books</option>
            <option value="Home">Home</option>
          </select>

          <input
            id="searchInput"
            type="text"
            value={searchValue}
            placeholder="Search Amazon.in"
            autoComplete="off"
            onChange={(event) => setSearchValue(event.target.value)}
          />

          <button type="submit" className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        <div className="nav-item language-box">
          <span className="india-flag">🇮🇳</span>
          <span className="bold-text">EN</span>
          <i className="fa-solid fa-caret-down arrow"></i>
        </div>

        <div className="nav-item account-box">
          <div className="account-trigger">
            <p className="small-text">Hello, sign in</p>

            <p className="bold-text">
              Account & Lists
              <i className="fa-solid fa-caret-down arrow"></i>
            </p>
          </div>

          <AccountDropdown />
        </div>

        <div className="nav-item orders-box">
          <div>
            <p className="small-text">Returns</p>
            <p className="bold-text">& Orders</p>
          </div>
        </div>

        <div className="nav-item cart-box">
          <div className="cart-icon-box">
            <span className="cart-count">{cartCount}</span>

            <i className="fa-solid fa-cart-shopping cart-icon"></i>
          </div>

          <span className="bold-text cart-title">Cart</span>
        </div>
      </header>

      <nav className="secondary-navbar">
        <button
          type="button"
          className="all-menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <i className="fa-solid fa-bars"></i>
          <span>All</span>
        </button>

        <div className="nav-links">
          {categoryLinks.map((link) => (
            <a href="#" key={link}>
              {link}

              {link === "Prime" && (
                <i className="fa-solid fa-caret-down"></i>
              )}
            </a>
          ))}
        </div>
      </nav>

      <SideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

function AccountDropdown() {
  return (
    <div className="account-dropdown">
      <div className="dropdown-arrow"></div>

      <div className="account-signin">
        <button type="button" className="signin-btn">
          Sign in
        </button>

        <p>
          New customer? <a href="#">Start here.</a>
        </p>
      </div>

      <div className="dropdown-divider"></div>

      <div className="account-columns">
        <div className="dropdown-column">
          <h3>Your Lists</h3>

          <a href="#">Create a Wish List</a>
          <a href="#">Wish from Any Website</a>
          <a href="#">Baby Wishlist</a>
          <a href="#">Discover Your Style</a>
          <a href="#">Explore Showroom</a>
        </div>

        <div className="dropdown-column account-column">
          <h3>Your Account</h3>

          <a href="#">Your Account</a>
          <a href="#">Your Orders</a>
          <a href="#">Your Wish List</a>
          <a href="#">Keep shopping for</a>
          <a href="#">Your Recommendations</a>
          <a href="#">Your Prime Membership</a>
          <a href="#">Your Prime Video</a>
          <a href="#">Your Subscribe & Save Items</a>
          <a href="#">Memberships & Subscriptions</a>
          <a href="#">Your Seller Account</a>
          <a href="#">Manage Your Content and Devices</a>
          <a href="#">Your Music Library</a>
          <a href="#">Register for a free Business Account</a>
        </div>
      </div>
    </div>
  );
}

function SideMenu({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`menu-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      ></div>

      <aside className={`side-menu ${isOpen ? "open" : ""}`}>
        <div className="side-menu-header">
          <h2>
            <i className="fa-solid fa-user-circle"></i>
            Hello, Sign in
          </h2>

          <button type="button" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="side-menu-content">
          <h3>Trending</h3>

          <a href="#">Best Sellers</a>
          <a href="#">New Releases</a>
          <a href="#">Movers and Shakers</a>

          <hr />

          <h3>Shop by Category</h3>

          <a href="#">Mobiles</a>
          <a href="#">Electronics</a>
          <a href="#">Fashion</a>
          <a href="#">Home & Kitchen</a>
          <a href="#">Computers</a>
        </div>
      </aside>
    </>
  );
}

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide((previousSlide) =>
      previousSlide === slides.length - 1 ? 0 : previousSlide + 1
    );
  }

  function previousSlide() {
    setCurrentSlide((previousSlide) =>
      previousSlide === 0 ? slides.length - 1 : previousSlide - 1
    );
  }

  useEffect(() => {
    const sliderInterval = setInterval(nextSlide, 4000);

    return () => clearInterval(sliderInterval);
  }, []);

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((slide, index) => (
          <img
            key={slide}
            src={slide}
            className={`slide ${
              index === currentSlide ? "active" : ""
            }`}
            alt={`Amazon offer ${index + 1}`}
          />
        ))}
      </div>

      <div className="hero-gradient"></div>

      <button
        type="button"
        className="slider-button previous"
        onClick={previousSlide}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <button
        type="button"
        className="slider-button next"
        onClick={nextSlide}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}

function ProductCard({ card, onAddToCart }) {
  return (
    <article className="product-card">
      <h2>{card.title}</h2>

      <div className="product-grid">
        {card.products.map((product) => (
          <button
            type="button"
            className="product-item"
            key={product.id}
            onClick={() => onAddToCart(product)}
          >
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </button>
        ))}
      </div>

      <a href="#" className="card-link">
        {card.linkText}
      </a>
    </article>
  );
}

function ProductSection({ onAddToCart }) {
  return (
    <section className="product-section">
      {productCards.map((card) => (
        <ProductCard
          key={card.id}
          card={card}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}

function Footer() {
  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="amazon-footer">
      <button
        type="button"
        className="back-to-top"
        onClick={backToTop}
      >
        Back to top
      </button>

      <div className="footer-main">
        <div className="footer-column">
          <h3>Get to Know Us</h3>

          <a href="#">About Amazon</a>
          <a href="#">Careers</a>
          <a href="#">Press Releases</a>
          <a href="#">Amazon Science</a>
        </div>

        <div className="footer-column">
          <h3>Connect with Us</h3>

          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>

        <div className="footer-column">
          <h3>Make Money with Us</h3>

          <a href="#">Sell on Amazon</a>
          <a href="#">Sell under Amazon Accelerator</a>
          <a href="#">Protect and Build Your Brand</a>
          <a href="#">Amazon Global Selling</a>
          <a href="#">Supply to Amazon</a>
          <a href="#">Become an Affiliate</a>
          <a href="#">Fulfilment by Amazon</a>
          <a href="#">Advertise Your Products</a>
          <a href="#">Amazon Pay on Merchants</a>
        </div>

        <div className="footer-column">
          <h3>Let Us Help You</h3>

          <a href="#">Your Account</a>
          <a href="#">Returns Centre</a>
          <a href="#">Recalls and Product Safety Alerts</a>
          <a href="#">100% Purchase Protection</a>
          <a href="#">Amazon App Download</a>
          <a href="#">Help</a>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="#top" className="footer-logo">
          <span className="footer-logo-text">amazon</span>
          <span className="footer-logo-in">.in</span>
          <span className="footer-smile"></span>
        </a>

        <div className="footer-settings">
          <button type="button" className="footer-setting-btn">
            <i className="fa-solid fa-globe"></i>
            <span>English</span>
            <i className="fa-solid fa-sort"></i>
          </button>

          <button type="button" className="footer-setting-btn">
            <span>🇮🇳</span>
            <span>India</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart(product) {
    setCartCount((previousCount) => previousCount + 1);
    console.log(`${product.name} cart me add hua`);
  }

  function handleSearch(searchValue, selectedCategory) {
    console.log("Search:", searchValue);
    console.log("Category:", selectedCategory);
  }

  return (
    <div id="top">
      <Navbar
        cartCount={cartCount}
        onSearch={handleSearch}
      />

      <main className="hero-section">
        <HeroSlider />

        <ProductSection onAddToCart={handleAddToCart} />
      </main>

      <Footer />
    </div>
  );
}

export default App;