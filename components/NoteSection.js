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

  const listNotes = 6;
  // setTimeout(() => console.log(Object.values(notes)), 2000);

  return (
    <section className="section section-note">
      <div className="section-note__container">
        {Object.keys(notes)
          .splice(0, 10)
          .map((e, idx) => (
            <section className="section-note__topicbox" key={idx}>
              <div className="notetree">
                <div
                  className={`notetree__title ${
                    e.length > 12 ? 'notetree__title-font--small' : ''
                  }`}
                >
                  <p>{e}</p>
                </div>
                <ul key={idx}>
                  {notes[e].splice(0, listNotes).map((f, index) => (
                    <li
                      key={index}
                      className={
                        Object.keys(f).toString().length >= 20
                          ? 'notetree__li-font--small'
                          : // console.log('big')
                            ''
                      }
                    >
                      <a href={Object.values(f)} target="_blank">
                        {Object.keys(f)}
                      </a>
                    </li>
                  ))}
                  {notes[e].length > 0 ? (
                    <li
                      style={{
                        listStyle: 'none',
                        letterSpacing: '.3rem',
                        fontSize: '1.8rem',
                        marginTop: '-1.5rem'
                      }}
                    >
                      ...
                    </li>
                  ) : (
                    ''
                  )}
                </ul>
              </div>
            </section>
          ))}
      </div>
    </section>
  );
};

export default NoteSection;
