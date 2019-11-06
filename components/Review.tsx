import {Review} from '../utils/models';

const style = {
  margin: 10,
  padding: 10,
  border: '1px solid #DDD'
};

const ReviewComp = (props: PropTypes) => {
  return (
    <div className="review" style={style}>
      <p>{props.review.user.name}</p>
      <p>{props.review.rating}</p>
      <p>{props.review.comment}</p>
    </div>
  )
}

type PropTypes = {
  review: Review
}

export default ReviewComp;