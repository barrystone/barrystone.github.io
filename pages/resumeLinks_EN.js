import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const resumeLinks_EN = ({ projectsData, achievementData }) => {
  const projectFields = projectsData[0];
  const projects = projectsData.slice(1);
  const achievements = achievementData.slice(1);

  return (
    <div id="resumelinkspage">
      <Head>
        <title>Zai-Yuan's Projects & Achievements</title>
      </Head>
      <div className="resumelinks">
        <div className="switchLang">
          <Link href="/resumeLinks" as={process.env.BACKEND_URL}>
            中文繁體
          </Link>
        </div>
        <div className="github">
          <span>Others :</span>
          <a href="https://github.com/barrystone" target="_blank">
            Github
          </a>
        </div>
        <section>
          <h2>Projects</h2>
          <ul>
            {projects.map((e) => (
              <li>
                {/* project name  EN (0=>6) */}
                <span>{e[6]}</span>
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
                          {/*  EN (0=>6) */}
                          {field.split(',')[2]}
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
          <h2>Achievements</h2>
          <ul>
            {achievements.map((e) => (
              <li>
                {/* EN (0=>2) */}
                <span>{e[2]}:</span>
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

export default resumeLinks_EN;

export async function getStaticProps() {
  // Because of "Error occurred prerendering page" github action deploying error, environmant variable might working in dev mode only(but why?).
  // const range = `A:E`;
  const sheetProjectApi =
    'https://sheets.googleapis.com/v4/spreadsheets/10q0h4IoGn-PY1K62Q3H4T15mMBhPshQvBc_AqIs-zL4/values/A:G?key=AIzaSyDXtHX8ByZFCQJPta9HOFZlJOcOhlf8b5Q';
  // const sheetProjectApi = `${process.env.NEXT_PUBLIC_GOOGLE_SHEET_API_BASE}/${process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID_PROJECT}/values/${range}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
  const { values: projectValues } = await fetch(sheetProjectApi).then((res) =>
    res.json()
  );
  const projectsData = projectValues;

  const sheetAchievementApi =
    'https://sheets.googleapis.com/v4/spreadsheets/1E3TcRRSEYTAZ4w-io-uDvcDAifxfit8klSs6gSVfiY0/values/A:G?key=AIzaSyDXtHX8ByZFCQJPta9HOFZlJOcOhlf8b5Q';
  // const sheetAchievementApi = `${process.env.NEXT_PUBLIC_GOOGLE_SHEET_API_BASE}/${process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID_ACHIEVEMENT}/values/${range}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
  const { values: achievementValues } = await fetch(sheetAchievementApi).then(
    (res) => res.json()
  );
  const achievementData = achievementValues;

  return {
    props: {
      projectsData,
      achievementData
    }
  };
}
