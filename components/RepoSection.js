import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import languageImg from '../utils/languageImg';

// import ReposDataTesting from '../_data/reposData_210524.json';

const RepoSection = ({ reposData: staticReposData }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  };

  const [reposData, setReposData] = useState([]);

  const requestReposData = async () => {
    try {
      const res = await fetch(
        'https://api.github.com/users/barrystone/repos?sort=updated'
      );
      const data = await res.json();
      if (res.status == 200) {
        setReposData(data);
        console.log('reposData', data);
      } else {
        res.status == 403
          ? console.log('API limit !')
          : console.log('API problem not 403');
      }
    } catch (err) {
      console.log('error: ', err);
    }
  };
  useEffect(() => {
    setReposData(staticReposData);
    // setReposData(ReposDataTesting);
    requestReposData();
  }, []);

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
                        repo.language ? repo.language.toLowerCase() : 'coding'
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
