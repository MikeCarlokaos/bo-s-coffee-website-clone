import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const dateYear = new Date().getFullYear();

  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-list">
            <ul>
              <li>About us</li>
              <li>News</li>
              <li>Careers</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-list">
            <ul>
              <li>
                <Link to="/in-store-menu">
                  <span>In-store Menu</span>
                </Link>
              </li>
              <li>
                <Link to="/order-ahead">
                  <span>Order Ahead</span>
                </Link>
              </li>
              <li>
                <Link to="/store-locator">
                  <span>Store Locator</span>
                </Link>
              </li>
              <li>
                <Link to="/egift-certificates">
                  <span>eGift Certificates</span>
                </Link>
              </li>
              <li>
                <Link to="/franchising">
                  <span>Franchising</span>
                </Link>
              </li>
            </ul>
          </div>

          <form className="footer-signup">
            <div className="footer-label">
              <label>Sign up for updates</label>
            </div>
            <div className="footer-subtext">
              <p>Promotions, new products and sales. Directly to your inbox.</p>
            </div>
            <div className="footer-subscribe">
              <input
                type="text"
                placeholder="My email address"
                className="footer-email"
              />
              <div className="footer-btn-wrapper">
                <button className="footer-subscribe-btn">
                  Subscribe
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    className="icon icon-arrow-right"
                    viewBox="0 0 4 7"
                  >
                    <path fill="#444" d="M4 3.5L0 7V0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="footer-email-line"></div>
          </form>
          <div></div>
        </div>

        <div className="footer-bottom">
          <div className="footer-share">
            <div className="footer-svg-wrapper">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                className="icon icon-facebook"
                viewBox="0 0 8.4 20.6"
              >
                <path
                  fill="#444"
                  d="M8.4 6H5.6V4.1c0-.7.5-.9.8-.9h2V0H5.6C2.5 0 1.8 2.4 1.8 3.9V6H0v3.3h1.8v9.3h3.8V9.3h2.5L8.4 6z"
                ></path>
              </svg>
            </div>
            <div className="footer-svg-wrapper">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                className="icon icon-twitter"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#444"
                  d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z"
                ></path>
              </svg>
            </div>
            <div className="footer-svg-wrapper">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                className="icon icon-instagram"
                viewBox="0 0 512 512"
              >
                <path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z"></path>
                <path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z"></path>
                <circle cx="390.5" cy="121.5" r="30.2"></circle>
              </svg>
            </div>
          </div>

          <div className="footer-copyright">
            <p>Copyright &#169; {dateYear}, Bo's Coffee </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
