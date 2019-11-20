import { FormEvent, ChangeEvent, useState} from 'react';
import Router from 'next/router'
import * as authApi from '../../api/auth';
import { NewUser, AuthData} from '../../utils/models';
import ErrorBox from '../ErrorBox';


const RegisterComp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('')
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('')
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const newUser: NewUser = {
      email: email,
      name: name,
      password: password
    }
    authApi.register(newUser)
      .then(authData => {
        localStorage.setItem('jwt', authData.token);
        Router.replace('/');
      })
      .catch(err => setError(err.message));
    event.preventDefault();
  }

  const updateEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const updatePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const updatePassword2 = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword2(event.target.value);
  }

  return (
    <form className="register-form"
        onSubmit={handleSubmit}
        style={registerStyle}>
          
      <h1>Sign up</h1>
      {error && <ErrorBox>{error}</ErrorBox>}
      <button type="button" style={buttonStyle}>Facebook</button>
      <button type="button" style={buttonStyle}>Google</button>
      <input 
          name="name"
          placeholder="Full Name"
          onChange={updateName}
          style={inputStyle}/>
      <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateEmail}
          style={inputStyle}/>
      <input 
          type="password"
          name="password"
          placeholder="Password"
          onChange={updatePassword}
          style={inputStyle}/>
      <input 
          name="password2"
          type="password"  
          placeholder="Confirm Password"
          onChange={updatePassword2}
          style={inputStyle}/>
      <button style={buttonStyle}>Sign up</button>
    </form>
  )
}

const registerStyle = {
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

export default RegisterComp;