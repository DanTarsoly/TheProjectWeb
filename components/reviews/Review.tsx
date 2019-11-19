import {Review} from '../../utils/models';

type Props = {
  review: Review
}

const ReviewComp: React.FC<Props> = ({review}) => {
  return (
    <div className="review" style={reviewStyle}>
      <p>{review.user.name}</p>
      <p>{review.rating}</p>
      <p>{review.comment}</p>
    </div>
  )
}

const reviewStyle = {
  margin: 10,
  padding: 10,
  border: '1px solid #DDD',
  borderRadius: 4
};

export default ReviewComp;