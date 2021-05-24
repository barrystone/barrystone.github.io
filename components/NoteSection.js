import React, { useEffect, useState } from 'react';
import analyzeReadme from '../utils/analyzeReadme';

const NoteSection = () => {
  const [notes, setNotes] = useState({});

  useEffect(() => {
    fetchMd();
  }, []);

  const fetchMd = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_GITHUB_HACKMDREADME_API);
      const tdata = await res.text();

      setNotes(analyzeReadme(tdata));
    } catch (err) {
      console.log('error: ', err);
    }
  };

  return (
    <section className="section section-note">
      <div className="section-note__container">
        {Object.keys(notes)
          .splice(0, 8)
          .map((e, idx) => (
            <section className="section-note__topicbox">
              <div className="notetree">
                <div className="notetree__title">
                  <p>{e}</p>
                </div>
                <ul key={idx}>
                  {notes[e].map((f, index) => (
                    <li key={index}>
                      <a href={Object.values(f)} target="_blank">
                        {Object.keys(f)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
      </div>
    </section>
  );
};

export default NoteSection;
