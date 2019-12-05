import { FormEvent, ChangeEvent, useState} from 'react';
import Router from 'next/router';
import * as reviewsApi from '../../api/reviews';
import { NewReview } from '../../utils/models';
import ErrorBox from '../ErrorBox';

type Props = {
  placeId: string
}

const NewRevirew: React.FC<Props> = ({placeId}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      const newReview: NewReview = {
        place: placeId,
        rating: rating,
        comment: comment
      }
      reviewsApi.create(newReview, token)
      .then(review => {
        Router.replace(`/place/${placeId}`);
      })
      .catch(err => setError(err.message));
    } else {
      setError('Log in to add a review!');
    }
    event.preventDefault();
  }

  const updateRating = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  }

  const updateComment = (event: ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  }

  return (
    <form className="create-place-form"
        onSubmit={handleSubmit}
        style={newReviewStyle}>
    <h2>Add Review</h2>
    {error && <ErrorBox>{error}</ErrorBox>}
    <input 
        type="number"
        name="rating"
        placeholder="Rating"
        onChange={updateRating}
        style={inputStyle}/>
    <input 
        name="comment"
        placeholder="Comment"
        onChange={updateComment}
        style={inputStyle}/>
    <button style={buttonStyle}>Save</button>
  </form>
  )
}

const newReviewStyle = {
  padding: 20,
  margin: 20,
  border: '1px solid #DDD',
  borderRadius: 4
}

const buttonStyle = {
  marginTop: '5px',
  marginRight: '5px'
}

const inputStyle = {
  display: 'block',
  marginTop: '5px'
}

export default NewRevirew;