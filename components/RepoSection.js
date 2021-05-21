import React from 'react';
import Slider from 'react-slick';

const RepoSection = ({ reposData }) => {
  const sliderSettings = {
    // dots: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false
  };

  return (
    <section className="section section-repo">
      <div className="section-repo__heading">
        <h2 className="heading-secondary">
          <span>Github 專案</span>
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
                  <div className="repo-description">
                    <div className="repo-description--title">
                      <p>簡介:</p>
                    </div>
                    <article className="repo-description--text">
                      <p>
                        {repo.description
                          ? repo.description.toString().length <= 70
                            ? repo.description
                            : repo.description.slice(0, 70) + ' ...'
                          : ' 尚未有簡介  !'}
                      </p>
                    </article>
                  </div>
                  {/* <div className="repo-star">
                    <div className="repo-star--icon"></div>
                    <div className="repo-star--number">
                      x{repo.stargazers_count}
                    </div>
                  </div>
                  <div className="repo__fork">
                    <div className="repo-fork--icon"></div>
                    <div className="repo-fork--number">x{repo.forks}</div>
                  </div> */}
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
