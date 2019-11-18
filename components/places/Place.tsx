import ReviewComp from '../reviews/Review';
import {Place, Review} from '../../utils/models';

type Props = {
  place: Place,
  reviews: Review[]
}

const PlaceComp: React.FC<Props> = ({place, reviews}) => {
  return (
    <div className="place">
      <h1>{place.name}</h1>
      <p>{place.address.street}</p>
      <p>{place.address.post}</p>
      <p>{place.address.city}</p>
      <p>
        [{place.tags.map((tag: string, index: number) => (
          <i key={tag}>
            {tag + (index < place.tags.length - 1 ? ',' : '')}
          </i>
        ))}]
      </p>
      <h3>Reviews</h3>
      {reviews.map((review: Review) => (
        <ReviewComp key={review.id} review={review}/>
      ))}
    </div>
  )
}

export default PlaceComp;