import NavBar from "../../components/layout/NavBar";
import Slides from "../../components/layout/Slides";
import Catalogue from "../../components/layout/Catalogue";
import Item from "../../components/layout/Item";
import Hero from "../../components/layout/Hero";
import Menu from "../../components/layout/Menu";
import StoreLocator from "../../components/layout/StoreLocator";
import Order from "../../components/layout/Order";
import Footer from "../../components/layout/Footer";
import OverlayMenu from "../../components/layout/NavBar/OverlayMenu";
import { useState } from "react";
import SideBar from "../../components/layout/NavBar/SideBar";

function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className={openMenu ? "main-overlay " : "main-content"}>
      <main className={openCart ? "sidebar-open" : "main-wrapper"}>
        <section className={openMenu ? "show-menu" : "close-menu"}>
          <OverlayMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </section>
        <section className="main-section">
          <NavBar
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            openCart={openCart}
            setOpenCart={setOpenCart}
          />
          <Slides />
          <Catalogue />
          <Item />
          <Hero />
          <Menu />
          <StoreLocator />
          <Order />
          <div className="extend">
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </section>
        <footer className="footer-section">
          <Footer />
        </footer>
      </main>
      <section className={openCart ? "show-cart" : "close-cart"}>
        <SideBar toggleCart={toggleCart} />
      </section>
    </div>
  );
}

export default Home;
