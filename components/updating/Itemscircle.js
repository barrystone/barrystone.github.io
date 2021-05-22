import React, { useEffect, useState } from 'react';

const Itemscircle = ({ name, index }) => {
  const initialRepoLanguagesData = ['unfetched', 'null'];

  const [repoLanguages, setRepoLauange] = useState(initialRepoLanguagesData);

  useEffect(() => {
    const fetchRepoLanguages = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/barrystone/${name}/languages`
        );
        const data = await res.json();
        setRepoLauange(Object.keys(data));

        // console.log(`data ${name}: `, data);
      } catch (err) {
        setRepoLauange(['fetched', 'error']);
      }
    };

    fetchRepoLanguages();
  }, []);

  const languageImg = (e) => {
    switch (e) {
      case 'javascript':
        return 'js-icon';
      case 'html':
        return 'html-icon';
      case 'css':
        return 'css-icon';
      case 'scss':
        return 'sass-icon';
      case 'typescript':
        return 'ts-icon';

      default:
        return 'none';
    }
  };

  return (
    <div classname="itemscircle">
      <ul id={`itemscircle_root-${index}`}>
        <a
          href={`itemscircle_root-${index}`}
          className="itemscircle__root temscircle__root-open "
        >
          <img
            src={`img/tech/${languageImg(repoLanguages[0].toLowerCase())}.svg`}
            alt={repoLanguages[0] + '-icon'}
          />
        </a>
        <a href="#none" className="itemscircle__root itemscircle__root-close">
          none
        </a>
        {repoLanguages.slice(0, 3).map((x) => (
          <li className="itemscircle__item">
            <a href={`itemscircle__root-${index}`}>
              <span className="itemscircle__item-img">
                <img
                  src={`img/tech/${languageImg(x.toLowerCase())}.svg`}
                  alt={x + '-icon'}
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Itemscircle;
