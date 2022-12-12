import React from "react";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import OverlayMenu from "../../components/layout/NavBar/OverlayMenu";
import SideBar from "../../components/layout/NavBar/SideBar";
import { useState } from "react";

const Franchising = () => {
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
        <section className="main-section">
          <div className="page-wrapper">
            <div>
              <div className="page-franchising-header">
                <h1>Franchising</h1>
              </div>
              <div>
                <article className="franchising-article">
                  <div className="article-img-top"></div>

                  <div className="article-detail">
                    <h2>The Philippines' Largest Homegrown Coffee Chain</h2>
                    <p>
                      Philippine coffee has gained popularity over the last
                      couple of years, with varieties earning international
                      awards for taste and quality. This highlights great
                      achievement in production quality of our local farmers.
                    </p>
                    <p>
                      Most of our coffee beans are sourced locally. This is how
                      proud and confident we are of the flavor profiles unique
                      to our culture, geography and heritages.
                    </p>
                    <button>learn more</button>
                  </div>
                </article>
                <article className="franchising-article">
                  <div className="article-detail">
                    <h2>A Platform for Social Impact</h2>
                    <p>
                      Our founder aims for Bo's Coffee to be a platform for
                      Filipino artisans to reach a global audience by
                      highlighting and partnering with startup businessess and
                      social enterprise.
                    </p>
                    <p>
                      Bo's Coffee collaborates with young brands all the
                      Philipines such as Theo & Philo Chocolates, Bayani Brew,
                      Anthill Fabric Gallery, Tsaa Laya, Bote Central, Agrea
                      Coco Sugar, Tablea, Hope in a Bottle, Homegrown, Down to
                      Earth, Funk Trunk and Obrano.
                    </p>
                    <p>
                      Our Tribute Store in Cebu features furnitures designed by
                      acclaimed designer, Kenneth Cobonpue and art from local
                      artists.
                    </p>
                    <p>
                      We also dedicate spaces to share carefully curated spaces
                      from homegrown brands and social enterprises.
                    </p>
                  </div>
                  <div className="article-img-middle"></div>
                </article>

                <article className="franchising-article">
                  <div className="article-img-bottom"></div>

                  <div className="article-detail">
                    <h2>Primed for International Expansion</h2>

                    <p>
                      We have seen trends come and go in our 26 years of serving
                      homegrown brew. Change is a constant in the industry. What
                      has not changed is our passion for delighting our
                      customers and continuously contributing to the development
                      of the Philippine coffee industry.
                    </p>
                    <p>
                      The love, warmth and care that the Filipinos are famous
                      for is the foundation of the store team members.
                    </p>
                    <p>
                      We strive to bring out the best of our culture by offering
                      unparalleled customer service that showcase our very own
                      brand style of hospitality.
                    </p>
                  </div>
                </article>
                <div>
                  <button className="inquire-btn">inquire now!</button>
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

export default Franchising;
