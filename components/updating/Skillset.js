import React, { useEffect } from 'react';

const CharkmarkIcon = ({ border }) => (
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
          Hypertext Markup
          <br />
          Language
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
        <h4>🏆 &nbsp;JS </h4>
        <p>
          Javascript
          <br />
          king of the web dev
        </p>
        <span>
          <img src="img/tech/js-icon.svg" alt="js-icon" />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>Reactjs</h4>
        <p>
          JavaScript library for
          <br /> building user interfaces
        </p>
        <span>
          <img src="img/tech/react-icon.svg" alt="react-icon" />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>Reduxjs</h4>
        <p>
          State container
          <br /> for JavaScript
        </p>
        <span>
          <img src="img/tech/redux-icon.svg" alt="redux-icon" />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>Vuejs</h4>
        <p>
          Progressive
          <br /> JavaScript Framework
        </p>
        <span>
          <img src="img/tech/vuejs-icon.svg" alt="graphql-icon" />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>Express</h4>
        <p>
          Back-end framework <br />
          for Node.js
        </p>
        <span>
          <img
            src="img/tech/express-icon.svg"
            alt="nodejs-icon"
            style={{
              border: '1px solid #A4A4A4',
              borderRadius: '50%',
              width: '5.5rem',
              height: '5.5rem',
              padding: '0 .5rem',
              marginLeft: '-.5rem'
            }}
          />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>PHP</h4>
        <p>
          General-purpose <br />
          Scripting language
          <br />
        </p>
        <span>
          <img src="img/tech/php2-icon.svg" alt="graphql-icon" />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>Nodejs</h4>
        <p>
          Back-end JavaScript
          <br /> runtime environment
        </p>
        <span>
          <img src="img/tech/nodejs-icon.svg" alt="nodejs-icon" />
        </span>
      </li>
      <li class="item">
        <CharkmarkIcon />
        <h4>Graphql</h4>
        <p>
          Query language for API <br />
          &nbsp;
        </p>
        <span>
          <img src="img/tech/graphql-icon.svg" alt="graphql-icon" />
        </span>
      </li>
    </ul>
  );
};

export default Skillset;
