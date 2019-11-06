import Link from 'next/link';
import Layout from '../components/Layout';
import * as placesApi from '../api/places';
import {Place} from '../utils/models';

const Index = (props: {places: Place[]}) => (
  <Layout>
    <h1>TheProject Web App</h1>
    <h2>Places</h2>
    <ul>
      {props.places.map((place: Place) => (
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
          padding-left: 5px;
        }

        li {
          list-style: none;
          margin: 5px;
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
  try {
    return {
      places: await placesApi.readMany()
    }
  }
  catch (error) {
    console.error(error);
    return { error };
  }
};

export default Index;