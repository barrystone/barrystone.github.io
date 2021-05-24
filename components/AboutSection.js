import React from 'react';

import ProjectContent from '../components/updating/ProjectContent';
import Skillset from './updating/Skillset';

const AboutSection = () => {
  return (
    <section className="section section-about">
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
        <section className="section-about__skillsetbox">
          <Skillset />
        </section>
        <div className="section-about__arrow-box">
          <a
            href="https://github.com/barrystone?tab=repositories"
            target="_blank"
            className="arrow-big"
          >
            {/* <p>作品</p> */}
            <p></p>
          </a>
        </div>
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
