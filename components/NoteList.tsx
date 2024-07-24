import React from 'react';
import { motion } from 'framer-motion';
import { NotesData } from '../utils/analyzeReadme';

const LIST_NOTES = 6;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface NoteListProps {
  notes: NotesData[string];
  isVisible: boolean;
}

const NoteList: React.FC<NoteListProps> = ({ notes, isVisible }) => {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {notes
        .slice(0, LIST_NOTES)
        .map((note: NotesData[string][0], index: number) => (
          <motion.li
            key={index}
            className={
              Object.keys(note).toString().length >= 20
                ? 'notetree__li-font--small'
                : ''
            }
            variants={item}
          >
            &nbsp;
            <a href={Object.values(note).toString()} target="_blank">
              {Object.keys(note)}
            </a>
          </motion.li>
        ))}

      {notes?.length > 0 ? (
        <motion.li
          style={{
            listStyle: 'none',
            letterSpacing: '.3rem',
            fontSize: '1.8rem',
            marginTop: '-1.5rem',
          }}
          variants={item}
        >
          ...
        </motion.li>
      ) : (
        ''
      )}
    </motion.ul>
  );
};

export default NoteList;
