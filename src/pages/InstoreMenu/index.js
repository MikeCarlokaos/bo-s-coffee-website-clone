import React from "react";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import OverlayMenu from "../../components/layout/NavBar/OverlayMenu";
import SideBar from "../../components/layout/NavBar/SideBar";
import { useState } from "react";

const InStoreMenu = () => {
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
        <NavBar
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          openCart={openCart}
          setOpenCart={setOpenCart}
        />
        <nav className={openCart ? "show-cart" : "close-cart"}>
          <SideBar toggleCart={toggleCart} />
        </nav>
        <section className="main-section">
          <div className="page-wrapper">
            <div className="page-content-wrapper">
              <div className="page-img-wrapper">
                <img
                  src="https://cdn.shopify.com/s/files/1/0405/8411/8424/files/Bo_s_Instore_Menu_2022_copy_2834cc54-4fc0-47c5-87a7-2a3dabfa9c71_1512x.png?v=1649681481"
                  alt="beverages"
                />
                <button>download now!</button>
              </div>
              <div className="page-img-wrapper">
                <img
                  src="https://cdn.shopify.com/s/files/1/0405/8411/8424/files/Bo_s_Instore_Menu_Food_2022_copy_d2ed73f2-4ac0-4727-a53b-b42bfa1225a8_1512x.png?v=1649682397"
                  alt="cakes & snacks"
                />
              </div>
              <div className="page-instore-order">
                <p>
                  <em>For pick-up and delivery</em>
                </p>
                <button>order ahead</button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>

        <footer className="footer-section">
          <Footer />
        </footer>
      </div>
    </main>
  );
};

export default InStoreMenu;
