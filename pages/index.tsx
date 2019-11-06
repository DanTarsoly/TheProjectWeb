import Link from 'next/link';
import Layout from '../components/Layout';
import PlaceList from '../components/PlaceList'
import * as placesApi from '../api/places';
import {Place} from '../utils/models';

const Index = (props: {places: Place[]}) => (
  <Layout>
    <h1>TheProject Web App</h1>
    <h2>Places</h2>
    <PlaceList places={props.places}/>

    <style jsx>{`
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