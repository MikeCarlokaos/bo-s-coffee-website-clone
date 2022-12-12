import React, { useState, useEffect } from "react";

const Navbar = ({ openMenu, setOpenMenu, openCart, setOpenCart }) => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 80 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  const toggleNavbar = () => {
    setOpenMenu(!openMenu);
  };

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <header>
      <nav className={openMenu ? "sticky-nav" : `navbar  ${stickyClass}`}>
        <div className={openCart ? `navbar  ${stickyClass}` : ""}>
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
                <a href="/">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0405/8411/8424/files/Bo_s_Logo_HORIZONTAL_blck_2017_45804867-a740-450e-a550-e96bbddd5b31_x60@2x.png?v=1620380443"
                    alt="logo"
                    className="nav-logo"
                  />
                </a>
              </div>
            </div>

            <div className="cart-container">
              <div className="cart-logo-wrapper" onClick={toggleCart}>
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
