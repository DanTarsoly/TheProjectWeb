import { FormEvent, ChangeEvent, useState} from 'react';
import Router from 'next/router';
import * as placesApi from '../../api/places';
import { NewPlace } from '../../utils/models';
import ErrorBox from '../ErrorBox';

type Props = {
}

const NewPlaceComp: React.FC<Props> = ({}) => {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [post, setPost] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      const newPlace: NewPlace = {
        name: name,
        address: {
          street: street,
          post: post,
          city: city
        }
      }
      placesApi.create(newPlace, token)
      .then(place => {
        Router.replace(`/place/${place.id}`);
      })
      .catch(err => setError(err.message));
    } else {
      setError('Log in to add a place!');
    }
    event.preventDefault();
  }

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const updateStreet = (event: ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  }

  const updatePost = (event: ChangeEvent<HTMLInputElement>) => {
    setPost(event.target.value);
  }

  const updateCity = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  }

  return (
    <form className="create-place-form" 
        onSubmit={handleSubmit}
        style={newPlaceStyle}>
    {error && <ErrorBox>{error}</ErrorBox>}
    <h2>Add Place</h2>
    <input 
        name="name"
        placeholder="Name"
        onChange={updateName}
        style={inputStyle}/>
    <input 
        name="street"
        placeholder="Street Address"
        onChange={updateStreet}
        style={inputStyle}/>
    <input 
        name="post"
        placeholder="Postal Code"
        onChange={updatePost}
        style={inputStyle}/>
    <input 
        name="city"
        placeholder="City"
        onChange={updateCity}
        style={inputStyle}/>
    <button style={buttonStyle}>Save</button>
  </form>
  )
}

const newPlaceStyle = {
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

export default NewPlaceComp;