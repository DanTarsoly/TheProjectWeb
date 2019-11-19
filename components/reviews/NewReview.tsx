import { FormEvent, ChangeEvent, useState} from 'react';
import ErrorBox from '../ErrorBox';

type Props = {
  place: string
}

const NewRevirew: React.FC<Props> = ({place}) => {
  const [rating, setRating] = useState();
  const [comment, setComment] = useState();
  const [error, setError] = useState();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // authApi.basic(email, password)
    //   .then(authData => {
    //     localStorage.setItem('jwt', authData.token);
    //     Router.replace('/');
    //   })
    //   .catch(err => setError(err.message));
    event.preventDefault();
  }

  const updateRating = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
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