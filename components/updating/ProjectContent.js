import React from 'react';

//about section in Home page, updaing my favorite repos and resizing fonmat to display in client
//a link, repon name, css class format

const projectContent = () => {
  const updatingData = [
    {
      name: 'onlene-store',
      href: 'https://github.com/barrystone/online-store',
      class: 'project__item--big'
    },
    {
      name: 'dev-social-network-community',
      href: 'https://github.com/barrystone/dev-social-network-community',
      class: 'project__item--small'
    },
    {
      name: 'chatApp_react',
      href: 'https://github.com/barrystone/chatApp_react',
      class: 'project__item--big'
    },
    {
      name: 'natours',
      href: 'https://github.com/barrystone/natours',
      class: 'project__item--big'
    }
  ];

  return (
    <div className="project__content">
      <ul>
        <li>
          <a
            href={updatingData[0].href}
            className={updatingData[0].class}
            target="_blank"
          >
            {updatingData[0].name}
          </a>
        </li>
        <li>
          <a
            href={updatingData[1].href}
            className={updatingData[1].class}
            target="_blank"
          >
            {updatingData[1].name}
          </a>
        </li>
        <li>
          <a
            href={updatingData[2].href}
            className={updatingData[2].class}
            target="_blank"
          >
            {updatingData[2].name}
          </a>
        </li>
        <li>
          <a
            href={updatingData[3].href}
            className={updatingData[3].class}
            target="_blank"
          >
            {updatingData[3].name}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default projectContent;
