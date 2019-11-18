import {Review} from '../../utils/models';

const style = {
  margin: 10,
  padding: 10,
  border: '1px solid #DDD',
  borderRadius: '2px'
};

type Props = {
  review: Review
}

const ReviewComp: React.FC<Props> = ({review}) => {
  return (
    <div className="review" style={style}>
      <p>{review.user.name}</p>
      <p>{review.rating}</p>
      <p>{review.comment}</p>
    </div>
  )
}

export default ReviewComp;