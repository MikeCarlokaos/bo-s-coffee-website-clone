import React from "react";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import OverlayMenu from "../../components/layout/NavBar/OverlayMenu";
import SideBar from "../../components/layout/NavBar/SideBar";
import { useState } from "react";

const StoreLocator = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <main className={openMenu ? "main-overlay " : "main-content"}>
      <div className={openCart ? "sidebar-open" : "main-wrapper"}>
        <nav className={openMenu ? "show-menu" : "close-menu"}>
          <OverlayMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </nav>

        <section className="main-section">
          <NavBar
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            openCart={openCart}
            setOpenCart={setOpenCart}
          />
          <div className="page-error">
            <div className="page-error-content">
              <h1>Store Locator</h1>
              <a href="/" className="return-nav">
                return to store
              </a>
            </div>
          </div>
        </section>

        <footer className="footer-section">
          <Footer />
        </footer>
      </div>
      <nav className={openCart ? "show-cart" : "close-cart"}>
        <SideBar toggleCart={toggleCart} />
      </nav>
    </main>
  );
};

export default StoreLocator;
