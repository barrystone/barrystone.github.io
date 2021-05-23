import React, { useEffect, useState } from 'react';

const Itemscircle = ({ name, index }) => {
  const initialRepoLanguagesData = {
    unfetched: 100,
    null: 100,
    null: 190
  };

  const [repoLanguages, setRepoLauange] = useState(initialRepoLanguagesData);

  useEffect(() => {
    const fetchRepoLanguages = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/barrystone/${name}/languages`
        );
        const data = await res.json();
        setRepoLauange(data);
        // console.log(`data ${name}: `, data);
      } catch (err) {
        setRepoLauange({
          fetched: 100,
          error: 100,
          error: 190
        });
      }
    };
    fetchRepoLanguages();
    // console.log('repoLanguages', repoLanguages);
    // console.log('most languages', Object.keys(repoLanguages)[0]);
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

  // $circle-radius: 3rem;  in _itermscircle.scss
  const circleRadius = 3;

  const LauguagesPercentage = (x) => {
    return (
      // Reversing value, because we just can pass keyfrom 0%(start),
      //i want pass keyframe 100%(end) for our stroke direction but can't ,
      //so iam decide reverse it(1 -percentage)
      (
        (1 - x / Object.values(repoLanguages).reduce((acc, cur) => acc + cur)) *
        circleRadius *
        6.28
      ).toString() + 'rem'
    );
  };

  return (
    <div className={`itemscircle itemscircle-${index}`}>
      <ul className="itemscircle-wrapper">
        <div className="itemscircle__root itemscircle__root-close">
          <p>Most used programming language</p>
        </div>
        <div className="itemscircle__root itemscircle__root-open ">
          <img
            src={`img/tech/${languageImg(
              Object.keys(repoLanguages)[0].toLowerCase()
            )}.svg`}
            alt={Object.keys(repoLanguages)[0] + '-icon'}
          />
        </div>
        {Object.keys(repoLanguages)
          .slice(0, 3)
          .map((x, index) => (
            <li className={`itemscircle__item itemscircle__item--${index}`}>
              <svg>
                <circle
                  fill="none"
                  style={{
                    strokeDashoffset: LauguagesPercentage(
                      Object.values(repoLanguages)[index]
                    )
                  }}
                />
              </svg>
              <span>
                <img
                  src={`img/tech/${languageImg(x.toLowerCase())}.svg`}
                  alt={x + '-icon'}
                />
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Itemscircle;
