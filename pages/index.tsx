import Head from 'next/head';

// import styles from '../styles/Home.module.css';
import Header from '../components/layout/Header';
import AboutSection from '../components/AboutSection';
import RepoSection from '../components/RepoSection';
import NoteSection from '../components/NoteSection';
import Footer from '../components/layout/Footer';
import Navigation from '../components/layout/Navigation';

const CustomHead = () => {
  return (
    <Head>
      <title>Barrystone - Home</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </Head>
  );
};

export default function Home({ reposData }: any) {
  return (
    <div>
      <CustomHead />
      <nav>
        <Navigation />
      </nav>
      <header>
        <Header />
      </header>
      <main>
        <AboutSection />
        <RepoSection reposData={reposData ?? []} />
        <NoteSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const repoApi = 'https://api.github.com/users/barrystone/repos?sort=updated';
  const reposData = await fetch(repoApi).then((res) => res.json());
  // const reposData = null;
  return {
    props: {
      reposData,
    },
  };
}
