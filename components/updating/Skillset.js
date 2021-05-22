import React, { useEffect } from 'react';

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
        <p>
          Hypertext Markup Language
          <br />
          &nbsp;
        </p>
        <span>
          <img src="img/tech/html-icon.svg" alt="html-icon" />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>CSS</h4>
        <p>
          Cascading Style Sheets
          <br />
          &nbsp;
        </p>
        <span>
          <img src="img/tech/css-icon.svg" alt="css-icon" />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>SCSS</h4>
        <p>
          Syntactically Awesome
          <br /> Style Sheets
        </p>
        <span>
          <img src="img/tech/sass-icon.svg" alt="sass-icon" />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>JS</h4>
        <p>
          Javascript.
          <br />
          King of the web dev
        </p>
        <span>
          <img src="img/tech/js-icon.svg" alt="js-icon" />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>Reactjs</h4>
        <p>A JavaScript library for building user interfaces</p>
        <span>
          <img src="img/tech/react-icon.svg" alt="react-icon" />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>Reduxjs</h4>
        <p>
          A predictable state <br />
          container for JavaScript
        </p>
        <span>
          <img src="img/tech/redux-icon.svg" alt="redux-icon" />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>Graphql</h4>
        <p>
          A query language for API <br />
          &nbsp;
        </p>
        <span>
          <img src="img/tech/graphql-icon.svg" alt="graphql-icon" />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>Nodejs</h4>
        <p>Back-end JavaScript runtime environment</p>
        <span>
          <img src="img/tech/nodejs-icon.svg" alt="nodejs-icon" />
        </span>
      </li>
    </ul>
  );
};

export default Skillset;
