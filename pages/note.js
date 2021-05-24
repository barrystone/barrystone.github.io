import React from 'react';
import Link from 'next/link';

const note = () => {
  return (
    <div
      style={{
        display: 'flex',
        color: '#fff',
        fontSize: '10rem',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100%'
      }}
    >
      <div style={{}}>開發中...</div>
      <p />
      <div style={{}}>Developing</div>
      <Link href="/" as={process.env.BACKEND_URL}>
        <a
          style={{
            color: 'black',
            textDecoration: 'none',
            position: 'absolute',
            top: '5rem',
            left: '10rem',
            fontSize: '5rem',
            backgroundColor: 'white',
            padding: '1rem 2rem',
            borderRadius: '15px',
            fontWeight: 'bold'
          }}
        >
          首頁
        </a>
      </Link>
    </div>
  );
};

export default note;
