import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ResumeLinkTemplate from '../components/ResumeLinkTemplate';

const resumeLinks = ({ projectsData, achievementData }) => {
  return (
    <ResumeLinkTemplate
      projectsData={projectsData}
      achievementData={achievementData}
      language="ch"
      projectsSource={{ startElement: 0, elementField: 0 }}
    />
  );
};

export default resumeLinks;

export async function getStaticProps() {
  // Because of "Error occurred prerendering page" github action deploying error, environmant variable might working in dev mode only(but why?).
  // const range = `A:E`;
  const sheetProjectApi =
    'https://sheets.googleapis.com/v4/spreadsheets/10q0h4IoGn-PY1K62Q3H4T15mMBhPshQvBc_AqIs-zL4/values/A:E?key=AIzaSyDXtHX8ByZFCQJPta9HOFZlJOcOhlf8b5Q';
  // const sheetProjectApi = `${process.env.NEXT_PUBLIC_GOOGLE_SHEET_API_BASE}/${process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID_PROJECT}/values/${range}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
  const { values: projectValues } = await fetch(sheetProjectApi).then((res) =>
    res.json()
  );
  const projectsData = projectValues;

  const sheetAchievementApi =
    'https://sheets.googleapis.com/v4/spreadsheets/1E3TcRRSEYTAZ4w-io-uDvcDAifxfit8klSs6gSVfiY0/values/A:E?key=AIzaSyDXtHX8ByZFCQJPta9HOFZlJOcOhlf8b5Q';
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
