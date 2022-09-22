import React, { useEffect, useState } from 'react';

import ProjectContent from '../components/updating/ProjectContent';
import Skillset from './updating/Skillset';

const AboutSection = () => {
  useEffect(() => {
    aboutAnimation();
    screwsRotate();
  }, []);

  const aboutAnimation = () => {
    const skillsetClasslist = document.querySelector('.skillset').classList;

    const enterAnimation = () => {
      const aboutElement = document
        .getElementById('aboutSection')
        .getBoundingClientRect();
      if (
        aboutElement.top >= 0 - aboutElement.height / 4 &&
        aboutElement.top <=
          window.innerHeight - aboutElement.height + aboutElement.height / 4
      ) {
        window.requestAnimationFrame(() => {
          skillsetClasslist.add('skillset--show');
        });

        window.removeEventListener('scroll', enterAnimation);
      }
    };
    window.addEventListener('scroll', enterAnimation);

    document.getElementById('skill').addEventListener('mouseleave', () => {
      window.requestAnimationFrame(() => {
        skillsetClasslist.add('skillset--show');
      });
    });
    document.getElementById('skill').addEventListener('mouseover', () => {
      skillsetClasslist.remove('skillset--show');
    });
  };

  const screwsRotate = () => {
    const screws = document.querySelectorAll('.section-about__screwbox');
    document.getElementById('work-arrow').addEventListener('mouseover', () => {
      for (let screw of screws) {
        screw.classList.add('section-about__screwbox--rotate');
      }
    });
    document.getElementById('work-arrow').addEventListener('mouseleave', () => {
      for (let screw of screws) {
        screw.classList.remove('section-about__screwbox--rotate');
      }
    });
  };

  return (
    <section className="section section-about" id="aboutSection">
      <div className="section-about__container">
        <div className="section-about__screwbox section-about__screwbox-1">
          <img src="/img/design/screw-icon.svg" alt="screw-icon" />
        </div>
        <div className="section-about__screwbox section-about__screwbox-2">
          <img src="/img/design/screw-icon.svg" alt="screw-icon" />
        </div>
        <div className="section-about__screwbox section-about__screwbox-3">
          <img src="/img/design/screw-icon.svg" alt="screw-icon" />
        </div>
        <div className="section-about__screwbox section-about__screwbox-4">
          <img src="/img/design/screw-icon.svg" alt="screw-icon" />
        </div>

        <div className="section-about__textbox-1">
          <p className=" paragraph-big--3">NPTU computer science</p>
        </div>
        <div className="section-about__textbox-2">
          <h3 className="heading-tertiary paragraph-big--4" id="skill">
            <span>我的技能樹</span>
          </h3>
        </div>
        <div className="section-about__arrow-box" id="work-arrow">
          <a
            href="https://github.com/barrystone?tab=repositories"
            target="_blank"
            className="arrow-big"
          >
            {/* <p>作品</p> */}
            <p></p>
          </a>
          <h3 className="heading-tertiary paragraph-big--4" id="works">
            <span>我的作品</span>
          </h3>
        </div>
        <section className="section-about__skillsetbox">
          <Skillset />
        </section>
        <div className="section-about__circlebox">
          <div className="circle-spinner">
            <img src="./img/myicon_mobile.png" alt="myicon" />
            <div className="circle-spinner__view">
              <span />
            </div>
          </div>
        </div>

        <div className="section-about__project-box">
          <ProjectContent />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
