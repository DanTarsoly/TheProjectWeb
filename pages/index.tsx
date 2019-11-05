import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const Index = (props: any) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map((show: any) => (
        <li key={show.id}>
          <Link href="/show/[id]" as={`/show/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry: any) => entry.show)
  };
};

export default Index;