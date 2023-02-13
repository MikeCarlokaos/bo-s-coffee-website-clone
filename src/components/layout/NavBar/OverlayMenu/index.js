import React from "react";
import "../../../../style/nav/navbarOverlay.css";
import { Link } from "react-router-dom";

const OverlayMenu = ({ openMenu, setOpenMenu, openSidebar }) => {
  const toggleNavbar = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <section className="overlay-nav">
      <nav className="navbar">
        <div className="navbar-wrapper">
          <div className="hamburger-container">
            <button className="hamburger-lines" onClick={toggleNavbar}>
              <span
                className={openMenu ? "x-line x-line1" : "line line1"}
              ></span>

              <span
                className={openMenu ? "x-line x-line2" : "line line2"}
              ></span>

              <span
                className={openMenu ? "x-line x-line3" : "line line3"}
              ></span>
            </button>
          </div>
          <div className="nav-logo-container">
            <div className="nav-logo-wrapper">
              <img
                src="https://cdn.shopify.com/s/files/1/0405/8411/8424/files/Bo_s_Logo_HORIZONTAL_blck_2017_45804867-a740-450e-a550-e96bbddd5b31_x60@2x.png?v=1620380443"
                alt="logo"
                className="nav-logo"
              />
            </div>
          </div>

          <div className="cart-container">
            <div className="cart-logo-wrapper" onClick={openSidebar}>
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                className="icon icon-header-cart"
                viewBox="0 0 24.3 26"
              >
                <path d="M22.6 21.5v-2H7.9c-.2 0-.4-.1-.4-.1 0-.1 0-.3.2-.5l2.3-2.1 13.2-1.4 1.1-10h-18L4.6 1 .5 0 0 1.9l3.1.7 5.2 13-2 1.8c-.8.7-1 1.8-.7 2.7.4.9 1.2 1.4 2.3 1.4h14.7zM7.1 7.4H22l-.7 6.2-11.2 1.2-3-7.4z"></path>
                <ellipse cx="8.1" cy="24.4" rx="1.6" ry="1.6"></ellipse>
                <ellipse cx="21.7" cy="24.4" rx="1.6" ry="1.6"></ellipse>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div className="overlay-nav-content">
        <nav className="content-top">
          <Link to="/">
            <span>home</span>
          </Link>

          <Link to="/new">
            <span>new!</span>
          </Link>

          <Link to="/coffee-subscription">
            <span>coffee subscription</span>
          </Link>

          <Link to="/coffee-beans">
            <span>bo's coffee beans</span>
          </Link>

          <Link to="/quick-brew">
            <span>quick brew</span>
          </Link>

          <Link to="/bottled-beverages">
            <span>bottled beverages</span>
          </Link>

          <Link to="/coffee-to-go">
            <span>coffee to go</span>
          </Link>

          <Link to="/cake">
            <span>whole cake and cake tubs</span>
          </Link>

          <Link to="/baked-goods">
            <span>baked goods</span>
          </Link>

          <Link to="/dressing">
            <span>dressing & sauces</span>
          </Link>

          <Link to="/snacks">
            <span>snacks</span>
          </Link>

          <Link to="/gift-sets">
            <span>bo's gift sets</span>
          </Link>

          <Link to="/merchandise">
            <span>merchandise</span>
          </Link>
        </nav>

        <nav className="content-bottom">
          <Link to="/login">
            <span>Log in</span>
          </Link>

          <Link to="/create-account">
            <span>Create account</span>
          </Link>

          <Link to="/in-store-menu">
            <span>In-store Menu</span>
          </Link>

          <Link to="/order-ahead">
            <span>Order Ahead</span>
          </Link>

          <Link to="/store-locator">
            <span>Store Locator</span>
          </Link>

          <Link to="/egift-certificates">
            <span>eGift Certificates</span>
          </Link>

          <Link to="/franchising">
            <span>Franchising</span>
          </Link>
        </nav>

        <form className="content-search">
          <input type="text" placeholder="Search" />
          <button>
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className="icon icon-search"
              viewBox="0 0 21.4 21.4"
            >
              <path
                fill="#444"
                d="M13.4 0c-4.4 0-8 3.6-8 8 0 1.8.6 3.5 1.7 4.9L0 20l1.4 1.4 7.1-7.1c1.4 1.1 3.1 1.7 4.9 1.7 4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
              ></path>
            </svg>
          </button>
        </form>
        <div className="content-search-underline"></div>
      </div>
    </section>
  );
};

export default OverlayMenu;
