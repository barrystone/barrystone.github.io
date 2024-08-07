import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-animation header-animation--1"></div>
        <div className="header-animation header-animation--2 "></div>
        <div className="header-animation header-animation--3"></div>
        <div className="header-animation header-animation--4"></div>
        <div className="header-animation header-animation--5"></div>
        <div className="header-animation header-animation--6"></div>
        <h1 className="heading-primary--main " text-shadow="barrystone">
          BarryStone
        </h1>
        <div className="header__left">
          <div className="header__button-box">
            <Link
              href="/about"
              as={process.env.BACKEND_URL + '/about'}
              className="btn-primary"
            >
              <p>
                關於 <br />
                <span>About</span>
              </p>
            </Link>
            <Link
              href="/space"
              as={process.env.BACKEND_URL + '/space'}
              className="btn-primary btn-primary--2"
            >
              <p>
                空間 <br />
                <span>Space</span>
              </p>
            </Link>
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              {/* <p className="animate__animated animate__rotateInDownLeft ">
                <span className="heading-primary--sub  heading-primary--sub-1 ">
                  Software Engineer
                </span>
              </p> */}
              {/* <span className="heading-primary--sub heading-primary--sub-2 animate__animated  animate__bounceInLeft">
                Learning & making
              </span> */}
            </h1>
          </div>
          <div className="header__link-box animate__animated  animate__fadeInUpBig">
            <a
              href="https://github.com/barrystone"
              target="_blank"
              className="btn-secondary "
            >
              <p>Github</p>
            </a>
          </div>
          {/* <div className='menu'> </div> */}
        </div>
        <div className="header__info">
          <div className="header__info-textbox-1">#</div>
          <div className="header__info-textbox-2">
            {/* <p>網站還在開發中...</p>
            <p>更多功能敬請期待！</p> */}
            <p>
              A Software Development
              <br />
              Enthusiast
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
