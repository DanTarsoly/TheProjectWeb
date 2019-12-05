import {Place, Review} from '../../utils/models';
import ReviewComp from '../reviews/Review';
import NewReviewComp from '../reviews/NewReview'

type Props = {
  place: Place,
  reviews: Review[]
}

const PlaceComp: React.FC<Props> = ({place, reviews}) => {
  return (
    <div className="place" style={placeStyle}>
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
      <NewReviewComp placeId={place.id}/>
    </div>
  )
}

const placeStyle = {
  padding: 20,
  margin: 20,
  border: '1px solid #DDD',
  borderRadius: 4
}

export default PlaceComp;