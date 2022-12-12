import React from "react";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import OverlayMenu from "../../components/layout/NavBar/OverlayMenu";
import SideBar from "../../components/layout/NavBar/SideBar";
import bottledBeverages from "../../components/data/pages/bottledBeverages";
import BeveragesCard from "./BeveragesCard";
import { useState } from "react";

const BottledBeverages = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  const BeverageSelection = bottledBeverages.map((beverage) => {
    return <BeveragesCard key={beverage.id} {...beverage} />;
  });

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
        <section className="main-section">
          <div className="page-wrapper">
            <div className="page-content-wrapper">
              <div className="page-content-text">
                <h1>Coffee Subscription</h1>
                <h3>A coffee subscription plan for your monthly coffee fix!</h3>
                <p>
                  Enjoy same day delivery from Mondays to Saturdays in Metro
                  Manila and Metro Cebu. Order by 3:00pm from Mondays to
                  Saturdays, and by 12:00 noon on Sundays. Orders placed on
                  Sundays and holidays will be shipped the next working day.
                </p>
              </div>
              <div className="page-catalogue-wrapper">
                <div className="page-catalogue-card-wrapper">
                  {BeverageSelection}
                </div>
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

export default BottledBeverages;
