import Link from 'next/link';
import Layout from '../components/Layout';
import * as placesApi from '../api/places';

const Index = (props: any) => (
  <Layout>
    <h1>TheProject Web App</h1>
    <h2>Places</h2>
    <ul>
      {props.places.map((place: any) => (
        <li key={place.id}>
          <Link href="/place/[id]" as={`/place/${place.id}`}>
            <a>{place.name}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
        h1,
        h2,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
          margin-left: 5px;
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
  const res = await fetch('http://localhost:8080/places');
  if (!res.ok) {
    console.error(res);
    return {};
  } 
  const places = await res.json();
  console.log(`Places data fetched. Count: ${places.length}`);

  return { places };
};

export default Index;