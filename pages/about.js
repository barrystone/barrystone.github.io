import React from 'react';

const about = () => {
  return (
    <div id="aboutpage">
      <div className="about">
        <header className="about__top">
          <div className="about__top-buttonsbox">
            <a className="btn-tertiary" href="">
              首頁
            </a>
            <div className="about__top-pagename">
              <span>自我介紹</span>
            </div>
          </div>
        </header>
        <main className="about__mid">
          <div className="about__mid_left">
            <div className="about__mid_left-textbox1">
              <p>I am Web Developer</p>
            </div>
            <div className="about__mid_left-buttonbox">
              <a href="" className="btn-show">
                我的技能
              </a>
            </div>
            <div className="about__mid_left-textbox2">
              <p>Loving coding</p>
            </div>
            <div className="about__mid_left-textbox3">
              <p>and enjoy in the process</p>
            </div>
            <figure className="about__mid_left-codetime">
              <img src="/img/data/wakatime210525.png" alt="me-avatar" />
              <figcaption>
                My coding time doing in 2021.05.11 ~ 2021.05.25
              </figcaption>
            </figure>
          </div>
          <div className="about__mid_right">
            <div className="infocard">
              <div className="infocard-avatar">
                <img src="/img/data/meavatar.png" alt="me-avatar" />
              </div>
              <div className="infocard__top">
                <p>
                  Learning <br />
                  and <br />
                  Making
                </p>
                <div className="infocard__top-icons">
                  <img src="/img/social/github-icon.svg" alt="github-icon" />
                  <img src="/img/social/slack-icon.svg" alt="slack-icon" />
                </div>
              </div>
              <div className="infocard__mid">
                <ul>
                  <li>
                    <p>
                      名字： <b>石在元</b>
                    </p>
                  </li>
                  <li>
                    <p>暱稱： barrystone</p>
                  </li>
                  <li>
                    <p>職稱： Web Developer</p>
                  </li>
                  <li>
                    <p>學歷： NPTU</p>
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
        </main>
        <footer className="about__bottom"></footer>
      </div>
    </div>
  );
};

export default about;
