import React, { useEffect } from 'react';
import Slider from 'react-slick';
// import ReposDataTesting from '../_data/reposData_210524.json';
import languageImg from '../utils/languageImg';

const RepoSection = ({ reposData }) => {
  // const reposData = ReposDataTesting;
  // console.log('reposData', reposData);
  const sliderSettings = {
    // dots: true,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  };
  // useEffect(() => {
  //   repoSectionEffect();
  // }, []);

  // const repoSectionEffect = () => {
  //   document
  //     .getElementById('repoSection-heading')
  //     .addEventListener('mouseover', () => {
  //       document
  //         .querySelector('.heading-secondary')
  //         .classList.add('heading-secondary--repoSectionEffect');
  //     });

  //   document
  //     .getElementById('repoSection-heading')
  //     .addEventListener('mouseleave', () => {
  //       document
  //         .querySelector('.heading-secondary')
  //         .classList.remove('heading-secondary--repoSectionEffect');
  //     });
  // };

  return (
    <section className="section section-repo">
      <div className="section-repo__heading">
        <h2 className="heading-secondary">
          <section id="repoSection-heading">
            <span>Github 專案</span>
          </section>
        </h2>
      </div>
      <div className="section-repo__repos">
        <Slider {...sliderSettings}>
          {reposData.map((repo, index) => (
            <div className="repo-wrapper" key={index}>
              <div className="repo">
                <div className="repo__title">
                  <a href={repo.html_url} target="_blank">
                    {repo.name}
                  </a>
                </div>
                <div className="repo__content">
                  <div className="repo-language">
                    <img
                      src={`img/tech/${languageImg(
                        repo.language.toLowerCase()
                      )}.svg`}
                      alt={`${repo.language}`}
                    />
                  </div>
                  <div className="repo-description">
                    <div className="repo-description--title">
                      <p>簡介</p>
                    </div>
                    <article className="repo-description--text">
                      <p>
                        {repo.description
                          ? repo.description.toString().length <= 60
                            ? repo.description
                            : repo.description.slice(0, 60) + ' ...'
                          : ' 尚未有簡介  !'}
                      </p>
                    </article>
                  </div>
                  <div className="repo-star">
                    <div className="repo-star--icon">
                      <img src="/img/design/star-icon.svg" alt="" />
                    </div>
                    <div className="repo-star--number">
                      X<span>{repo.stargazers_count}</span>
                    </div>
                  </div>
                  <div className="repo-fork">
                    <div className="repo-fork--icon">
                      <img src="/img/design/fork-icon.svg" alt="" />
                    </div>
                    <div className="repo-fork--number">
                      X <span>{repo.forks}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RepoSection;
