import React from 'react';

const CharkmarkIcon = ({
  border
}: any) => (
  <svg
    className="checkmark"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
  >
    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
    <path
      className="checkmark__check"
      fill="none"
      d="M14.1 27.2l7.1 7.2 16.7-16.8"
    />
  </svg>
);

const Skillset = () => {
  return (
    <ul className="skillset">
      <li className="item">
        <CharkmarkIcon />
        <h4>🏆 &nbsp;TS </h4>
        <p>Typescript</p>
        <span>
          <img src="img/tech/ts-icon.svg" alt="js-icon" />
        </span>
      </li>
      <li className="item">
        <CharkmarkIcon />
        <h4>JS</h4>
        <p>Javascript</p>
        <span>
          <img src="img/tech/js-icon.svg" alt="js-icon" />
        </span>
      </li>
      <li className="item">
        <CharkmarkIcon />
        <h4>Reactjs</h4>
        <p>
          JavaScript library for
          <br /> building user interfaces
        </p>
        <span>
          <img src="img/tech/reactjs-icon.svg" alt="react-icon" />
        </span>
      </li>
      <li className="item">
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
      <li className="item">
        <CharkmarkIcon />
        <h4>MongoDB</h4>
        <p>No-SQL Database</p>
        <span>
          <img src="img/tech/mongodb-icon.svg" alt="nodejs-icon" />
        </span>
      </li>
      <li className="item">
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
      <li className="item">
        <CharkmarkIcon />
        <h4>Docker</h4>
        <p>Containerization platform</p>
        <span>
          <img src="img/tech/docker-icon.svg" alt="docker-icon" />
        </span>
      </li>
      <li className="item">
        <CharkmarkIcon />
        <h4>K8s</h4>
        <p>Kubernetes, Container orchestration</p>
        <span>
          <img src="img/tech/kubernetes-icon.svg" alt="kubernetes-icon" />
        </span>
      </li>
      <li className="item">
        <CharkmarkIcon />
        <h4>Reduxjs</h4>
        <p>
          State container
          <br /> for JavaScript
        </p>
        <span>
          <img src="img/tech/reduxjs-icon.svg" alt="redux-icon" />
        </span>
      </li>
      <li className="item">
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
      {/* <li className="item">
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
      </li> */}
      {/* <li className="item">
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
      <li className="item">
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
      </li> */}
    </ul>
  );
};

export default Skillset;
