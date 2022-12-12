import React from "react";
import ViewMenu from "./ViewMenu";
import menus from "../../data/layout/menus";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const MenuSelection = menus.map((menu) => {
    return <ViewMenu key={menu.id} {...menu} />;
  });
  return (
    <section className="menu">
      <div className="menu-content">
        <div className="menu-bg-wrapper">
          <div className="menu-bg">
            <div className="menu-text">
              <h2 data-aos="fade-up" data-aos-once={true}>
                in-store menu
              </h2>
            </div>
          </div>
        </div>
        <div className="view-menu-wrapper">{MenuSelection}</div>
      </div>
    </section>
  );
};

export default Menu;
