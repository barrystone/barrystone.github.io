import React, { useEffect } from 'react';

import ProjectContent from '../components/updating/ProjectContent';
import Skillset from './updating/Skillset';

const AboutSection = () => {
  useEffect(() => {
    const skillsetElement = document.querySelector('.skillset');
    const skillsetClasslist = skillsetElement?.classList;

    const handleSkillMouseLeave = () => {
      window.requestAnimationFrame(() => {
        skillsetClasslist?.add('skillset--show');
      });
    };

    const handleSkillMouseOver = () => {
      skillsetClasslist?.remove('skillset--show');
    };

    const handleProjectContentClick = () => {
      window.open('https://github.com/barrystone', '_blank');
    };

    const handleProjectContentMouseOver = () => {
      const projectContentTitle = document.getElementById('collects');
      if (projectContentTitle) {
        projectContentTitle.innerHTML = 'Github';
      }
    };

    const handleProjectContentMouseLeave = () => {
      const projectContentTitle = document.getElementById('collects');
      if (projectContentTitle) {
        projectContentTitle.innerHTML = '我的作品';
        projectContentTitle.style.cursor = 'pointer';
      }
    };

    const handleScrewMouseOver = () => {
      const screws = document.querySelectorAll('.section-about__screwbox');
      screws.forEach((screw) =>
        screw.classList.add('section-about__screwbox--rotate')
      );
    };

    const handleScrewMouseLeave = () => {
      const screws = document.querySelectorAll('.section-about__screwbox');
      screws.forEach((screw) =>
        screw.classList.remove('section-about__screwbox--rotate')
      );
    };

    const skillElement = document.getElementById('skill');
    const projectContentTitle = document.getElementById('collects');
    const workArrowElement = document.getElementById('work-arrow');

    skillElement?.addEventListener('mouseleave', handleSkillMouseLeave);
    skillElement?.addEventListener('mouseover', handleSkillMouseOver);
    projectContentTitle?.addEventListener('click', handleProjectContentClick);
    projectContentTitle?.addEventListener(
      'mouseover',
      handleProjectContentMouseOver
    );
    projectContentTitle?.addEventListener(
      'mouseleave',
      handleProjectContentMouseLeave
    );
    skillElement?.addEventListener('mouseover', handleScrewMouseOver);
    skillElement?.addEventListener('mouseleave', handleScrewMouseLeave);
    workArrowElement?.addEventListener('mouseover', handleScrewMouseOver);
    workArrowElement?.addEventListener('mouseleave', handleScrewMouseLeave);

    return () => {
      skillElement?.removeEventListener('mouseleave', handleSkillMouseLeave);
      skillElement?.removeEventListener('mouseover', handleSkillMouseOver);
      projectContentTitle?.removeEventListener(
        'click',
        handleProjectContentClick
      );
      projectContentTitle?.removeEventListener(
        'mouseover',
        handleProjectContentMouseOver
      );
      projectContentTitle?.removeEventListener(
        'mouseleave',
        handleProjectContentMouseLeave
      );
      skillElement?.removeEventListener('mouseover', handleScrewMouseOver);
      skillElement?.removeEventListener('mouseleave', handleScrewMouseLeave);
      workArrowElement?.removeEventListener('mouseover', handleScrewMouseOver);
      workArrowElement?.removeEventListener(
        'mouseleave',
        handleScrewMouseLeave
      );
    };
  }, []);

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
          <p className=" paragraph-big--3">Research & Development Engineer</p>
        </div>
        <div className="section-about__textbox-2">
          <h3 className="heading-tertiary paragraph-big--4" id="skill">
            <span>專長技能</span>
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
          <h3 className="heading-tertiary paragraph-big--4" id="collects">
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
