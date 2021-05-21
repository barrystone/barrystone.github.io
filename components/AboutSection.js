import React, { useEffect } from 'react';
import Link from 'next/link';

import ProjectContent from '../components/updating/ProjectContent';

const AboutSection = () => {
  useEffect(() => {
    console.clear();

    window.requestAnimationFrame(function () {
      document.querySelector('.skillset').classList.add('skillset--show');
    });
  }, []);
  return (
    <div className="section section-about">
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
      <div className="section-about__textbox-1">
        <p className=" paragraph-big--2">NPTU computer science</p>
      </div>
      <div className="section-about__textbox-2">
        <h3 className="heading-tertiary paragraph-big--4">我的技能</h3>
      </div>
      <section className="section-about__skillsetbox">
        <ul class="skillset">
          <li class="item">
            <h4>HTML</h4>
            <p>Hypertext Markup Language.</p>
          </li>
          <li class="item">
            <h4>CSS</h4>
            <p>Cascading Style Sheets.</p>
          </li>
          <li class="item">
            <h4>SCSS</h4>
            <p>CSS preprocessor.</p>
          </li>
          <li class="item">
            <h4>javascript</h4>
            <p>javascript</p>
          </li>
          <li class="item">
            <h4>Reactjs</h4>
            <p>Reactjs</p>
          </li>
          <li class="item">
            <h4>Reduxjs</h4>
            <p>Reduxjs</p>
          </li>
          <li class="item">
            <h4>Nextjs</h4>
            <p>Nextjs</p>
          </li>
          <li class="item">
            <h4>Nodejs</h4>
            <p>Nodejs.</p>
          </li>
        </ul>
      </section>

      <div className="section-about__project-box">
        {/* <div className="project__title">
          <p>作品</p>
        </div> */}
        <ProjectContent />
      </div>
    </div>
  );
};

export default AboutSection;
