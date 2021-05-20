import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <div className="header__button-box">
            <Link href="/about">
              <a className="btn-primary">
                <p>自界</p>
              </a>
            </Link>
            <Link href="/note">
              <a className="btn-primary btn-primary--2">
                <p>筆記</p>
              </a>
            </Link>
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--sub heading-primary--sub-1 ">
                My name is
              </span>
              <span className="heading-primary--main ">barrystone</span>
              <span className="heading-primary--sub heading-primary--sub-2">
                Learning and making
              </span>
            </h1>
          </div>
          <div className="header__link-box">
            <a
              href="https://github.com/barrystone"
              target="_blank"
              className="btn-secondary"
            >
              <p>github</p>
            </a>
          </div>
          {/* <div className='menu'> </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
