import React from "react";
import Slider from "react-slick";

const RepoSection = ({ reposData }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="section section-repo">
      {/* <div className="section-repo__heading-box">
        <h2 className="heading-secondary">
          <span>Github 專案</span>
        </h2>
      </div>
      <div className="section-repo__repos-box">
        <Slider {...sliderSettings}>
          {reposData.map((repo, index) => (
            <div className="repo" key={index}>
              <div className="repo__title">
                <p>{repo.name}</p>
              </div>
              <div className="repo__description-box">
                <div className="repo__description-title">
                  <p>簡介:</p>
                </div>
                <div className="repo__description-text">
                  <p>{repo.description}</p>
                </div>
              </div>
              <div className="repo__star-box">
                <div className="repo__star-icon"></div>
                <div className="repo__star-number">
                  x{repo.stargazers_count}
                </div>
              </div>
              <div className="repo__fork-box">
                <div className="repo__fork-icon"></div>
                <div className="repo__fork-number">x{repo.forks}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
};

export default RepoSection;
