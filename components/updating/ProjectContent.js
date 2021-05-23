import React, { useEffect, useState } from 'react';
import Itemscircle from './Itemscircle';

//about section in Home page, updaing my favorite repos and resizing fonmat to display in client
//a link, repon name, css class format

const projectContent = () => {
  const updatingData = [
    {
      name: 'online-store',
      class: 'brick-font--big'
    },
    {
      name: 'dev-social-network-community',
      class: 'brick-font--small'
    },
    {
      name: 'natours',
      class: 'brick-font--big'
    },
    {
      name: 'chatApp_react',
      class: 'brick-font--big'
    }
  ];

  return (
    // <div className="project__content">
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
