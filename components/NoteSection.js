import React, { useEffect, useState } from 'react';
import analyzeReadme from '../utils/analyzeReadme';

const NoteSection = () => {
  const [notes, setNotes] = useState({});

  useEffect(() => {
    fetchMd();
  }, []);

  const url =
    'https://raw.githubusercontent.com/barrystone/hackmd_public-notes/master/README.md';
  const fetchMd = async () => {
    try {
      const res = await fetch(url);
      const tdata = await res.text();

      setNotes(analyzeReadme(tdata));
    } catch (err) {
      console.log('error: ', err);
    }
  };

  return (
    <section className="section section-note">
      <div className="section-about__container">
        {Object.keys(notes).map((e, idx) => (
          <ul key={idx}>
            <h3>{e}</h3>
            {notes[e].map((f, index) => (
              <li key={index}>
                <a href={Object.values(f)}>{Object.keys(f)}</a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default NoteSection;
