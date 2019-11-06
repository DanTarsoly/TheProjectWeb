import ReviewComp from './Review';
import {Place, Review} from '../utils/models';

const style = {
  // margin: 5,
  // padding: 5,
  // border: '1px solid #DDD'
};

const PlaceComp = (props: PropTypes) => {
  return (
    <div className="place" style={style}>
      <h1>{props.place.name}</h1>
      <p>{props.place.address.street}</p>
      <p>{props.place.address.post}</p>
      <p>{props.place.address.city}</p>
      <p>
        [{props.place.tags.map((tag: string, index: number) => (
          <i key={tag}>
            {tag + (index < props.place.tags.length - 1 ? ',' : '')}
          </i>
        ))}]
      </p>
      <h3>Reviews</h3>
      {props.reviews.map((review: Review) => (
        <ReviewComp key={review.id} review={review}/>
      ))}
    </div>
  )
}

type PropTypes = {
  place: Place,
  reviews: Review[]
}

export default PlaceComp;