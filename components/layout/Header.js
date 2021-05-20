import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1 className="heading-primary--main ">barrystone</h1>

        <div className="header__left">
          <div className="header__button-box">
            <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
              <a className="btn-primary">
                <p>自界</p>
              </a>
            </Link>
            <Link href="/note" as={process.env.BACKEND_URL + '/note'}>
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
