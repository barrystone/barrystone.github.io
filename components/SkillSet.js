import React, { useEffect } from 'react';
// import CharkmarkIcon from '../assets/img/tech/chackmark-icon.svg';
import HtmlIcon from '../assets/img/tech/html-icon.svg';
import CssIcon from '../assets/img/tech/css-icon.svg';
import SassIcon from '../assets/img/tech/sass-icon.svg';
import ReactIcon from '../assets/img/tech/react-icon.svg';
import ReduxIcon from '../assets/img/tech/redux-icon.svg';
import GraphqlIcon from '../assets/img/tech/graphql-icon.svg';
import NodejsIcon from '../assets/img/tech/nodejs-icon.svg';
import JsIcon from '../assets/img/tech/js-icon.svg';
// import TsIcon from '../assets/img/tech/ts-icon.svg';

const CharkmarkIcon = () => (
  <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
    <path
      class="checkmark__check"
      fill="none"
      d="M14.1 27.2l7.1 7.2 16.7-16.8"
    />
  </svg>
);

const Skillset = () => {
  useEffect(() => {
    console.clear();

    window.requestAnimationFrame(function () {
      document.querySelector('.skillset').classList.add('skillset--show');
    });
    document.getElementById('skill').addEventListener('mouseover', () => {
      document.querySelector('.skillset').classList.remove('skillset--show');
    });
    document.getElementById('skill').addEventListener('mouseleave', () => {
      document.querySelector('.skillset').classList.add('skillset--show');
    });
  }, []);
  return (
    <ul class="skillset">
      <li class="item">
        <CharkmarkIcon />
        <h4>HTML</h4>
        <p>Hypertext Markup Language.</p>
        <span>
          <HtmlIcon />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>CSS</h4>
        <p>Cascading Style Sheets.</p>
        <span>
          <CssIcon />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>SCSS</h4>
        <p>CSS preprocessor.</p>
        <span>
          <SassIcon />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>JS</h4>
        <p>javascript</p>
        <span>
          <JsIcon />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>Reactjs</h4>
        <p>Reactjs</p>
        <span>
          <ReactIcon />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>Reduxjs</h4>
        <p>Reduxjs</p>
        <span>
          <ReduxIcon />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>Graphql</h4>
        <p>Graphql</p>
        <span>
          <GraphqlIcon />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>Nodejs</h4>
        <p>Nodejs.</p>
        <span>
          <NodejsIcon />
        </span>
      </li>
    </ul>
  );
};

export default Skillset;
