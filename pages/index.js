// import styles from '../styles/Home.module.css';
import Header from '../components/layout/Header';
import AboutSection from '../components/AboutSection';
import RepoSection from '../components/RepoSection';
import NoteSection from '../components/NoteSection';
import Footer from '../components/layout/Footer';
import Navigation from '../components/layout/Navigation';

export default function Home({ reposData }) {
  return (
    <div>
      <nav>
        <Navigation />{' '}
      </nav>
      <header>
        <Header />
      </header>
      <main>
        <AboutSection />
        <RepoSection reposData={reposData} />
        <NoteSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const repoApi = 'https://api.github.com/users/barrystone/repos';

  const reposData = await fetch(repoApi).then((res) => res.json());

  return {
    props: {
      reposData
    }
  };
}
