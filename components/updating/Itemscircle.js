import React, { useEffect, useState } from 'react';
import languageImg from '../../utils/languageImg';

const Itemscircle = ({ name, index, image }) => {
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
  }, []);

  // !!circleRadius SHOULD BE SAME AS $circle-radius: variable  in _itermscircle.scss
  const circleRadius = 4.2;
  const LauguagesPercentage = (x) =>
    x / Object.values(repoLanguages).reduce((acc, cur) => acc + cur);

  // Reversing value, because we just can pass keyfrom 0%(start),
  // i want pass keyframe 100%(end) for our stroke direction but can't ,
  // so iam decide reverse it(1 -percentage)
  const LauguagesPercentageStroke = (x) =>
    ((1 - LauguagesPercentage(x)) * circleRadius * 6.28).toString() + 'rem';

  return (
    <div className={`itemscircle itemscircle-${index}`}>
      <ul className="itemscircle-wrapper">
        <div className="itemscircle__root itemscircle__root-close">
          {/* <p>Most used programming language</p> */}
          <p>
            程式語言
            <br />
            比例
          </p>
        </div>
        <div className="itemscircle__root itemscircle__root-open ">
          <img
            src={`img/tech/${
              image
                ? image + '-icon'
                : languageImg(Object.keys(repoLanguages)[0].toLowerCase())
            }.svg`}
            alt={(image ? image : Object.keys(repoLanguages)[0]) + '-icon'}
          />
        </div>
        {Object.keys(repoLanguages)
          .slice(0, 3)
          .map((x, index) => (
            <li
              className={`itemscircle__item itemscircle__item--${index}`}
              key={index}
            >
              <div className="itemscircle__item-stroke">
                <svg>
                  <circle
                    style={{
                      strokeDashoffset: LauguagesPercentageStroke(
                        Object.values(repoLanguages)[index]
                      )
                    }}
                  />
                </svg>
              </div>
              <div className="itemscircle__item-icon">
                <img
                  src={`img/tech/${languageImg(x.toLowerCase())}.svg`}
                  alt={x + '-icon'}
                />
                <div className="itemscircle__item-icon-percentage">
                  {(
                    LauguagesPercentage(Object.values(repoLanguages)[index]) *
                    100
                  ).toFixed(1)}
                  <span>%</span>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Itemscircle;
