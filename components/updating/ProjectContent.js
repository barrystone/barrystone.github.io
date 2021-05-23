import React from 'react';
import Itemscircle from './Itemscircle';

import ProjectShowingData from '../../_data/projectShowing.json';

const projectContent = () => {
  const updatingData = ProjectShowingData;
  // const updatingData = [
  //   {
  //     name: 'fish-game_unity-2D',
  //     class: 'brick-font--mid'
  //   },
  //   {
  //     name: 'imgur-photobook',
  //     class: 'brick-font--mid'
  //   },
  //   {
  //     name: 'youtube-browser',
  //     class: 'brick-font--mid'
  //   },
  //   {
  //     name: 'my_diary-php',
  //     class: 'brick-font--big'
  //   }
  // ];
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

            <Itemscircle name={e.name} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default projectContent;
