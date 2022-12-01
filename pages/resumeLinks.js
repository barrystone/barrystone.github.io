import React from 'react';

const resumeLinks = ({ projectsData, achievementData }) => {
  const projectFields = projectsData[0];
  const projects = projectsData.slice(1);
  const achievements = achievementData.slice(1);

  return (
    <div className="resumelinks">
      <section>
        <h2>專案</h2>
        <ul>
          {projects.map((e) => (
            <li>
              {/* project name */}
              <span>{e[0]}</span>
              <br />
              {/* project fields */}
              {e.slice(1).map((field, index) =>
                field ? (
                  <div className="projectfield">
                    {/* project field */}
                    <span>{projectFields[index + 1]}</span>
                    <br />
                    {/* For my custom field in google sheet (pdf download field)*/}
                    {index === 2 ? (
                      <a href={field.split(',')[0]} target="_blank">
                        {field.split(',')[1]}
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
        <h2>成果經歷</h2>
        <ul>
          {achievements.map((e) => (
            <li>
              <span>{e[0]}:</span>
              <br />
              <a href={e[1]} target="_blank">
                {e[1]}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default resumeLinks;

export async function getStaticProps() {
  const range = `A:E`;
  const sheetProjectApi = `${process.env.NEXT_PUBLIC_GOOGLE_SHEET_API_BASE}/${process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID_PROJECT}/values/${range}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
  const { values: projectValues } = await fetch(sheetProjectApi).then((res) =>
    res.json()
  );
  const projectsData = projectValues;

  const sheetAchievementApi = `${process.env.NEXT_PUBLIC_GOOGLE_SHEET_API_BASE}/${process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID_ACHIEVEMENT}/values/${range}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
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
