import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ResumeLinkTemplate = ({
  projectsData,
  achievementData,
  language,
  projectsSource: { startElement, elementField }
}) => {
  const projectFields = projectsData[0];
  const projects = projectsData.slice(1);
  const achievements = achievementData.slice(1);

  // Language 'en' & 'ch' field content.
  const headTitle =
    language === 'en'
      ? `Zai-Yuan's Projects & Achievements`
      : language === 'ch'
      ? `石在元的專案&成果經歷`
      : null;
  const switchLangTitle =
    language === 'en' ? `中文繁體` : language === 'ch' ? `English` : null;
  const githubTitle =
    language === 'en' ? `Others :` : language === 'ch' ? `其他專案:` : null;
  const skillprojectsTitle =
    language === 'en'
      ? ` Skills correspond to Github public project links`
      : language === 'ch'
      ? ` 技能對應Github已公開專案連結`
      : null;
  const switchLangURL =
    language === 'en'
      ? `/resumeLinks`
      : language === 'ch'
      ? `/resumeLinks_EN`
      : null;
  const projectsTitle =
    language === 'en' ? `Projects` : language === 'ch' ? `專案` : null;
  const achievementsTitle =
    language === 'en' ? `Achievements` : language === 'ch' ? `成果經歷` : null;

  return (
    <div id="resumelinkspage">
      <Head>
        <title>{headTitle}</title>
      </Head>
      <div className="resumelinks">
        <div className="switchLang">
          <Link href={switchLangURL} as={process.env.BACKEND_URL}>
            {switchLangTitle}
          </Link>
        </div>
        <div className="github">
          <span>{githubTitle}</span>
          <a href="https://github.com/barrystone" target="_blank">
            Github
          </a>
        </div>
        <section className="skillprojects">
          <a href="https://hackmd.io/@barrystone/BJ__wbPvo" target="_blank">
            {skillprojectsTitle}
          </a>
        </section>
        <section>
          <h2>{projectsTitle}</h2>
          <ul>
            {projects.map((e, idx) => (
              <li>
                {/* 中文[0] or EN[6] startElement */}
                <span>
                  {idx + 1}
                  {'. '}
                  {e[startElement]}
                </span>
                <br />
                {/* project fields */}
                {e.slice(1).map((field, index) =>
                  field && index < 5 ? (
                    <div className="projectfield">
                      {/* project field */}
                      <span>{projectFields[index + 1].split(',')[1]}:</span>

                      <br />
                      {/* For my custom field in google sheet (pdf download field)*/}
                      {index === 2 ? (
                        <a href={field.split(',')[0]} target="_blank">
                          {/* 中文[0] or EN[2] elementField */}
                          {field.split(',')[elementField]}
                        </a>
                      ) : (
                        <a href={field} target="_blank">
                          {field}
                        </a>
                      )}
                    </div>
                  ) : null
                )}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>{achievementsTitle}</h2>
          <ul>
            {achievements.map((e) => (
              <li>
                {/* 中文[0] or EN[2] elementField */}
                <span>{e[elementField]}:</span>
                <br />
                <br />
                <a href={e[1]} target="_blank">
                  {e[1]}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ResumeLinkTemplate;
