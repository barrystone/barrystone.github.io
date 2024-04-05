import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link
              href="/about"
              as={process.env.BACKEND_URL + "/about"}
              className="navigation__link"
            >
              關於個人
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              href="/note"
              as={process.env.BACKEND_URL + "/note"}
              className="navigation__link"
            >
              公開筆記
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
