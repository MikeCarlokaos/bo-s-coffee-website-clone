import React from "react";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import OverlayMenu from "../../components/layout/NavBar/OverlayMenu";
import SideBar from "../../components/layout/NavBar/SideBar";
import { useState } from "react";

const CreateAccount = () => {
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
            <div className="page-content-wrapper">
              <div className="form-wrapper">
                <form action="create-account">
                  <label htmlFor="">Create Account</label>
                  <div className="form-name">
                    <input
                      type="text"
                      name="firstname"
                      id=""
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="lastname"
                      id=""
                      placeholder="Last Name"
                    />
                  </div>
                  <input type="email" name="email" id="" placeholder="Email" />
                  <input type="password" name="" id="" placeholder="Password" />
                  <div></div>
                  <div className="submit-wrapper">
                    <button type="submit">Create</button>
                    <div className="submit-nav">
                      <a href="/">return to store</a>
                    </div>
                  </div>
                </form>
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

export default CreateAccount;
