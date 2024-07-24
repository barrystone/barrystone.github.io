import React, { useEffect, useState } from 'react';
import analyzeReadme, { NotesData } from '../utils/analyzeReadme';
import VisibilitySensor from 'react-visibility-sensor';
import NoteList from './NoteList';
import { motion } from 'framer-motion';

const NoteSection = () => {
  const [notes, setNotes] = useState<NotesData>({});
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchNotes = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/barrystone/hackmd_public-notes/master/README.md',
          { signal }
        );
        const tdata = await res.text();
        setNotes(analyzeReadme(tdata));

        if (res.status !== 200) {
          const res = await fetch(`${window.location.origin}/api/notes`, {
            signal,
          });
          const serverSideData = await res.json();
          setNotes(serverSideData.analyzedData);
        }
      } catch (err: any) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.log('error', err.message);
        }
      }
    };

    fetchNotes();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <VisibilitySensor
      onChange={(isVisible: boolean) => {
        setIsVisible(isVisible);
      }}
      partialVisibility
    >
      <motion.div
        initial={{
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
          backgroundColor: '#fff',
        }}
        animate={
          isVisible
            ? { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }
            : { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }
        }
        transition={{
          duration: 0.3,
          // delay: 0.5,
          // delayChildren: 1,
          ease: 'easeIn',
        }}
      >
        <section className="section section-note">
          <div className="section-note__container">
            {Object.keys(notes)
              .slice(0, 10)
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
                    <NoteList notes={notes[e]} isVisible={isVisible} />
                  </div>
                </section>
              ))}
          </div>
        </section>
      </motion.div>
    </VisibilitySensor>
  );
};

export default NoteSection;
