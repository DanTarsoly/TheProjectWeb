import Layout from '../../components/Layout';
import PlaceComp from '../../components/Place';
import * as placesApi from '../../api/places';
import * as reviewsApi from '../../api/reviews';
import {Place, Review} from '../../utils/models';

const PlacePage = (props: {place: Place, reviews: Review[]}) => (
  <Layout>
    <PlaceComp place={props.place} reviews={props.reviews}/>
    <style jsx>{`
      `}</style>
  </Layout>
);

PlacePage.getInitialProps = async function(context: any) {
  const { id } = context.query;
  try {
    const place = await placesApi.read(id);
    const reviews = await reviewsApi.readMany(id);
    return { 
      place: place,
      reviews: reviews
    };
  }
  catch (error) {
    console.error(error);
    return { error };
  }
};

export default PlacePage;