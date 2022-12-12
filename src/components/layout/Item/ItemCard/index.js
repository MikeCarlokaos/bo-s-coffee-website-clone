import React from "react";
import { useState } from "react";

const ItemCard = ({ coverImg, title, price, text, options }) => {
  const [optionValue, setOptionValue] = useState("");
  const [openShare, setopenShare] = useState(false);

  const handleChange = (e) => {
    setOptionValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`This is only a sample`);
  };

  const toggleShare = () => {
    setopenShare(!openShare);
  };

  return (
    <div className="item-card">
      <div className="item-img-wrapper">
        <img src={coverImg} alt={title} className="item-img" />
      </div>

      <div className="item-detail">
        <div className="item-content">
          <h2 className="item-title">{title}</h2>
          <p className="item-price">&#8369;{price}</p>
          <p className="item-text">
            <a href="_blank">Shipping</a> calculated at checkout.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="item-form">
          <div className="select-wrap">
            <label>{text} </label>
            <select value={optionValue} onChange={handleChange}>
              {options.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </select>
            <div className="arrow-icon">
              <div className="triangle-down"></div>
            </div>
          </div>

          <button type="submit" className="item-add-btn">
            Add to Cart
          </button>
        </form>

        <div className="item-share">
          <div className="item-share-wrapper">
            <a
              href="_blank"
              target=""
              rel="noopener noreferrer"
              className="detail-ref"
            >
              <span className="detail-ref-svg-wrapper">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-details"
                  viewBox="0 0 14.42 12"
                >
                  <path d="M5.42.2h9v2h-9zM5.42 5h9v2h-9z"></path>
                  <ellipse cx="1.17" cy="1.2" rx="1.17" ry="1.2"></ellipse>
                  <ellipse cx="1.17" cy="6" rx="1.17" ry="1.2"></ellipse>
                  <path d="M5.42 9.8h9v2h-9z"></path>
                  <ellipse cx="1.17" cy="10.8" rx="1.17" ry="1.2"></ellipse>
                </svg>
              </span>
              <span className="item-share-detail">full details</span>
            </a>
          </div>

          <div className="item-share-wrapper">
            <button className="share-btn" onClick={toggleShare}>
              <span className="share-btn-svg-wrapper">
                {openShare ? (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    className="icon icon-close"
                    viewBox="0 0 16.8 16.8"
                  >
                    <path d="M16.8 1.5L15.4.1 8.4 7l-7-7L0 1.4l7 7-7 7 1.4 1.4 7-7 7 7 1.4-1.4-7-7z"></path>
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    className="icon icon-share"
                    viewBox="0 0 13 15"
                  >
                    <path d="M10.5 10c-.8 0-1.6.4-2 1L4.8 8.6c.1-.4.2-.7.2-1.1s-.1-.7-.2-1.1L8.5 4c.5.6 1.2 1 2 1C11.9 5 13 3.9 13 2.5S11.9 0 10.5 0 8 1.1 8 2.5c0 .2 0 .4.1.5l-4 2.6c-.4-.4-1-.6-1.6-.6C1.1 5 0 6.1 0 7.5S1.1 10 2.5 10c.6 0 1.2-.2 1.6-.6l4 2.6c-.1.1-.1.3-.1.5 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z"></path>
                  </svg>
                )}
              </span>
              <span className="item-share-detail">share</span>
            </button>

            <div className={openShare ? "show-share" : "social-share-wrapper"}>
              <ul className="social-share-item-list">
                <li className="social-share-item faceboook ">
                  <a
                    target="_blank"
                    href="_blank"
                    className="social-share-link"
                    data-samitapbl-handle="salted-caramel-mocha-cake"
                    rel="noopener"
                    aria-describedby="a11y-new-window-external-message"
                    tabIndex="-1"
                  >
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
                  </a>
                </li>

                <li className="social-share-item twitter">
                  <a
                    target="_blank"
                    href="_blank"
                    className="social-share-link"
                    data-samitapbl-handle="salted-caramel-mocha-cake"
                    rel="noopener"
                    aria-describedby="a11y-new-window-external-message"
                    tabIndex="-1"
                  >
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
                  </a>
                </li>

                <li className="social-share-item pinterest">
                  <a
                    target="_blank"
                    href="_blank"
                    className="social-share-link"
                    rel="noopener"
                    tabIndex="-1"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      className="icon icon-pinterest"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#444"
                        d="M9.958.811q1.903 0 3.635.744t2.988 2 2 2.988.744 3.635q0 2.537-1.256 4.696t-3.415 3.415-4.696 1.256q-1.39 0-2.659-.366.707-1.147.951-2.025l.659-2.561q.244.463.903.817t1.39.354q1.464 0 2.622-.842t1.793-2.305.634-3.293q0-2.171-1.671-3.769t-4.257-1.598q-1.586 0-2.903.537T5.298 5.897 4.066 7.775t-.427 2.037q0 1.268.476 2.22t1.427 1.342q.171.073.293.012t.171-.232q.171-.61.195-.756.098-.268-.122-.512-.634-.707-.634-1.83 0-1.854 1.281-3.183t3.354-1.329q1.83 0 2.854 1t1.025 2.61q0 1.342-.366 2.476t-1.049 1.817-1.561.683q-.732 0-1.195-.537t-.293-1.269q.098-.342.256-.878t.268-.915.207-.817.098-.732q0-.61-.317-1t-.927-.39q-.756 0-1.269.695t-.512 1.744q0 .39.061.756t.134.537l.073.171q-1 4.342-1.22 5.098-.195.927-.146 2.171-2.513-1.122-4.062-3.44T.59 10.177q0-3.879 2.744-6.623T9.957.81z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
