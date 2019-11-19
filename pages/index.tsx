import {Place} from '../utils/models';
import * as placesApi from '../api/places';
import Layout from '../components/Layout';
import PlaceList from '../components/places/PlaceList';
import NewPlace from '../components/places/NewPlace';

type Props = {
  token: string,
  places: Place[]
}

const Index = (props: Props) => (
  <Layout>
    <PlaceList places={props.places}/>
    <NewPlace/>
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