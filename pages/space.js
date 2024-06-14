import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import VirtualSpace from '../components/VirtualSpace';

const space = () => {
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
        width: '100%',
      }}
    >
      <Head>
        <title>Barrystone - Virtual Space</title>
      </Head>
      <VirtualSpace />
      <Link
        href="/"
        as={process.env.BACKEND_URL + '/'}
        style={{
          position: 'absolute',
          top: '3rem',
          left: '3rem',
        }}
        className="btn-tertiary"
      >
        Home
      </Link>
    </div>
  );
};

export default space;
