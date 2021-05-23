import React from 'react';
import Itemscircle from './Itemscircle';

import ProjectShowingData from '../../_data/projectShowing.json';
// import testData from '../../_data/testing.json';

const projectContent = () => {
  const updatingData = ProjectShowingData;
  // const updatingData = testData;

  return (
    <div className="brick">
      <ul>
        {updatingData.map((e, index) => (
          <li>
            <a
              href={`https://github.com/barrystone/` + e.name}
              className={e.class}
              target="_blank"
            >
              {e.name}
            </a>

            <Itemscircle
              name={e.name}
              image={e.image ? e.image : null}
              index={index}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default projectContent;
