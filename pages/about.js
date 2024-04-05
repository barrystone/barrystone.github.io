import React from "react";
import Link from "next/link";
import Head from "next/head";

const about = () => {
  return (
    <div id="aboutpage">
      <Head>
        <title>Barrystone - About Me</title>
      </Head>
      <div className="about">
        <header className="about__top">
          <div className="about__top-buttonsbox">
            <Link
              href="/"
              as={process.env.BACKEND_URL + "/"}
              className="btn-tertiary"
            >
              Home
            </Link>
          </div>
          <div className="about__top-pagename">
            <span>About</span>
          </div>
        </header>
        <main className="about__mid">
          <div className="about__mid_right">
            <div className="infocard">
              <div className="infocard-avatar">
                <img src="/img/data/meavatar.png" alt="me-avatar" />
              </div>
              <div className="infocard__top">
                <div className="infocard__top-textbox">
                  <div className="infocard__top-textbox--1">
                    <p>
                      <br />
                      Learning
                    </p>
                  </div>
                  <div className="infocard__top-textbox--2">
                    <p>
                      <br />
                      Making
                    </p>
                  </div>
                </div>
                <div className="infocard__top-iconsbox">
                  <div className="infocard__top-iconsbox--1">
                    <a
                      href="https://medium.com/@barrystone-med"
                      target="_black"
                    >
                      <figure className="infocard__top-iconsbox-icon">
                        <img
                          src="/img/social/medium-icon.svg"
                          alt="medium-icon"
                        />
                        <figcaption>Medium</figcaption>
                      </figure>
                    </a>
                    <a href="https://hackmd.io/@barrystone" target="_black">
                      <figure className="infocard__top-iconsbox-icon infocard__top-iconsbox-icon--hackmd">
                        <img src="/img/design/note-icon.svg" alt="note-icon" />
                        <figcaption>Hackmd</figcaption>
                      </figure>
                    </a>
                  </div>
                  <div className="infocard__top-iconsbox--2">
                    {/* empty <span/> for scss grid layout */}
                    <span />
                    <a href="https://github.com/barrystone" target="_black">
                      <figure className="infocard__top-iconsbox-icon">
                        <img
                          src="/img/social/github-icon.svg"
                          alt="github-icon"
                        />
                        <figcaption>Github</figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </div>

              <div className="infocard__mid">
                <ul>
                  <li>
                    <p>
                      姓名： <span>石在元</span>
                    </p>
                  </li>
                  <li>
                    <p>暱稱： Barrystone</p>
                  </li>
                  <li>
                    <p>職稱： Software Engineer</p>
                  </li>
                  {/* <li>
                    <p>畢業： NPTU</p>
                  </li>
                  <li>
                    <p>主修： Computer Science</p>
                  </li> */}
                </ul>
              </div>
              <div className="infocard__bottom">
                <div className="infocard__bottom-icons">
                  <img
                    src="/img/social/facebook-icon.svg"
                    alt="facebook-icon"
                  />
                  <img src="/img/social/gmail-icon.svg" alt="gmail-icon" />
                  <img
                    src="/img/social/telegram-icon.svg"
                    alt="telegram-icon"
                  />
                  <img
                    src="/img/social/instagram-icon.svg"
                    alt="instagram-icon"
                  />
                  <img src="/img/social/youtube-icon.svg" alt="youtube-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="about__mid_left">
            <div className="about__mid_left-textbox">
              <div className="about__mid_left-textbox--1">
                <p>Full-stack </p>
                <p>R&D Software Engineer</p>
              </div>
              <div className="about__mid_left-buttonbox">
                <Link
                  href="/#aboutSection"
                  as={process.env.BACKEND_URL + "/#aboutSection"}
                  className="btn-show"
                >
                  專長技能
                </Link>
              </div>
              <div className="about__mid_left-textbox--2">
                <p>Love coding & Development</p>
              </div>
              <div className="about__mid_left-textbox--3">
                <p>Enjoy the process</p>
              </div>
              <figure className="about__mid_left-codetime">
                <img src="/img/data/wakatime210525.png" alt="me-avatar" />
                <figcaption>
                  My coding time doing in 2021.05.11 ~ 2021.05.25
                </figcaption>
              </figure>
            </div>
          </div>
        </main>
        <footer className="about__bottom"></footer>
      </div>
    </div>
  );
};

export default about;
