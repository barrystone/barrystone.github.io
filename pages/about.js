import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const about = () => {
  return (
    <div id="aboutpage">
      <Head>
        <title>barrystone 關於</title>
      </Head>
      <div className="about">
        <header className="about__top">
          <div className="about__top-buttonsbox">
            <Link href="/" as={process.env.BACKEND_URL + '/'}>
              <a className="btn-tertiary" href="">
                首頁
              </a>
            </Link>
          </div>
          <div className="about__top-pagename">
            <span>關於個人</span>
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
                      Learning <br />
                      and <br />
                      Making
                    </p>
                  </div>
                  <div className="infocard__top-textbox--2">
                    <p>
                      Learning <br />
                      and <br />
                      Making
                    </p>
                  </div>
                </div>
                <div className="infocard__top-iconsbox">
                  <div className="infocard__top-iconsbox--1">
                    <a href="https://hackmd.io/@barrystone" target="_black">
                      <figure className="infocard__top-iconsbox-icon infocard__top-iconsbox-icon--hackmd">
                        <img src="/img/design/note-icon.svg" alt="note-icon" />
                        <figcaption>Hackmd</figcaption>
                      </figure>
                    </a>
                    <a href="https://github.com/barrystone" target="_black">
                      <figure className="infocard__top-iconsbox-icon">
                        <img
                          src="/img/social/github-icon.svg"
                          alt="github-icon"
                        />
                        <figcaption>Github</figcaption>
                      </figure>
                    </a>
                    <a href="http://frontendmentor.slack.com/" target="_black">
                      <figure className="infocard__top-iconsbox-icon">
                        <img
                          src="/img/social/slack-icon.svg"
                          alt="slack-icon"
                        />
                        <figcaption>Slack</figcaption>
                      </figure>
                    </a>
                  </div>
                  <div className="infocard__top-iconsbox--2">
                    <a href="https://hackmd.io/@barrystone" target="_black">
                      <figure className="infocard__top-iconsbox-icon infocard__top-iconsbox-icon--hackmd">
                        <img src="/img/design/note-icon.svg" alt="note-icon" />
                        <figcaption>Hackmd</figcaption>
                      </figure>
                    </a>
                    <a href="https://github.com/barrystone" target="_black">
                      <figure className="infocard__top-iconsbox-icon">
                        <img
                          src="/img/social/github-icon.svg"
                          alt="github-icon"
                        />
                        <figcaption>Github</figcaption>
                      </figure>
                    </a>
                    <a href="http://frontendmentor.slack.com/" target="_black">
                      <figure className="infocard__top-iconsbox-icon">
                        <img
                          src="/img/social/slack-icon.svg"
                          alt="slack-icon"
                        />
                        <figcaption>Slack</figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </div>

              <div className="infocard__mid">
                <ul>
                  <li>
                    <p>
                      名字： <span>石在元</span>
                    </p>
                  </li>
                  <li>
                    <p>暱稱： barrystone</p>
                  </li>
                  <li>
                    <p>職稱： web developer</p>
                  </li>
                  <li>
                    <p>在學： NPTU</p>
                  </li>
                  <li>
                    <p>主修： Computer Science</p>
                  </li>
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
                <p>I am a Full-stack</p>
                <p>Web Developer</p>
              </div>
              <div className="about__mid_left-buttonbox">
                <Link
                  href="/#aboutSection"
                  as={process.env.BACKEND_URL + '/#aboutSection'}
                >
                  <a href="" className="btn-show">
                    我的技能
                  </a>
                </Link>
              </div>
              <div className="about__mid_left-textbox--2">
                <p>Loving coding and development</p>
              </div>
              <div className="about__mid_left-textbox--3">
                <p>and enjoy the process</p>
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
