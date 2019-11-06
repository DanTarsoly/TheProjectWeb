import {Review} from '../utils/models';

const ReviewComp = (props: PropTypes) => {
  return (
    <div className="review">
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