import Markdown from 'react-markdown';
import Layout from '../../components/Layout';
import * as placesApi from '../../api/places';

const Place = (props: any) => (
  <Layout>
    <h1>{props.place.name}</h1>
    <p>{props.place.id}</p>
    <style jsx global>{`
      h1,
      h2,
      p {
        font-family: 'Arial';
      }
      
      a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
);

Place.getInitialProps = async function(context: any) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:8080/places/${id}`);
  if (!res.ok) {
    console.error(res);
    return {};
  }
  const place = await res.json();
  console.log(`Place data fetched.`);

  return { place };
};

export default Place;