import React from "react";
import Link from "next/link";

import ProjectContent from "../components/updating/ProjectContent";

const AboutSection = () => {
  return (
    <div className="section section-about">
      <div className="section-about__arrow-box">
        <Link href="/about">
          <a className="arrow-big">
            <p>About me</p>
          </a>
        </Link>
      </div>
      <div className="section-about__text-box1">
        <p className=" paragraph-big--1">NPTU computer science</p>
      </div>
      <div className="section-about__text-box2">
        <p className="paragraph-big--2 section-about__text-box2--1">
          正在學習如何寫網站的學生
        </p>
        <p className="paragraph-big--3 section-about__text-box2--2">
          專長 : Reactjs /Reduxjs /Nodejs
        </p>
      </div>
      <div className="section-about__project-box">
        <div className="project__title">
          <p>大專案</p>
        </div>
        <ProjectContent />
      </div>
    </div>
  );
};

export default AboutSection;